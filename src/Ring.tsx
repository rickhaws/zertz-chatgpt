import React from 'react';

interface RingProps {
    id: string | number;
    key?: string;
    centerX: number;
    centerY: number;
    isVisible: boolean;
    onClick?: () => void;
}

const Ring: React.FC<RingProps> = (props: RingProps) => {
    const ringColor = "black";
    const desiredRingRadius = 50;
    const ringThickness = desiredRingRadius / 2.0;
    const circleRadius = desiredRingRadius - ringThickness / 2;
    return (
    <circle
        className={`ring ${props.isVisible ? 'visible' : 'hidden'}`}
        id={props.id.toString()}
        key={props.id.toString()}
        cx={props.centerX}
        cy={props.centerY}
        r={circleRadius}
        stroke={ringColor}
        strokeOpacity={props.isVisible ? 1 : 0}
        strokeWidth={ringThickness}
        fillOpacity={0}
        onClick={props.onClick}
/>)
};

export default Ring;