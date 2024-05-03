import React from 'react';

interface BallProps {
    id: string;
    key?: string;
    centerX: number;
    centerY: number;
    isVisible: boolean;
    color: string;
    onClick?: () => void;
}

const Ball: React.FC<BallProps> = (props: BallProps) => {
    const ballRadius = 35;
    return (
        <circle
            className={`circle ${props.isVisible ? 'visible' : 'hidden'}`}
            cx={props.centerX}
            cy={props.centerY}
            r={ballRadius}
            strokeOpacity={props.isVisible ? .5 : 0}
            stroke="white"
            fillOpacity={props.isVisible ? 1 : 0}
            fill={props.color}
            onClick={props.onClick}
        />)
};

export default Ball;