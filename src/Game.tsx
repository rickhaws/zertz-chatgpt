export type SpaceState = 'Removed' | 'Open' | 'White' | 'Gray' | 'Black' | 'Invalid';

const board: SpaceState[][] = Array(7).map(row => Array(7).map(col => 'Removed'));

export const canRemove = (row: number, cell: number) =>
{
    if (board[row][cell] != 'Open') return false;

    //	\1\2\3\4\5\6\7\
    // 1 \ \ \ \O\O\O\O\
	// 2  \ \ \O\O\O\O\O\
	// 3   \ \O\O\O\O\O\O\
	// 4    \O\O\O\O\O\O\O\
	// 5     \O\O\O\O\O\O\ \
	// 6      \O\O\O\O\O\ \ \
	// 7       \O\O\O\O\ \ \ \

    // List neighbor cells in circular fashion, repeating first at the end
    const neighbors: SpaceState[] = GetNeighbors(row, cell);

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

export const GetNeighbors = (row: number, cell: number): SpaceState[] => {
    const neighbors: SpaceState[] = [
        board[row - 1][cell],
        board[row - 1][cell + 1],
        board[row][cell + 1],
        board[row + 1][cell],
        board[row + 1][cell - 1],
        board[row][cell - 1],
        board[row - 1][cell]
    ];
    return neighbors;
}

export const SetState = (row: number, cell: number, state: SpaceState) => {
    
}