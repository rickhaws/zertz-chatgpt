// Board.tsx
import React, { useEffect, useState } from 'react';
import Ring from './Ring';
import Ball from './Ball';

import { GameType, SpaceState } from './Game';

interface BoardProps { 
    game: GameType;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
    // ------------------------ BOARD DEFINITION CONSTANTS --------------------
    const Game = props.game;
    const ballCounts = [6, 8, 10];
    const ballColors = ['ivory', 'gray', 'gunmetalgray']
    const ringRadius = 50;
    const ballRadius = 35;
    const [rings, setRings] = useState<JSX.Element[]>([]);
    const [balls, setBalls] = useState<JSX.Element[]>([]);
    const [indexA, setA] = useState(0);
    const [indexB, setB] = useState(1);
    const [indexC, setC] = useState(2);
    const [seconds, setSeconds] = useState(0);

    const getBallColor = (state: SpaceState) => {
        switch(state) {
            case "White":
                return ballColors[0];
            case "Gray":
                return ballColors[1];
            default:
                return ballColors[2];
        }
    }

    const drawBoard = () => {
        const xInc = 2.0 * ringRadius;
        const offsetPerRow = xInc / 2;
        const yInc = xInc * Math.sin(Math.PI / 3.0);
        var xInit = 0;
        var x = xInit;
        var y = x;
        const ringCollector: JSX.Element[] = [];
        const ballCollector: JSX.Element[] = [];
        // Place circles on board
        var i = 0;
        for (var row = 1; row <= Game.BOARD_SIZE; row++) {
            y = ringRadius + yInc * (row - 1);
            xInit = offsetPerRow * (row - 5);
            for (var col = 1; col <= Game.BOARD_SIZE; col++) {
                x = xInit + col * xInc;
                ringCollector[i] =
                    <Ring
                        id={`ring-${row}-${col}`}
                        key={`ring-${row}-${col}`}
                        centerX={x}
                        centerY={y}
                        radius={ringRadius}
                        row={row}
                        col={col}
                        isVisible={Game.getState(row, col) !== 'Removed'}
                        onClick={handleClick}
                    />
                ballCollector[i] = 
                    <Ball
                        id={`ball-${row}-${col}`}
                        key={`ball-${row}-${col}`}
                        centerX={x}
                        centerY={y}
                        radius={ballRadius}
                        row={row}
                        col={col}
                        color={getBallColor(Game.getState(row, col))}
                        isVisible={Game.isOccupied(row, col)}
                        onClick={handleClick}
                    />
                i++;
            }
        }
        setRings(ringCollector);
        setBalls(ballCollector);
    };

    const handleClick = (row: number, col: number) => {
        console.log(`Space (${row}, ${col}) was clicked`);
        const cellState = Game.getState(row, col);
        const gameState = Game.getGameState();

        switch (gameState.turnStage) {

        }
    };


    // Board: knows which SVG elements correspond to each board position and spare ball position
    //        collection of balls
    //          collection of rings
    //          board positions
    //          adjacencies
    // -------------------------------- TESTS ------------------------------------
    // -------------------------- MAIN --------------------------------------
    useEffect(() => {
        Game.init();
        drawBoard();
        // setInterval(() => setSeconds(i => i + 1), 1000);
    }, []);
    // temp - change colors
    // useEffect(() => {
    //     setA(i => i + 1);
    //     setB(i => i + 1);
    //     setC(i => i + 1);
    //     const states: Game.SpaceState[] = ['Black', 'White', 'Gray', 'Open', 'Removed'];
    //     const state = states[seconds % states.length];
    //     const row = Math.ceil(Math.random() * Game.BOARD_SIZE);
    //     const col = Math.ceil(Math.random() * Game.BOARD_SIZE);
    //     Game.setState(state, row, col);
    //     drawBoard();
    // }, [seconds]);

    const handleMove = (/* handle user moves */) => {
        // Update game state
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <svg id='board' width='700' height='700'>
                            {/* <defs>
                                <radialGradient id='White'
                                    cx={.5} cy={.5} r={ballRadius}
                                    fx={.25} fy={.25}
                                >
                                    <stop offset='0%' stop-color='white' />
                                    <stop offset='90%' stop-color={ballColors[0]} />
                                    <stop offset='100%' stop-color='white' />
                                </radialGradient>
                                <radialGradient id='Gray'
                                    cx={.5} cy={.5} r={ballRadius}
                                    fx={.25} fy={.25}
                                >
                                    <stop offset='0%' stop-color='white' />
                                    <stop offset='90%' stop-color={ballColors[1]} />
                                    <stop offset='100%' stop-color='white' />
                                </radialGradient>
                                <radialGradient id='Black'
                                    cx={.5} cy={.5} r={ballRadius}
                                    fx={.25} fy={.25}
                                >
                                    <stop offset='0%' stop-color='white' />
                                    <stop offset='90%' stop-color={ballColors[2]} />
                                    <stop offset='100%' stop-color='white' />
                                </radialGradient>
                            </defs> */}
                            {rings}
                            {balls}
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </td>
                    <td>
                        <div id='output'></div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Board;
