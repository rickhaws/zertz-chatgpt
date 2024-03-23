export type SpaceState = 'Removed' | 'Open' | 'White' | 'Gray' | 'Black';

export const BOARD_SIZE = 7;

const board: SpaceState[][] = Array(BOARD_SIZE).map(row => Array(BOARD_SIZE).map(col => 'Open'));

export const initBoard = () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3-i; j++) {
                        board[i][j] = 'Removed';
                        board[BOARD_SIZE-i-1][BOARD_SIZE-j-1];
        }
    }
}

export const getState = (row: number, col: number) => board[row][col];

export const canRemove = (row: number, col: number) =>
{
    if (board[row][col] !== 'Open') return false;

    //	\0\1\2\3\4\5\6\
    // 0 \ \ \ \O\O\O\O\
	// 1  \ \ \O\O\O\O\O\
	// 2   \ \O\O\O\O\O\O\
	// 3    \O\O\O\O\O\O\O\
	// 4     \O\O\O\O\O\O\ \
	// 5      \O\O\O\O\O\ \ \
	// 6       \O\O\O\O\ \ \ \

    // List neighbor cells in circular fashion, repeating first at the end
    const neighbors: SpaceState[] = getNeighbors(row, col);

    // If any two neighbors in a row are Removed,
    // then this space can be removed
    let previous: SpaceState = 'Open';
    for (let current of neighbors)
    {
        if (previous === 'Removed' && current === 'Removed') return true;
        previous = current;
    }

    return false;
}

export const getNeighbors = (row: number, col: number): SpaceState[] => {
    const neighbors: SpaceState[] = [
        board[row - 1][col],
        board[row - 1][col + 1],
        board[row][col + 1],
        board[row + 1][col],
        board[row + 1][col - 1],
        board[row][col - 1],
        board[row - 1][col]
    ];
    return neighbors;
}

export const isOccupied = (row: number, col: number) => {
    return (board[row][col] === 'White' ||
            board[row][col] === 'Gray' ||
            board[row][col] === 'Black');
}

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
    return allowed;
}

export const setState = (row: number, col: number, newState: SpaceState) => {
    if (isChangeAllowed(row, col, newState)) {
        board[row][col] = newState;
        return true;
    } else {
        return false;
    }
}

export const getJumps = () => {
    let jumps: boolean[][] = Array(BOARD_SIZE).map(row => Array(BOARD_SIZE).map(col => false));
    for (let i = 0; i < jumps.length; i++) {
        for (let j = 0; j < jumps[i].length; j++) {
            
        }
    }
    return jumps;
}