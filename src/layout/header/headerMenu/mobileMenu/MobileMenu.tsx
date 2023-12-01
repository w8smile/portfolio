import React, {useState} from 'react';
import {S} from "./../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";




export const MobileMenu: React.FC  = () => {
    const [menuIsOpen, setmenuIsOpen] = useState (false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton is0pen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup is0pen={menuIsOpen} onClick = { ()=>{setmenuIsOpen(false)} }>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
