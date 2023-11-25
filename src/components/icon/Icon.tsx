import React from 'react';
import iconsSprite from '../../assets/images/sprite-svg.svg'
type IconPropsType = {
    iconId: string
    width?: string
    heigth?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.heigth || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>

    );
};

