import React from 'react';

interface BallProps {
    id: string | number;
    centerX: number;
    centerY: number;
    isVisible: boolean;
    color: string;
}

const Ball: React.FC<BallProps> = (props: BallProps) => {
    const ballRadius = 35;
    return (
    <circle
        className={`circle ${props.isVisible ? 'visible' : 'hidden'}`}
        id={props.id.toString()}
        cx={props.centerX}
        cy={props.centerY}
        r={ballRadius}
        stroke-opacity={props.isVisible ? .5 : 0}
        stroke="white"
        fill-opacity={props.isVisible ? 1 : 0}
        fill={props.color}
/>)
};

export default Ball;