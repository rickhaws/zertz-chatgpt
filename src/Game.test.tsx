import * as Game from './Game';

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

describe('Game state tests', () => {
    it('Tests initialize', () => {
        for (let i = 0; i < Game.BOARD_SIZE; i++) {
            for (let j = 0; j < Game.BOARD_SIZE; j++) {
                expect(Game.getState(i, j)).toEqual('Open');
            }
        }
        Game.initBoard();
        expect(Game.getState(0, 0)).toBe('Removed');
        expect(Game.getState(0, 1)).toBe('Removed');
        expect(Game.getState(0, 2)).toBe('Removed');
        expect(Game.getState(0, 3)).toBe('Removed');
        expect(Game.getState(0, 4)).toBe('Removed');
        expect(Game.getState(0, 5)).toBe('Removed');
        expect(Game.getState(0, 6)).toBe('Removed');
        expect(Game.getState(0, 7)).toBe('Removed');
        expect(Game.getState(0, 8)).toBe('Removed');

        expect(Game.getState(1, 0)).toBe('Removed');
        expect(Game.getState(1, 1)).toBe('Removed');
        expect(Game.getState(1, 2)).toBe('Removed');
        expect(Game.getState(1, 3)).toBe('Removed');
        expect(Game.getState(1, 4)).toBe('Open');
        expect(Game.getState(1, 5)).toBe('Open');
        expect(Game.getState(1, 6)).toBe('Open');
        expect(Game.getState(1, 7)).toBe('Open');
        expect(Game.getState(1, 8)).toBe('Removed');

        expect(Game.getState(2, 0)).toBe('Removed');
        expect(Game.getState(2, 1)).toBe('Removed');
        expect(Game.getState(2, 2)).toBe('Removed');
        expect(Game.getState(2, 3)).toBe('Open');
        expect(Game.getState(2, 4)).toBe('Open');
        expect(Game.getState(2, 5)).toBe('Open');
        expect(Game.getState(2, 6)).toBe('Open');
        expect(Game.getState(2, 7)).toBe('Open');
        expect(Game.getState(2, 8)).toBe('Removed');

        expect(Game.getState(3, 0)).toBe('Removed');
        expect(Game.getState(3, 1)).toBe('Removed');
        expect(Game.getState(3, 2)).toBe('Open');
        expect(Game.getState(3, 3)).toBe('Open');
        expect(Game.getState(3, 4)).toBe('Open');
        expect(Game.getState(3, 5)).toBe('Open');
        expect(Game.getState(3, 6)).toBe('Open');
        expect(Game.getState(3, 7)).toBe('Open');
        expect(Game.getState(3, 8)).toBe('Removed');

        expect(Game.getState(4, 0)).toBe('Removed');
        expect(Game.getState(4, 1)).toBe('Open');
        expect(Game.getState(4, 2)).toBe('Open');
        expect(Game.getState(4, 3)).toBe('Open');
        expect(Game.getState(4, 4)).toBe('Open');
        expect(Game.getState(4, 5)).toBe('Open');
        expect(Game.getState(4, 6)).toBe('Open');
        expect(Game.getState(4, 7)).toBe('Open');
        expect(Game.getState(4, 8)).toBe('Removed');

        expect(Game.getState(5, 0)).toBe('Removed');
        expect(Game.getState(5, 1)).toBe('Open');
        expect(Game.getState(5, 2)).toBe('Open');
        expect(Game.getState(5, 3)).toBe('Open');
        expect(Game.getState(5, 4)).toBe('Open');
        expect(Game.getState(5, 5)).toBe('Open');
        expect(Game.getState(5, 6)).toBe('Open');
        expect(Game.getState(5, 7)).toBe('Removed');
        expect(Game.getState(5, 8)).toBe('Removed');
1
        expect(Game.getState(6, 0)).toBe('Removed');
        expect(Game.getState(6, 1)).toBe('Open');
        expect(Game.getState(6, 2)).toBe('Open');
        expect(Game.getState(6, 3)).toBe('Open');
        expect(Game.getState(6, 4)).toBe('Open');
        expect(Game.getState(6, 5)).toBe('Open');
        expect(Game.getState(6, 6)).toBe('Removed');
        expect(Game.getState(6, 7)).toBe('Removed');
        expect(Game.getState(6, 8)).toBe('Removed');

        expect(Game.getState(7, 0)).toBe('Removed');
        expect(Game.getState(7, 1)).toBe('Open');
        expect(Game.getState(7, 2)).toBe('Open');
        expect(Game.getState(7, 3)).toBe('Open');
        expect(Game.getState(7, 4)).toBe('Open');
        expect(Game.getState(7, 5)).toBe('Removed');
        expect(Game.getState(7, 6)).toBe('Removed');
        expect(Game.getState(7, 7)).toBe('Removed');
        expect(Game.getState(7, 8)).toBe('Removed');

        expect(Game.getState(8, 0)).toBe('Removed');
        expect(Game.getState(8, 1)).toBe('Removed');
        expect(Game.getState(8, 2)).toBe('Removed');
        expect(Game.getState(8, 3)).toBe('Removed');
        expect(Game.getState(8, 4)).toBe('Removed');
        expect(Game.getState(8, 5)).toBe('Removed');
        expect(Game.getState(8, 6)).toBe('Removed');
        expect(Game.getState(8, 7)).toBe('Removed');
        expect(Game.getState(8, 8)).toBe('Removed');
    });
    it('Tests getNeighbors', () => {
        Game.initBoard();
        expect(Game.getNeighbors(0, 0)).toHaveLength(2);
    });
});