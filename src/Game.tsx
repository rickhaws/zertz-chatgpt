export type SpaceState = 'Removed' | 'Open' | 'White' | 'Gray' | 'Black';

export const BOARD_SIZE = 7;

const board: SpaceState[][] = Array(BOARD_SIZE).map(row => Array(BOARD_SIZE).map(col => 'Removed'));

export const canRemove = (row: number, col: number) =>
{
    if (board[row][col] != 'Open') return false;

    //	\1\2\3\4\5\6\7\
    // 1 \ \ \ \O\O\O\O\
	// 2  \ \ \O\O\O\O\O\
	// 3   \ \O\O\O\O\O\O\
	// 4    \O\O\O\O\O\O\O\
	// 5     \O\O\O\O\O\O\ \
	// 6      \O\O\O\O\O\ \ \
	// 7       \O\O\O\O\ \ \ \

    // List neighbor cells in circular fashion, repeating first at the end
    const neighbors: SpaceState[] = GetNeighbors(row, col);

    // If any two neighbors in a row are Removed,
    // then this space can be removed
    let previous: SpaceState = 'Invalid';
    for (let current of neighbors)
    {
        if (previous == 'Removed' && current == 'Removed') return true;
        previous = current;
    }

    return false;
}

export const GetNeighbors = (row: number, col: number): SpaceState[] => {
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

export const SetState = (row: number, col: number, state: SpaceState) => {
    let wasSuccessful = false;
    switch (state) {
        case 'White':
        case 'Black':
        case 'Gray':
            if (board[row][col] == 'Removed') {
                board[row][col] = state;
                wasSuccessful = true;
            }
    }
    return wasSuccessful;
}