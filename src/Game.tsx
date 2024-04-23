export type SpaceState = 'Removed' | 'Open' | 'White' | 'Gray' | 'Black';

export const BOARD_SIZE = 7;

const board: SpaceState[][] = Array(BOARD_SIZE + 2).fill(0).map(() => Array(BOARD_SIZE + 2).fill('Open'));

class Coordinate  {
    static NW = new Coordinate(-1, 0);
    static NE = new Coordinate(-1, 1);
    static E = new Coordinate(0, 1);
    static SE = new Coordinate(1, 0);
    static SW = new Coordinate(1, -1);
    static W = new Coordinate(0, -1);
    static directions = [Coordinate.NW, Coordinate.NE, Coordinate.E, Coordinate.SE, Coordinate.SW, Coordinate.W];

    row: number;
    column: number

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    getNeighbor(direction: Coordinate) {
        return new Coordinate(this.row + direction.row, this.column + direction.column);
    };

    getNeighbors() {
        return Coordinate.directions.map(d => this.getNeighbor(d));
    };

    // get NE() {
    //     return this.getNeighbor(Coordinate.NE))
    // }

}

// Representation of Zertz board.
// Note that rows 0 & 8 and columns 0 & 8
//    are empty so that all cells in 1-7
//    have a full complement of neighbors
    //  \0\1\2\3\4\5\6\7\8\
    // 0 \ \ \ \ \ \ \ \ \ \
    // 1  \ \ \ \ \O\O\O\O\ \
    // 2   \ \ \ \O\O\O\O\O\ \
    // 3    \ \ \O\O\O\O\O\O\ \
    // 4     \ \O\O\O\O\O\O\O\ \
    // 5      \ \O\O\O\O\O\O\ \ \
    // 6       \ \O\O\O\O\O\ \ \ \
    // 7        \ \O\O\O\O\ \ \ \ \
    // 8         \ \ \ \ \ \ \ \ \ \

export const initBoard = () => {
    for (let i = 0; i < BOARD_SIZE + 2; i++) {
        for (let j = 0; j < BOARD_SIZE + 2; j++) {
            board[i][j] = 'Removed';
        }
    }

    for (let row = 1; row <= BOARD_SIZE; row++) {
        const trim = Math.ceil(BOARD_SIZE / 2) - row;   // [3, 2, 1, 0, -1, -2, -3]
        const start = Math.max(1, trim + 1);            // [4, 3, 2, 1, 1, 1, 1]
        const end = BOARD_SIZE + Math.min(0, trim);     // [7, 7, 7, 7, 6, 5, 4]

        for (let j = start; j <= end; j++) {
            board[row][j] = 'Open';
        }
    }
};

export const getState = (rowOrCoordinate: number | Coordinate, col?: number) => {

    if (rowOrCoordinate instanceof Coordinate) {
        col = rowOrCoordinate.column;
        rowOrCoordinate = rowOrCoordinate.row;
    }
    return board[rowOrCoordinate][col!];
}

// List neighbor cells in circular fashion, beginning at upper-left.
export const getNeighborStates = (row: number, col: number): SpaceState[] => {
    const coord = new Coordinate(row, col);
    // const neighbors: SpaceState[] = [
    //     board[row - 1][col],
    //     board[row - 1][col + 1],
    //     board[row][col + 1],
    //     board[row + 1][col],
    //     board[row + 1][col - 1],
    //     board[row][col - 1],
    // ];
    return coord.getNeighbors().map(c => getState(c));
};

export const canRemove = (row: number, col: number) =>
{
    if (board[row][col] !== 'Open') return false;

    const neighbors = getNeighborStates(row, col);

    // If any two neighbors in a row are Removed,
    // then this space can be removed
    for (let i of [0, 1, 2, 3, 4, 5]) {
        if (neighbors[i] === 'Removed'
        && neighbors[(i+1) % 6] === 'Removed') {
            return true;
        }
    }

    return false;
};

export const isOccupied = (row: number, col: number) => {
    return (board[row][col] === 'White' ||
            board[row][col] === 'Gray' ||
            board[row][col] === 'Black');
};

export const isChangeAllowed = (row: number, col: number, newState: SpaceState) => {
    let allowed = false;
    switch (newState) {
        case 'White':
        case 'Black':
        case 'Gray':
            allowed = (board[row][col] === 'Open');
            break;
        case 'Open':
            allowed = isOccupied(row, col);
            break;
        case 'Removed':
            allowed = canRemove(row, col);
    }
    // /* */ console.log('Allowed', allowed)
    return allowed;
}

export const setState = (newState: SpaceState, rowOrCoordinate: number | Coordinate, col?: number) => {
     if (rowOrCoordinate instanceof Coordinate) {
        col = rowOrCoordinate.column;
        rowOrCoordinate = rowOrCoordinate.row;
    }
   if (isChangeAllowed(rowOrCoordinate, col!, newState)) {
        board[rowOrCoordinate][col!] = newState;
        return true;
    } else {
        return false;
    }
};

export const getJumps = () => {
    // For each occupied ring, calculate whether the stone there can make any jumps,
    // then return a boolean mask of the board where stones with jumps available are
    // indicated as true and all else are shown as false.

    let jumps: boolean[][] = Array(BOARD_SIZE + 2).fill(0).map(_ => Array(BOARD_SIZE + 2).fill(false));
    
    for (let i = 0; i < jumps.length; i++) {
        for (let j = 0; j < jumps[i].length; j++) {

            if (!isOccupied(i,j)) { // Ignore unoccupied rings
                continue;
            } 

            for (let d of Coordinate.directions) {
                const here = new Coordinate(i, j);
                const neighbor = here.getNeighbor(d);
                const destination = neighbor.getNeighbor(d);
                if (isOccupied(neighbor.row, neighbor.column) && getState(destination) === "Open") {
                    jumps[i][j] = true;
                    break; // go to next cell
                }
            }

            // // only one condition need be met for the ring to have a jump possible
            // else if (isOccupied(i, j+1) && board[i][j+2] === 'Open') { // check for straight right jump
            //     jumps[i][j] = true;
            // }
            // else if (isOccupied(i, j-1) && board[i][j-2] === 'Open') { // check for straight left jump
            //     jumps[i][j] = true;
            // }
            // else if (isOccupied(i-1, j) && board[i-2][j] === 'Open') { // check for up left diagonal jump
            //     jumps[i][j] = true;
            // }
            // else if (isOccupied(i-1, j+1) && board[i-2][j+2] === 'Open') { // check for up right diagonal jump
            //     jumps[i][j] = true;
            // }
            // else if(isOccupied(i+1, j) && board[i+2][j] === 'Open') { // check for down right diagonal jump
            //     jumps[i][j] = true;
            // }
            // else if (isOccupied(i+1, j-1) && board[i+2][j-2] === 'Open') { // check for down left diagonal jump
            //     jumps[i][j] = true;
            // }
        }
    }
    return jumps;
};

export const toString = () => {
    const symbols = {
        'Removed': ' ',
        'Open': 'O',
        'White': 'W',
        'Black': 'B',
        'Gray': 'G',
    }
    let output = '\\0\\1\\2\\3\\4\\5\\6\\7\\8\\';
    for (let i = 0; i < BOARD_SIZE + 2; i++) {
        output += '\n' + i +' '.repeat(i) + '\\';
        for (let j = 0; j < BOARD_SIZE + 2; j++) {
            output += symbols[getState(i, j)] + '\\';
        }
    }
    return output;
};