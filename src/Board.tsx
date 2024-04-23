// Board.tsx
import React, { useEffect, useMemo, useState } from 'react';
import Ring from './Ring';
import Ball from './Ball';
import { getNeighborStates, canRemove, SpaceState } from './Game';

interface BoardProps { }
interface Circle {
    id: number;
    isVisible: boolean;
}

const Board: React.FC<BoardProps> = () => {
    // ------------------------ BOARD DEFINITION CONSTANTS --------------------
    const rowLengths = [4, 5, 6, 7, 6, 5, 4];
    const ballCounts = [6, 8, 10];
    const ballColors = ["white", "gray", "gunmetalgray"]
    const ringColor = "black";
    const ringRadius = 50;
    const ringThickness = ringRadius / 2.0;
    const ballRadius = 0.8 * ringRadius;
    const circleRadius = ringRadius - ringThickness / 2;
    const [circles, setCircles] = useState<JSX.Element[]>([]);

    const handleClick = (id: number) => {
        console.log(`circle ${id} was clicked`);
    };


    const svgInit = () => {
        const xInc = 2.0 * ringRadius;
        const yInc = xInc * Math.sin(Math.PI / 3.0);
        const numCircles = 99;
        var xInit = 50;
        var x = xInit;
        var y = x;
        var numRows = rowLengths.length;
        var maxRowLength = Math.max(...rowLengths);
        var numBoardPositions = rowLengths.reduce((sum, x) => sum + x);
        const circlesBuilder: JSX.Element[] = [];
        // Place circles on board
        var i = 0;
        for (var row = 0; row < numRows; row++) {
            y = 50 + yInc * row;
            xInit = 50 + xInc * Math.abs(maxRowLength - rowLengths[row]) / 2; // integer division used to offset odd rows
            for (var position = 0; position < rowLengths[row]; position++) {
                x = xInit + position * xInc;
                circlesBuilder[i] =
                    <circle
                        id={`c${i + 1}`}
                        cx={x}
                        cy={y}
                        r={circleRadius}
                        stroke={ringColor}
                        stroke-opacity={1}
                        strokeWidth={ringThickness}
                        fill-opacity={0}
                    />
                i++;
            }
        }
        y = (numRows + 2) * yInc;
        for (var b = 0; b < ballCounts.length; b++) {
            x = 50;
            for (var j = 0; j < ballCounts[b]; j++) {
                circlesBuilder[i] =
                    <circle
                        id={`c${i + 1}`}
                        cx={x} cy={y}
                        fill={ballColors[b]}
                        strokeOpacity={0}
                    />
                x += 2 * ballRadius * 1.1;
                i++;
            }
            y += yInc;
        }
        // Hide other circles
        for (; i < numCircles; i++) {
            circlesBuilder[i] =
                <circle
                    id={`c${i + 1}`}
                    strokeOpacity={0}
                    fillOpacity={0}
                />
        }
        setCircles(circlesBuilder);
    };


    // Board: knows which SVG elements correspond to each board position and spare ball position
    //        collection of balls
    //          collection of rings
    //          board positions
    //          adjacencies
    // -------------------------------- TESTS ------------------------------------
    // -------------------------- MAIN --------------------------------------
    const [indexA, setA] = useState(0);
    const [indexB, setB] = useState(1);
    const [indexC, setC] = useState(2);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        svgInit();
        setInterval(() => setSeconds(i => i + 1), 1000);
    }, []);
    // temp - change colors
    useEffect(() => {
        setA(i => i + 1);
        setB(i => i + 1);
        setC(i => i + 1);
    }, [seconds]);

    const handleMove = (/* handle user moves */) => {
        // Update game state
    };

    return (
        <table>
            <tr>
                <td>
                    <svg id="board" width="700" height="700">
                        {circles}
                        <Ring id="TEST-Ring" centerX={50} centerY={50} isVisible={true} />
                        <Ball id="TEST-Ball" centerX={50} centerY={50} isVisible={true} color={ballColors[indexA % 3]}/>
                        <Ring id="TEST-Ring" centerX={50} centerY={150} isVisible={true} />
                        <Ball id="TEST-Ball" centerX={50} centerY={150} isVisible={true} color={ballColors[indexB % 3]} />
                        <Ring id="TEST-rinv" centerX={50} centerY={250} isVisible={true} />
                        <Ball id="TEST-binv" centerX={50} centerY={250} isVisible={true} color={ballColors[indexC % 3]} />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </td>
                <td>
                    <div id="output"></div>
                </td>
            </tr>
        </table>
    );
};

export default Board;
