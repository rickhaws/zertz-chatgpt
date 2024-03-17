bool CanRemove(std::vector<std::vector<SpaceState>>& board, int row, int cell)
{
    if (board[row][cell] != SpaceState::Open) return false;

    //	\1\2\3\4\5\6\7\
    // 1 \ \ \ \O\O\O\O\
	// 2  \ \ \O\O\O\O\O\
	// 3   \ \O\O\O\O\O\O\
	// 4    \O\O\O\O\O\O\O\
	// 5     \O\O\O\O\O\O\ \
	// 6      \O\O\O\O\O\ \ \
	// 7       \O\O\O\O\ \ \ \

    // List neighbor cells in circular fashion, repeating first at the end
    std::vector<SpaceState> neighbors = GetNeighbors(board, row, cell);

    // If any two neighbors in a row are Removed,
    // then this space can be removed
    SpaceState previous = SpaceState::Invalid;
    for (auto current = neighbors.begin(); current < neighbors.end(); current++)
    {
        if (previous == SpaceState::Removed && *current == SpaceState::Removed) return true;
        previous = *current;
    }

    return false;
}

std::vector<SpaceState> GetNeighbors(std::vector<std::vector<SpaceState>>& board, int row, int cell)
{
    std::vector<SpaceState> neighbors = {
        board[row - 1][cell],
        board[row - 1][cell + 1],
        board[row][cell + 1],
        board[row + 1][cell],
        board[row + 1][cell - 1],
        board[row][cell - 1],
        board[row - 1][cell]
    };
    return neighbors;
}