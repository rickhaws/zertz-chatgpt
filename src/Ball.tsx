import React from 'react';

interface BallProps {
    id: string;
    key?: string;
    centerX: number;
    centerY: number;
    radius: number;
    isVisible: boolean;
    color: string;
    row: number;
    col: number;
    onClick?: (row: number, col: number) => void;
}

const Ball: React.FC<BallProps> = (props: BallProps) => {
    return (
        <circle
            className={`circle ${props.isVisible ? 'visible' : 'hidden'}`}
            cx={props.centerX}
            cy={props.centerY}
            r={props.radius}
            strokeOpacity={props.isVisible ? 1 : 0}
            stroke="white"
            strokeWidth={1}
            fillOpacity={props.isVisible ? 1 : 0}
            fill={props.color}
            onClick={props.onClick ? _ => props.onClick!(props.row, props.col) : () => {}}
        />)
};

export default Ball;