import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles"
import './../../styles/slider.css';

type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props: SlidePropsType) => {
    return (
    <S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>{props.userName}</S.Name>
    </S.Slide>)
}

const items = [
    <Slide userName={"ivan ivanov"} text={"Надо любить жизнь больше, чем смысл жизни."}/>,
    <Slide userName={"piotr petrov"} text={"Жизнь - это то, что с тобой происходит, пока ты строишь планы."}/>,
    <Slide userName={"sasha sashanov"} text={"Ваше время ограничено, не тратьте его, живя чужой жизнью"}/>,

]
export const Slider = () => (
    <S.Slider><AliceCarousel
        mouseTracking
        items={items}
    /></S.Slider>

);

// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import {S} from "./Slider_Styles"
//
//
// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                         labore
//                         et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
//                     <S.Name>@Sergei Nakovnick</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={"active"}></span>
//                 <span></span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };

