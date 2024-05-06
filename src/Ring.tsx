import React from 'react';

interface RingProps {
    id: string | number;
    key?: string;
    centerX: number;
    centerY: number;
    radius: number;
    isVisible: boolean;
    row: number;
    col: number;
    onClick?: (row: number, col: number) => void;
}

const Ring: React.FC<RingProps> = (props: RingProps) => {
    const ringColor = "black";
    const ringThickness = props.radius / 2.0;
    const circleRadius = props.radius - ringThickness / 2;
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
        onClick={props.onClick ? _ => props.onClick!(props.row, props.col) : () => {}}
/>)
};

export default Ring;