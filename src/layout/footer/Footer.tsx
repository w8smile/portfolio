import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialItemData = [
    {
        iconId: 'linkedin',
    },
    {
        iconId: 'inst',
    },
    {
        iconId: 'vk',
    },
    {
        iconId: 'telegram',
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Сярога</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon heigth={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Sergei Nakovnick, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

