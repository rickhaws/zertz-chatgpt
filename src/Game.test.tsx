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

const setup = (() => {

    Game.initBoard();
    { // in a block for easy collapsing in editor
        Game.setState('Black', 1, 4);
        Game.setState('Black', 1, 5);
        Game.setState('Black', 1, 6);
        Game.setState('Black', 1, 7);
        
        Game.setState('Open', 2, 3);
        Game.setState('Open', 2, 4);
        Game.setState('Open', 2, 5);
        Game.setState('Open', 2, 6);
        Game.setState('Open', 2, 7);
        
        Game.setState('Gray', 3, 2);
        Game.setState('Gray', 3, 3);
        Game.setState('Gray', 3, 4);
        Game.setState('Gray', 3, 5);
        Game.setState('Gray', 3, 6);
        Game.setState('Gray', 3, 7);
        
        Game.setState('Open', 4, 1);
        Game.setState('Open', 4, 2);
        Game.setState('Open', 4, 3);
        Game.setState('Open', 4, 4);
        Game.setState('Open', 4, 5);
        Game.setState('Open', 4, 6);
        Game.setState('Open', 4, 7);
        
        Game.setState('White', 5, 1);
        Game.setState('White', 5, 2);
        Game.setState('White', 5, 3);
        Game.setState('White', 5, 4);
        Game.setState('White', 5, 5);
        Game.setState('White', 5, 6);
        
        Game.setState('Open', 6, 1);
        Game.setState('Open', 6, 2);
        Game.setState('Open', 6, 3);
        Game.setState('Open', 6, 4);
        Game.setState('Open', 6, 5);
        
        Game.setState('Removed', 7, 1);
        Game.setState('Removed', 7, 2);
        Game.setState('Removed', 7, 3);
        Game.setState('Removed', 7, 4);
    }

    //  \0\1\2\3\4\5\6\7\8\
    // 0 \ \ \ \ \ \ \ \ \ \
    // 1  \ \ \ \ \B\B\B\B\ \
    // 2   \ \ \ \O\O\O\O\O\ \
    // 3    \ \ \G\G\G\G\G\G\ \
    // 4     \ \O\O\O\O\O\O\O\ \
    // 5      \ \W\W\W\W\W\W\ \ \
    // 6       \ \O\O\O\O\O\ \ \ \
    // 7        \ \ \ \ \ \ \ \ \ \
    // 8         \ \ \ \ \ \ \ \ \ \
});

describe('Game state tests', () => {
    test('initBoard and getState', () => {
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
    test('setState', () => {
        setup();
        expect(Game.getState(1, 4)).toBe( 'Black');
        expect(Game.getState(1, 7)).toBe( 'Black');
        expect(Game.getState(2, 7)).toBe( 'Open');
        expect(Game.getState(3, 6)).toBe( 'Gray');
        expect(Game.getState(7, 4)).toBe( 'Removed');
    })
    test('getNeighbors', () => {
        setup();
        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\O\O\O\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \O\O\O\O\O\O\O\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\O\O\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        const spaces: [number[], string[]][] = [
            [ [1,1], ['Removed', 'Removed', 'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [1,4], ['Removed', 'Removed', 'Black',   'Open',    'Open',    'Removed',]],
            [ [1,6], ['Removed', 'Removed', 'Black',   'Open',    'Open',    'Black',]],
            [ [2,5], ['Black',   'Black',   'Open',    'Gray',    'Gray',    'Open',]],
            [ [2,7], ['Black',   'Removed', 'Removed', 'Gray',    'Gray',    'Open',]],
            [ [3,1], ['Removed', 'Removed', 'Gray',    'Open',    'Removed', 'Removed',]],
            [ [3,2], ['Removed', 'Open',    'Gray',    'Open',    'Open',    'Removed',]],
            [ [4,1], ['Removed', 'Gray',    'Open',    'White',   'Removed', 'Removed',]],
            [ [4,5], ['Gray',    'Gray',    'Open',    'White',   'White',   'Open',]],
            [ [4,7], ['Gray',    'Removed', 'Removed', 'Removed', 'White',   'Open',]],
            [ [7,1], ['Open',    'Open',    'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,2], ['Open',    'Open',    'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,3], ['Open',    'Open',    'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,4], ['Open',    'Open',    'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,5], ['Open',    'Removed', 'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,6], ['Removed', 'Removed', 'Removed', 'Removed', 'Removed', 'Removed',]],
            [ [7,7], ['Removed', 'Removed', 'Removed', 'Removed', 'Removed', 'Removed',]],
        ]
        for (let [[i, j], neighbors] of spaces) {
            expect(Game.getNeighborStates(i, j)).toEqual(neighbors);
        }
    });

    test('getJumps', () => {
        setup();
        Game.setState('White', 2, 4);
        Game.setState('White', 2, 5);
        Game.setState('White', 2, 6);

        Game.setState('Black', 4, 1);
        Game.setState('Black', 4, 4);
        Game.setState('Black', 4, 7);

        Game.setState('Gray', 6, 4);
        Game.setState('Gray', 6, 5);

        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\W\W\W\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \B\O\O\B\O\O\B\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\G\G\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        const actual = Game.getJumps();
        const expected = [
            [false, false, false, false, false, false, false, false, false], // 0
            [false, false, false, false, false, false, false, false, false], // 1
            [false, false, false, false, true,  true,  true,  false, false], // 2
            [false, false, false, false, false, false, false, false, false], // 3
            [false, true,  false, false, true,  false, false, true,  false], // 4
            [false, false, false, false, false, false, false, false, false], // 5
            [false, false, false, false, true,  true,  false, false, false], // 6
            [false, false, false, false, false, false, false, false, false], // 7
            [false, false, false, false, false, false, false, false, false], // 8
        ]
        expect(actual).toEqual(expected);
    });

    test('jump', () => {
        setup();
        Game.setState('White', 2, 4);
        Game.setState('White', 2, 5);
        Game.setState('White', 2, 6);

        Game.setState('Black', 4, 1);
        Game.setState('Black', 4, 4);
        Game.setState('Black', 4, 7);

        Game.setState('Gray', 6, 4);
        Game.setState('Gray', 6, 5);

        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\W\W\W\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \B\O\O\B\O\O\B\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\G\G\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        throw('Not Implemented')
    });

    test('canRemove', () => {
        setup();
        Game.setState('Removed', 4, 1);
        Game.setState('Removed', 6, 1);
        Game.setState('Removed', 6, 2);
        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\O\O\O\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \ \O\O\O\O\O\O\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \ \ \O\O\O\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        expect(Game.canRemove(1, 1)).toBeFalsy();
        expect(Game.canRemove(1, 2)).toBeFalsy();
        expect(Game.canRemove(1, 3)).toBeFalsy();
        expect(Game.canRemove(1, 4)).toBeFalsy();
        expect(Game.canRemove(1, 5)).toBeFalsy();
        expect(Game.canRemove(1, 6)).toBeFalsy();
        expect(Game.canRemove(1, 7)).toBeFalsy();

        expect(Game.canRemove(2, 1)).toBeFalsy();
        expect(Game.canRemove(2, 2)).toBeFalsy();
        expect(Game.canRemove(2, 3)).toBeTruthy();
        expect(Game.canRemove(2, 4)).toBeFalsy();
        expect(Game.canRemove(2, 5)).toBeFalsy();
        expect(Game.canRemove(2, 6)).toBeFalsy();
        expect(Game.canRemove(2, 7)).toBeTruthy();

        expect(Game.canRemove(4, 1)).toBeFalsy();
        expect(Game.canRemove(4, 2)).toBeFalsy();
        expect(Game.canRemove(4, 3)).toBeFalsy();
        expect(Game.canRemove(4, 4)).toBeFalsy();
        expect(Game.canRemove(4, 5)).toBeFalsy();
        expect(Game.canRemove(4, 6)).toBeFalsy();
        expect(Game.canRemove(4, 7)).toBeTruthy();

        expect(Game.canRemove(6, 1)).toBeFalsy();
        expect(Game.canRemove(6, 2)).toBeFalsy();
        expect(Game.canRemove(6, 3)).toBeTruthy();
        expect(Game.canRemove(6, 4)).toBeTruthy();
        expect(Game.canRemove(6, 5)).toBeTruthy();
        expect(Game.canRemove(6, 6)).toBeFalsy();
        expect(Game.canRemove(6, 7)).toBeFalsy();

        expect(Game.canRemove(7, 1)).toBeFalsy();
        expect(Game.canRemove(7, 2)).toBeFalsy();
        expect(Game.canRemove(7, 3)).toBeFalsy();
        expect(Game.canRemove(7, 4)).toBeFalsy();
        expect(Game.canRemove(7, 5)).toBeFalsy();
        expect(Game.canRemove(7, 6)).toBeFalsy();
        expect(Game.canRemove(7, 7)).toBeFalsy();
    });

    test('Removed can\'t be changed', () => {
        setup();
        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\O\O\O\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \O\O\O\O\O\O\O\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\O\O\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        expect(Game.isChangeAllowed(1, 3, 'Black')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 3, 'Gray')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 3, 'White')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 3, 'Open')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 3, 'Removed')).toBeFalsy();
    });
    test('Occupied can only be set to Open', () => {
        setup();

        expect(Game.isChangeAllowed(1, 4, 'Black')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 4, 'Gray')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 4, 'White')).toBeFalsy();
        expect(Game.isChangeAllowed(1, 4, 'Open')).toBeTruthy();
        expect(Game.isChangeAllowed(1, 4, 'Removed')).toBeFalsy();
    });

    test('Allows removal of unblocked empty ring', () => {
        setup();

        expect(Game.isChangeAllowed(2, 3, 'Black')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 3, 'Gray')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 3, 'White')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 3, 'Open')).toBeFalsy();
        expect(Game.isChangeAllowed(2, 3, 'Removed')).toBeTruthy();

        expect(Game.isChangeAllowed(2, 7, 'Black')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 7, 'Gray')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 7, 'White')).toBeTruthy();
        expect(Game.isChangeAllowed(2, 7, 'Open')).toBeFalsy();
        expect(Game.isChangeAllowed(2, 7, 'Removed')).toBeTruthy();
    });

    test('Blocks removal of blocked empty ring', () => {
        setup();
        Game.setState('Removed', 1, 4);
        Game.setState('Removed', 4, 7);
        Game.setState('Open', 5, 1);
        Game.setState('Open', 5, 2);
        Game.setState('Removed', 6, 1);
        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \ \B\B\B\ \
        // 2   \ \ \ \O\O\O\O\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \O\O\O\O\O\O\ \ \
        // 5      \ \O\O\W\W\W\W\ \ \
        // 6       \ \ \O\O\O\O\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        expect(Game.isChangeAllowed(2, 4, 'Removed')).toBeFalsy();
        expect(Game.isChangeAllowed(4, 2, 'Removed')).toBeFalsy();
        expect(Game.isChangeAllowed(4, 7, 'Removed')).toBeFalsy();
        expect(Game.isChangeAllowed(5, 2, 'Removed')).toBeFalsy();
    });

    test('toString', () => {
        Game.initBoard();
        const expected = 
`\\0\\1\\2\\3\\4\\5\\6\\7\\8\\
0\\ \\ \\ \\ \\ \\ \\ \\ \\ \\
1 \\ \\ \\ \\ \\O\\O\\O\\O\\ \\
2  \\ \\ \\ \\O\\O\\O\\O\\O\\ \\
3   \\ \\ \\O\\O\\O\\O\\O\\O\\ \\
4    \\ \\O\\O\\O\\O\\O\\O\\O\\ \\
5     \\ \\O\\O\\O\\O\\O\\O\\ \\ \\
6      \\ \\O\\O\\O\\O\\O\\ \\ \\ \\
7       \\ \\O\\O\\O\\O\\ \\ \\ \\ \\
8        \\ \\ \\ \\ \\ \\ \\ \\ \\ \\`;

        expect(Game.toString()).toEqual(expected);
    });
});