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

    Game.init();
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
    test('init and getState', () => {
        Game.init();
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

        expect(Game.getGameState()).toEqual({
            playerTurn: 1, 
            turnStage: "SelectBallForPlacement", 
            ballPool: {"White": 6, "Gray": 8, "Black": 10},
            player1Balls: {"White": 0, "Gray": 0, "Black": 0}, 
            player2Balls: {"White": 0, "Gray": 0, "Black": 0},
            ballSelectedForPlacement: null,
            jumpOrigin: null,
            winner: 0,
        } as Game.GameState)
    });
    test('setGameState', () => {
        const expected: Game.GameState = {
            playerTurn: 2, 
            turnStage: "RemoveRing", 
            ballPool: {"White": 5, "Gray": 7, "Black": 9},
            player1Balls: {"White": 0, "Gray": 1, "Black": 0}, 
            player2Balls: {"White": 0, "Gray": 0, "Black": 1},
            ballSelectedForPlacement: null,
            jumpOrigin: null,
            winner: 0,
        }

        Game.setGameState(expected);

        expect(Game.getGameState()).toEqual(expected);
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

    test('canJump specific direction', () => {
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

        expect(Game.canJump(3, 7, Game.Direction.NW)).toBeFalsy(); // Neighbor unoccupied NW
        expect(Game.canJump(4, 7, Game.Direction.NW)).toBeTruthy();
        expect(Game.canJump(3, 2, Game.Direction.NE)).toBeFalsy(); // Neighbor unoccupied NE
        expect(Game.canJump(4, 1, Game.Direction.NE)).toBeTruthy();
        expect(Game.canJump(2, 4, Game.Direction.E)).toBeFalsy(); // Destination occupied E
        expect(Game.canJump(2, 5, Game.Direction.E)).toBeTruthy();
        expect(Game.canJump(1, 6, Game.Direction.SE)).toBeFalsy(); // Destination occupied SE
        expect(Game.canJump(2, 6, Game.Direction.SE)).toBeTruthy();
        expect(Game.canJump(3, 5, Game.Direction.SW)).toBeFalsy(); // Destination occupied SW
        expect(Game.canJump(4, 4, Game.Direction.SW)).toBeTruthy();
        expect(Game.canJump(2, 4, Game.Direction.W)).toBeFalsy(); // Neighbor unoccupied W
        expect(Game.canJump(2, 5, Game.Direction.W)).toBeTruthy();
        expect(Game.canJump(2, 3, Game.Direction.W)).toBeFalsy(); // Space unoccupied
        expect(Game.canJump(2, 2, Game.Direction.W)).toBeFalsy(); // Space removed
    });

    test('canJump any direction', () => {
        setup();
        Game.setState('White', 2, 4);
        Game.setState('White', 2, 5);
        Game.setState('White', 2, 6);

        Game.setState('Black', 4, 1);
        Game.setState('Open', 4, 4);
        Game.setState('Black', 4, 7);

        Game.setState('Gray', 6, 4);
        Game.setState('Gray', 6, 5);

        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \O\W\W\W\O\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \B\O\O\O\O\O\B\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\G\G\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \

        expect(Game.canJump(3, 7)).toBeFalsy()
        expect(Game.canJump(4, 7)).toBeTruthy();
        expect(Game.canJump(3, 2)).toBeFalsy()
        expect(Game.canJump(4, 1)).toBeTruthy();
        expect(Game.canJump(2, 4)).toBeTruthy()
        expect(Game.canJump(2, 5)).toBeTruthy();
        expect(Game.canJump(1, 6)).toBeFalsy()
        expect(Game.canJump(2, 6)).toBeTruthy();
        expect(Game.canJump(3, 5)).toBeFalsy()
        expect(Game.canJump(4, 4)).toBeFalsy();
        expect(Game.canJump(2, 4)).toBeTruthy()
        expect(Game.canJump(2, 5)).toBeTruthy();
        expect(Game.canJump(2, 3)).toBeFalsy()
        expect(Game.canJump(2, 2)).toBeFalsy()
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

    test('jumpsExist', () => {
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

        for (let row = 1; row <= Game.BOARD_SIZE; row++) {
            for (let col = 1; col <= Game.BOARD_SIZE; col++) {
                for (let dir of Game.Directions) {
                    if (Game.canJump(row, col, dir) ) {
                        expect(Game.jumpsExist()).toBeTruthy();
                        Game.jump(row, col, dir);
                    }
                }
            }
        }
        expect(Game.jumpsExist()).toBeFalsy();
    });


    test('jump success', () => {
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

        let result;
        result = Game.jump(4, 7, Game.Direction.NW);
        expect(result).toBe('Gray');
        expect(Game.getState(4, 7)).toBe('Open');
        expect(Game.getState(2, 7)).toBe('Black');
        expect(Game.getNeighborStates(4, 7)).toEqual(['Open', 'Removed', 'Removed', 'Removed', 'White', 'Open']);

        result = Game.jump(6, 5, Game.Direction.NE);
        expect(result).toBe('White');
        expect(Game.getState(6, 5)).toBe('Open');
        expect(Game.getState(4, 7)).toBe('Gray');
        expect(Game.getNeighborStates(6, 5)).toEqual(['White', 'Open', 'Removed', 'Removed', 'Removed', 'Gray']);

        result = Game.jump(4, 4, Game.Direction.SW);
        expect(result).toBe('White');
        expect(Game.getState(4, 4)).toBe('Open');
        expect(Game.getState(6, 2)).toBe('Black');
        expect(Game.getNeighborStates(4, 4)).toEqual(['Gray', 'Gray', 'Open', 'White', 'Open', 'Open']);
    });

    test('jump not allowed', () => {
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

        let result;
        result = Game.jump(3, 7, Game.Direction.NW); // Neighbor in that direction unoccupied
        expect(result).toBe('');
        expect(Game.getState(2, 7)).toBe('Open');
        expect(Game.getState(4, 7)).toBe('Black');
        expect(Game.getNeighborStates(4, 7)).toEqual(['Gray', 'Removed', 'Removed', 'Removed', 'White', 'Open']);

        result = Game.jump(3, 7, Game.Direction.SE); // Destination 'Removed'
        expect(result).toBe('');
        expect(Game.getState(6, 7)).toBe('Removed');
        expect(Game.getState(4, 7)).toBe('Black');
        expect(Game.getNeighborStates(4, 7)).toEqual(['Gray', 'Removed', 'Removed', 'Removed', 'White', 'Open']);

        result = Game.jump(2, 3, Game.Direction.NE); // Space is unoccupied
        expect(result).toBe('');
        expect(Game.getState(0, 3)).toBe('Removed');
        expect(Game.getState(2, 3)).toBe('Open');
        expect(Game.getNeighborStates(2, 3)).toEqual(['Removed', 'Black', 'White', 'Gray', 'Gray', 'Removed']);

        result = Game.jump(2, 2, Game.Direction.SE); // Space is 'Removed'
        expect(result).toBe('');
        expect(Game.getState(2, 2)).toBe('Removed');
        expect(Game.getState(4, 2)).toBe('Open');
        expect(Game.getNeighborStates(2, 2)).toEqual(['Removed', 'Removed', 'Open', 'Gray', 'Removed', 'Removed']);

        result = Game.jump(3, 4, Game.Direction.SE); // Destination occupied
        expect(result).toBe('');
        expect(Game.getState(3, 4)).toBe('Gray');
        expect(Game.getState(5, 4)).toBe('White');
        expect(Game.getNeighborStates(3, 4)).toEqual(['White', 'White', 'Gray', 'Black', 'Open', 'Gray']);
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

    test('getRemovables',() => {
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

        const actual = Game.getRemovables();
        const expected = [
            // 0     1      2       3       4    5      6       7       8
            [false, false, false, false, false, false, false, false, false], // 0
            [false, false, false, false, false, false, false, false, false], // 1
            [false, false, false,  true, false, false, false,  true, false], // 2
            [false, false, false, false, false, false, false, false, false], // 3
            [false,  true, false, false, false, false, false,  true, false], // 4
            [false, false, false, false, false, false, false, false, false], // 5
            [false,  true,  true,  true,  true,  true, false, false, false], // 6
            [false, false, false, false, false, false, false, false, false], // 7
            [false, false, false, false, false, false, false, false, false], // 8
        ]
        expect(actual).toEqual(expected);
    });

    test('removeRing', () => {
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

        let expected = Game.getState(1, 1);
        expect(Game.removeRing(1, 1)).toBeFalsy();
        expect(Game.getState(1, 1)).toEqual(expected);

        expected = Game.getState(1, 2);
        expect(Game.removeRing(1, 2)).toBeFalsy();
        expect(Game.getState(1, 2)).toEqual(expected);

        expected = Game.getState(1, 3);
        expect(Game.removeRing(1, 3)).toBeFalsy();
        expect(Game.getState(1, 3)).toEqual(expected);

        expected = Game.getState(1, 4);
        expect(Game.removeRing(1, 4)).toBeFalsy();
        expect(Game.getState(1, 4)).toEqual(expected);

        expected = Game.getState(1, 5);
        expect(Game.removeRing(1, 5)).toBeFalsy();
        expect(Game.getState(1, 5)).toEqual(expected);

        expected = Game.getState(1, 6);
        expect(Game.removeRing(1, 6)).toBeFalsy();
        expect(Game.getState(1, 6)).toEqual(expected);

        expected = Game.getState(1, 7);
        expect(Game.removeRing(1, 7)).toBeFalsy();
        expect(Game.getState(1, 7)).toEqual(expected);

        expected = Game.getState(2, 1);
        expect(Game.removeRing(2, 1)).toBeFalsy();
        expect(Game.getState(2, 1)).toEqual(expected);

        expected = Game.getState(2, 2);
        expect(Game.removeRing(2, 2)).toBeFalsy();
        expect(Game.getState(2, 2)).toEqual(expected);

        expect(Game.removeRing(2, 3)).toBeTruthy();
        expect(Game.getState(2, 3)).toEqual("Removed");

        expected = Game.getState(2, 4);
        expect(Game.removeRing(2, 4)).toBeFalsy();
        expect(Game.getState(2, 4)).toEqual(expected);

        expected = Game.getState(2, 5);
        expect(Game.removeRing(2, 5)).toBeFalsy();
        expect(Game.getState(2, 5)).toEqual(expected);

        expected = Game.getState(2, 6);
        expect(Game.removeRing(2, 6)).toBeFalsy();
        expect(Game.getState(2, 6)).toEqual(expected);

        expect(Game.removeRing(2, 7)).toBeTruthy();
        expect(Game.getState(2, 7)).toEqual("Removed");

        expected = Game.getState(4, 1);
        expect(Game.removeRing(4, 1)).toBeFalsy();
        expect(Game.getState(4, 1)).toEqual(expected);

        expected = Game.getState(4, 2);
        expect(Game.removeRing(4, 2)).toBeFalsy();
        expect(Game.getState(4, 2)).toEqual(expected);

        expected = Game.getState(4, 3);
        expect(Game.removeRing(4, 3)).toBeFalsy();
        expect(Game.getState(4, 3)).toEqual(expected);

        expected = Game.getState(4, 4);
        expect(Game.removeRing(4, 4)).toBeFalsy();
        expect(Game.getState(4, 4)).toEqual(expected);

        expected = Game.getState(4, 5);
        expect(Game.removeRing(4, 5)).toBeFalsy();
        expect(Game.getState(4, 5)).toEqual(expected);

        expected = Game.getState(4, 6);
        expect(Game.removeRing(4, 6)).toBeFalsy();
        expect(Game.getState(4, 6)).toEqual(expected);

        expect(Game.removeRing(4, 7)).toBeTruthy();
        expect(Game.getState(4, 7)).toEqual("Removed");

        expected = Game.getState(6, 1);
        expect(Game.removeRing(6, 1)).toBeFalsy();
        expect(Game.getState(6, 1)).toEqual(expected);

        expected = Game.getState(6, 2);
        expect(Game.removeRing(6, 2)).toBeFalsy();
        expect(Game.getState(6, 2)).toEqual(expected);

        expect(Game.removeRing(6, 3)).toBeTruthy();
        expect(Game.getState(6, 3)).toEqual("Removed");

        expect(Game.removeRing(6, 4)).toBeTruthy();
        expect(Game.getState(6, 4)).toEqual("Removed");

        expect(Game.removeRing(6, 5)).toBeTruthy();
        expect(Game.getState(6, 5)).toEqual("Removed");

        expected = Game.getState(6, 6);
        expect(Game.removeRing(6, 6)).toBeFalsy();
        expect(Game.getState(6, 6)).toEqual(expected);

        expected = Game.getState(6, 7);
        expect(Game.removeRing(6, 7)).toBeFalsy();
        expect(Game.getState(6, 7)).toEqual(expected);

        expected = Game.getState(7, 1);
        expect(Game.removeRing(7, 1)).toBeFalsy();
        expect(Game.getState(7, 1)).toEqual(expected);

        expected = Game.getState(7, 2);
        expect(Game.removeRing(7, 2)).toBeFalsy();
        expect(Game.getState(7, 2)).toEqual(expected);

        expected = Game.getState(7, 3);
        expect(Game.removeRing(7, 3)).toBeFalsy();
        expect(Game.getState(7, 3)).toEqual(expected);

        expected = Game.getState(7, 4);
        expect(Game.removeRing(7, 4)).toBeFalsy();
        expect(Game.getState(7, 4)).toEqual(expected);

        expected = Game.getState(7, 5);
        expect(Game.removeRing(7, 5)).toBeFalsy();
        expect(Game.getState(7, 5)).toEqual(expected);

        expected = Game.getState(7, 6);
        expect(Game.removeRing(7, 6)).toBeFalsy();
        expect(Game.getState(7, 6)).toEqual(expected);

        expected = Game.getState(7, 7);
        expect(Game.removeRing(7, 7)).toBeFalsy();
        expect(Game.getState(7, 7)).toEqual(expected);
    });

    test('removableRingsExist', () => {
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

        for (let row = 1; row <= Game.BOARD_SIZE; row++) {
            for (let col = 1; col <= Game.BOARD_SIZE; col++) {
                if (Game.canRemove(row, col) ) {
                    expect(Game.removableRingsExist()).toBeTruthy();
                    Game.removeRing(row, col);
                }
            }
        }
        expect(Game.removableRingsExist()).toBeFalsy();
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

    test('Select ball from pool', () => {
        setup();
        Game.selectBallFromPool("White");

        const state = Game.getGameState();
        expect(state.turnStage).toEqual("SelectPlacement");
        expect(state.ballSelectedForPlacement).toEqual("White");
    });

    test('Reject select ball from empty pool', () => {
        setup();
        Game.setGameState({...Game.getGameState(), ballPool:
            {['White']: 0, ['Gray']: 0, ['Black']: 0}
        } as Game.GameState)
        expect(() => Game.selectBallFromPool("White")).toThrow();

        const state = Game.getGameState();
        expect(state.turnStage).toEqual("SelectBallForPlacement");
        expect(state.ballSelectedForPlacement).toEqual(null);
    });

    test('Select ball from player stash', () => {
        setup();
        Game.setGameState({...Game.getGameState(), 
            ballPool: {['White']: 0, ['Gray']: 0, ['Black']: 0},
            player1Balls: {['White']: 1, ['Gray']: 0, ['Black']: 0},
        } as Game.GameState)

        Game.selectBallFromPlayerStash("White");

        const state = Game.getGameState();
        expect(state.turnStage).toEqual("SelectPlacement");
        expect(state.ballSelectedForPlacement).toEqual("White");
    });

    test('Reject select ball from empty player stash', () => {
        setup();
        Game.setGameState({...Game.getGameState(), 
            ballPool: {['White']: 0, ['Gray']: 0, ['Black']: 0},
            player1Balls: {['White']: 0, ['Gray']: 0, ['Black']: 0},
        } as Game.GameState)
        expect(() => Game.selectBallFromPlayerStash("White")).toThrow();

        const state = Game.getGameState();
        expect(state.turnStage).toEqual("SelectBallForPlacement");
        expect(state.ballSelectedForPlacement).toEqual(null);
    });

    test('setNextPlayersTurn', () => {
        Game.init();
        Game.setGameState({...Game.getGameState(), turnStage: 'SelectPlacement'});
        expect(Game.getGameState().playerTurn).toEqual(1);
        Game.setNextPlayersTurn();
        expect(Game.getGameState().turnStage).toEqual('SelectBallForPlacement');
        expect(Game.getGameState().playerTurn).toEqual(2);
        Game.setNextPlayersTurn();
        expect(Game.getGameState().playerTurn).toEqual(1);
    });

    test('Place ball', () => {
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

        // No ring
        expect(() => Game.placeBall(1, 3)).toThrow();
        // Occupied
        expect(() => Game.placeBall(1, 4)).toThrow();
        // No ball selected for placement
        expect(() => Game.placeBall(2, 3)).toThrow();

        expect(Game.getGameState().ballPool['White']).toEqual(6);
        expect(Game.getGameState().ballPool['Gray']).toEqual(8);
        expect(Game.getGameState().ballPool['Black']).toEqual(10);

        Game.selectBallFromPool('Black');
        expect(Game.getGameState().turnStage).toEqual('SelectPlacement' as Game.TurnStage)
        expect(() => Game.placeBall(2, 3)).not.toThrow();

        expect(Game.getState(2, 3)).toEqual('Black');
        expect(Game.getGameState().turnStage).toEqual('SelectBallForPlacement' as Game.TurnStage)
        expect(Game.getGameState().ballSelectedForPlacement).toBeNull();
        expect(Game.getGameState().playerTurn).toEqual(2);
        expect(Game.getGameState().ballPool['Black']).toEqual(9);

        // No white balls available when supposedly 'White' is selected (invalid state)
        const state = Game.getGameState();
        state.playerTurn = 1;
        state.ballPool['White'] = 0;
        state.player1Balls['White'] = 0;
        state.ballSelectedForPlacement = 'White';

        Game.setGameState(state);
        expect(() => Game.placeBall(2, 4)).toThrow();
        expect(Game.getGameState().ballPool['White']).toEqual(0);
        expect(Game.getGameState().ballSelectedForPlacement).toEqual('White');
    });

    test('placeJump', () => {
        setup();
        Game.setState('Black', 2, 3);
        Game.setState('Black', 2, 4);
        Game.setState('Black', 2, 5);
        Game.setState('Black', 2, 6);
        Game.setState('Black', 2, 7);
        //  \0\1\2\3\4\5\6\7\8\
        // 0 \ \ \ \ \ \ \ \ \ \
        // 1  \ \ \ \ \B\B\B\B\ \
        // 2   \ \ \ \B\B\B\B\B\ \
        // 3    \ \ \G\G\G\G\G\G\ \
        // 4     \ \O\O\O\O\O\O\O\ \
        // 5      \ \W\W\W\W\W\W\ \ \
        // 6       \ \O\O\O\O\O\ \ \ \
        // 7        \ \ \ \ \ \ \ \ \ \
        // 8         \ \ \ \ \ \ \ \ \ \


        // No jump in progress
        expect(() => Game.placeJump(4, 6)).toThrow();

        const state = Game.getGameState();

        state.turnStage = 'PlaceFirstJump';
        state.jumpOrigin = {row: 2, column: 7};
        Game.setGameState(state);

        // Invalid destination
        expect(() => Game.placeJump(4, 6)).toThrow();

        Game.placeJump(4, 7);
        expect(Game.getGameState().turnStage)
            .toEqual('CompleteJumpOrPlaceNextJump' as Game.TurnStage)
        // expect(() => Game.placeJump(2, 7)).toThrow();

        // Game.placeJump(6, 5);
        // expect(Game.getGameState().turnStage)
            // .toEqual('CompleteJumpOrPlaceNextJump' as Game.TurnStage)
    });

    test('toString', () => {

    Game.init();
    let expected = 
`\\0\\1\\2\\3\\4\\5\\6\\7\\8\\
0\\ \\ \\ \\ \\ \\ \\ \\ \\ \\
1 \\ \\ \\ \\ \\O\\O\\O\\O\\ \\
2  \\ \\ \\ \\O\\O\\O\\O\\O\\ \\
3   \\ \\ \\O\\O\\O\\O\\O\\O\\ \\
4    \\ \\O\\O\\O\\O\\O\\O\\O\\ \\
5     \\ \\O\\O\\O\\O\\O\\O\\ \\ \\
6      \\ \\O\\O\\O\\O\\O\\ \\ \\ \\
7       \\ \\O\\O\\O\\O\\ \\ \\ \\ \\
8        \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

` + JSON.stringify(Game.getGameState(), null, 2);

    expect(Game.toString()).toEqual(expected);

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

    const gameState: Game.GameState = {
        player1Balls: {"White": 3, "Gray": 1, "Black": 0}, 
        player2Balls: {"White": 0, "Gray": 0, "Black": 1},
        playerTurn: 2, 
        turnStage: "SelectBallForPlacement", 
        winner: 1,
        ballSelectedForPlacement: null,
        ballPool: {"White": 3, "Gray": 7, "Black": 9},
        jumpOrigin: null,
    };
    Game.setGameState(gameState);

    expected =
`\\0\\1\\2\\3\\4\\5\\6\\7\\8\\
0\\ \\ \\ \\ \\ \\ \\ \\ \\ \\
1 \\ \\ \\ \\ \\B\\B\\B\\B\\ \\
2  \\ \\ \\ \\O\\O\\O\\O\\O\\ \\
3   \\ \\ \\G\\G\\G\\G\\G\\G\\ \\
4    \\ \\O\\O\\O\\O\\O\\O\\O\\ \\
5     \\ \\W\\W\\W\\W\\W\\W\\ \\ \\
6      \\ \\O\\O\\O\\O\\O\\ \\ \\ \\
7       \\ \\ \\ \\ \\ \\ \\ \\ \\ \\
8        \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

` + JSON.stringify({...gameState}, null, 2);

    expect(Game.toString()).toEqual(expected);
    });
});