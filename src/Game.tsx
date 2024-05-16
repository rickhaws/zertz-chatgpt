const ballColors = ['White', 'Gray', 'Black'];
export type BallColor = typeof ballColors[number];
const isBallColor = (maybeColor: SpaceState): maybeColor is BallColor => ballColors.includes(maybeColor);
export type SpaceState = BallColor | 'Removed' | 'Open';
export type GameState = {
    ballPool: BallCollection;
    player1Balls: BallCollection;
    player2Balls: BallCollection;
    playerTurn: number;
    turnStage: TurnStage;
    ballSelectedForPlacement: BallColor | null;
    jumpOrigin: {row: number, column: number} | null;
    winner: number;
};

const stages = [
    'SelectBallForPlacement',
    'SelectJump',
    'SelectPlacement',
    'RemoveRing',
    'PlaceFirstJump',
    'CompleteJumpOrPlaceNextJump',
];
export type TurnStage = typeof stages[number];
const isStage = (maybeStage: string): maybeStage is TurnStage => stages.includes(maybeStage);
export type BallCollection = { [key: BallColor]: number };

const initialGameState: GameState = {
    ballPool: { White: 6, Gray: 8, Black: 10 }, // **TODO**: Check these numbers
    player1Balls: { White: 0, Gray: 0, Black: 0 } as BallCollection,
    player2Balls: { White: 0, Gray: 0, Black: 0 } as BallCollection,
    playerTurn: 1,
    turnStage: 'SelectBallForPlacement' as TurnStage,
    ballSelectedForPlacement: null as BallColor | null,
    jumpOrigin: null,
    winner: 0,
}

let gameState = initialGameState;

export const BOARD_SIZE = 7;

const board: SpaceState[][] = Array(BOARD_SIZE + 2).fill(0).map(() => Array(BOARD_SIZE + 2).fill('Open'));

export const getGameState = () => ({...gameState});

export const setGameState = (state: GameState) => {
    gameState = {...state};
}

export const getBoardState = () => board.map(row => row.slice());

/**
 * Convenience class to simplify working with neighbors
 */
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

const coord = (row: number, col: number) => new Coordinate(row, col);

export const Direction = {
    NW: Coordinate.NW, 
    NE: Coordinate.NE, 
    E: Coordinate.E, 
    SE: Coordinate.SE, 
    SW: Coordinate.SW, 
    W: Coordinate.W,
};

export const Directions = [...Coordinate.directions];

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

export const init = () => {
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

    setGameState(initialGameState);
};

export const getState = (row: number, col: number): SpaceState => {
    return board[row][col];
}

// List neighbor cells in circular fashion, beginning at upper-left.
export const getNeighborStates = (row: number, col: number): SpaceState[] => {
    return coord(row, col).getNeighbors().map(c => getState(c.row, c.column));
};

export const canRemove = (row: number, col: number) =>
{
    if (getState(row, col) !== 'Open') return false;

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

export const isOccupied = (row: number, col: number) => isBallColor(getState(row, col));

export const isChangeAllowed = (row: number, col: number, newState: SpaceState) => {
    let allowed = false;
    switch (newState) {
        case 'White':
        case 'Black':
        case 'Gray':
            allowed = (getState(row, col) === 'Open');
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

export const removeRing = (row: number, col: number) => setState("Removed", row, col);

export const canJump = (row: number, col: number, direction?: Coordinate): boolean => {
    const cell = coord(row, col);
    const directions = direction ? [direction] : Coordinate.directions;
    for (let d of directions) {
        const neighbor = cell.getNeighbor(d);
        const destination = neighbor.getNeighbor(d);
        if (isOccupied(cell.row, cell.column) 
            && isOccupied(neighbor.row, neighbor.column) 
            && getState(destination.row, destination.column) === 'Open') {
            return true;
        }
    }
    return false;
};

export const getJumps = () => {
    // For each occupied ring, calculate whether the stone there can make any jumps,
    // then return a boolean mask of the board where stones with jumps available are
    // indicated as true and all else are shown as false.

    let jumps: boolean[][] = Array(BOARD_SIZE + 2).fill(0).map(_ => Array(BOARD_SIZE + 2).fill(false));
    
    for (let i = 0; i < jumps.length; i++) {
        for (let j = 0; j < jumps[i].length; j++) {
            for (let direction of Coordinate.directions) {
                if (canJump(i, j, direction)) {
                    jumps[i][j] = true;
                    break; // go to next cell
                }
            }
        }
    }
    return jumps;
};

export const jumpsExist = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < board[i].length; j++) {
            for (let direction of Coordinate.directions) {
                if (canJump(i, j, direction)) {
                    return (true);
                }
            }
        }
    }
    return false;
}

export const getRemovables = () => {
    let removables: boolean[][] = Array(BOARD_SIZE + 2).fill(0).map(_ => Array(BOARD_SIZE + 2).fill(false));

    for (let row = 0; row < removables.length; row++) {
        for (let col = 0; col < removables[row].length; col++) {
            removables[row][col] = canRemove(row, col);
        }
    }
    return removables;
}

export const removableRingsExist = () => {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if(canRemove(row, col)) {
                return true;
            }
        }
    }
    return false;
}

export const jump = (row: number, col: number, direction: Coordinate) => {
    if (!canJump(row, col, direction)) {
        return '';
    }
    const origin = coord(row, col);
    const neighbor = origin.getNeighbor(direction);
    const destination = neighbor.getNeighbor(direction);
    const movedBall = getState(row, col);
    const removedBall = getState(neighbor.row, neighbor.column);
    setState('Open', row, col);
    setState('Open', neighbor.row, neighbor.column);
    setState(movedBall, destination.row, destination.column);
    return removedBall;
}

export const setNextPlayersTurn = () => {
    gameState.playerTurn = gameState.playerTurn % 2 + 1;  // 1 -> 1 + 1 ; 2 ->  + 1
    gameState.turnStage = 'SelectBallForPlacement';
}

export const selectBallFromPool = (color: BallColor) => {
    try {
        selectBallFromCollection(gameState.ballPool, color);
    } catch (e) {
        throw e + `: ball pool`;
    }
}

export const selectBallFromPlayerStash = (color: BallColor) => {
    const stash = gameState.playerTurn === 1 ? gameState.player1Balls : gameState.player2Balls;

    try {
        selectBallFromCollection(stash, color);
    } catch (e) {
        throw e + `: ball pool`;
    }
}

export const selectBallFromCollection = (collection: BallCollection, color: BallColor) => {
    if (collection[color] <= 0) {
        throw `No ${color} balls available for selection`;
    }
    gameState.turnStage = "SelectPlacement";
    gameState.ballSelectedForPlacement = color;
}

export const placeBall = (row: number, col: number) => {
    if (getState(row, col) !== 'Open') {
        throw `Attempted to place ball at ${row}, ${col} with non-open state: ${getState(row, col)}`;
    }
    if (gameState.ballSelectedForPlacement === null) {
        throw `Attempted to place a ball when no ball is selected`;
    }

    let pool = gameState.ballPool;
    let color = gameState.ballSelectedForPlacement;
    if (pool[color] <= 0) {
        pool = gameState.playerTurn === 1 ? gameState.player1Balls : gameState.player2Balls;
    }

    if (pool[color] <= 0) {
        throw `Attempted to place a ${color} ball for Player ${gameState.playerTurn} ` +
            `whose ${color} ball count is ${pool[color]}`;
    }

    setState(color, row, col);
    pool[color]--;
    gameState.ballSelectedForPlacement = null;
    setNextPlayersTurn();
}

export const placeJump = (row: number, col: number) => {
    if (gameState.turnStage !== 'PlaceFirstJump' &&
        gameState.turnStage !== 'CompleteJumpOrPlaceNextJump' ||
        gameState.jumpOrigin === null) {
        throw `Attempted to place a jump when a jump is not in progress: ${gameState.turnStage}`;
    }

    const origin = new Coordinate(gameState.jumpOrigin.row, gameState.jumpOrigin.column);
    const destination = new Coordinate(row, col);

    Directions.forEach((d) => {
        if (origin.getNeighbor(d).getNeighbor(d) === destination)
    })
    throw `Jump: ${row}, ${col} is not a valid destination for ` +
        `${gameState.jumpOrigin.row}, ${gameState.jumpOrigin.column}`;
}

export const toString = () => {
    const symbols: { [key: SpaceState]: string } = {
        'Removed': ' ',
        'Open': 'O',
        'White': 'W',
        'Black': 'B',
        'Gray': 'G',
    };

    let output = '\\0\\1\\2\\3\\4\\5\\6\\7\\8\\';
    for (let i = 0; i < BOARD_SIZE + 2; i++) {
        output += '\n' + i +' '.repeat(i) + '\\';
        for (let j = 0; j < BOARD_SIZE + 2; j++) {
            output += symbols[getState(i, j)] + '\\';
        }
    }

    output += "\n\n" + JSON.stringify(gameState, null, 2);

    return output;
};

