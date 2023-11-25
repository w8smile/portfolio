import {theme} from "./Theme";

type FontPropsType = {
    Fmax?: number
    Fmin?: number
    color?: string
    family?: string
    lineHeight?: number
    weight?: number
}
export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
   font-family: ${family || "poppins"};
   font-weight: ${weight || 400};
   color: ${color || theme.colors.font};
   line-height:  ${lineHeight || 1.2};
   font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`