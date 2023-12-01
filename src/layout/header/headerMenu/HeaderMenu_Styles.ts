import { Link } from "react-scroll";
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


const Mask = styled.span `
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accent};
  transition: ${theme.animations.transition};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const MenuItem = styled.li`
    position: relative;
  
`

const NavLink = styled(Link)`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
  
`



// MobileMenu
const MobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{is0pen: boolean}> `
  position: fixed;
  background-color: rgba(31,31,32, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;
  
  
  ul{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;
  }

  ${props => props.is0pen && css<{is0pen: boolean}>`
    transform: translateY(0);
    
    & ul {
      gap: 30px
    }
    
  `}
`

const BurgerButton = styled.button<{is0pen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color:${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.is0pen && css<{is0pen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before{
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      
      ${props => props.is0pen && css<{is0pen: boolean}>`
        transform: rotate(-45deg) translateY(0px);
    `}
    }
    &::after{
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.is0pen && css<{is0pen: boolean}>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
    `}
    }
  }
`
//DesktopMenu


const DesktopMenu = styled.nav`
  ul{
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
    //тут нужно будет удалить запрос
`


export const S = {
    NavLink, MenuItem, Mask,
    MobileMenu, MobileMenuPopup, BurgerButton,
    DesktopMenu
}

