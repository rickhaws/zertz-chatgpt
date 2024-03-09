import React, { useEffect, useState } from 'react';

interface RingProps {
    id: string | number;
    centerX: number;
    centerY: number;
    isVisible: boolean;
}

const Ring: React.FC<RingProps> = (props: RingProps) => {
    return (
    <circle
        className={`circle ${props.isVisible ? 'visible' : 'hidden'}`}
        id={props.id.toString()}
        cx={props.centerX}
        cy={props.centerY}
    />)
};

export default Ring;