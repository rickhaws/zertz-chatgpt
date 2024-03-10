import React, { useEffect, useState } from 'react';

interface RingProps {
    id: string | number;
    centerX: number;
    centerY: number;
    isVisible: boolean;
}

const Ring: React.FC<RingProps> = (props: RingProps) => {
    const ringColor = "black";
    const desiredRingRadius = 50;
    const ringThickness = desiredRingRadius / 2.0;
    const circleRadius = desiredRingRadius - ringThickness / 2;
    return (
    <circle
        className={`circle ${props.isVisible ? 'visible' : 'hidden'}`}
        id={props.id.toString()}
        cx={props.centerX}
        cy={props.centerY}
        r={circleRadius}
        // stroke={ringColor}
        // stroke-opacity={1}
        // strokeWidth={ringThickness}
        // fill-opacity={0}
/>)
};

export default Ring;