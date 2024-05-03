// Board.tsx
import React, { useEffect, useMemo, useState } from 'react';
import Ring from './Ring';
import Ball from './Ball';
import * as Game from './Game';

interface BoardProps { }

const Board: React.FC<BoardProps> = () => {
    // ------------------------ BOARD DEFINITION CONSTANTS --------------------
    const ballCounts = [6, 8, 10];
    const ballColors = ["ivory", "gray", "gunmetalgray"]
    const ringRadius = 50;
    const [rings, setRings] = useState<JSX.Element[]>([]);
    const [balls, setBalls] = useState<JSX.Element[]>([]);
    const [indexA, setA] = useState(0);
    const [indexB, setB] = useState(1);
    const [indexC, setC] = useState(2);
    const [seconds, setSeconds] = useState(0);

    const handleClick = (id: number) => {
        console.log(`circle ${id} was clicked`);
    };

    const getBallColor = (state: Game.SpaceState) => {
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
                        isVisible={Game.getState(row, col) !== "Removed"}
                        // onClick={handleClick}
                    />
                ballCollector[i] = 
                    <Ball
                        id={`ball-${row}-${col}`}
                        key={`ball-${row}-${col}`}
                        centerX={x}
                        centerY={y}
                        color={getBallColor(Game.getState(row, col))}
                        isVisible={Game.isOccupied(row, col)}
                    />
                i++;
            }
        }
        setRings(ringCollector);
        setBalls(ballCollector);
    };


    // Board: knows which SVG elements correspond to each board position and spare ball position
    //        collection of balls
    //          collection of rings
    //          board positions
    //          adjacencies
    // -------------------------------- TESTS ------------------------------------
    // -------------------------- MAIN --------------------------------------
    useEffect(() => {
        Game.initBoard();
        drawBoard();
        setInterval(() => setSeconds(i => i + 1), 1000);
    }, []);
    // temp - change colors
    useEffect(() => {
        setA(i => i + 1);
        setB(i => i + 1);
        setC(i => i + 1);
        const states: Game.SpaceState[] = ["Black", "White", "Gray", "Open", "Removed"];
        const state = states[seconds % states.length];
        const row = Math.ceil(Math.random() * Game.BOARD_SIZE);
        const col = Math.ceil(Math.random() * Game.BOARD_SIZE);
        Game.setState(state, row, col);
        // /* */ console.log(`Set (${row}, ${col}) to "${state} (occupied=${Game.isOccupied(row, col)})"`);
        drawBoard();
    }, [seconds]);

    const handleMove = (/* handle user moves */) => {
        // Update game state
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <svg id="board" width="700" height="700">
                            {rings}
                            {balls}
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </td>
                    <td>
                        <div id="output"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Board;
