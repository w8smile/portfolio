import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Сярога</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'inst'}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Sergei Nakovnick, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({family: "Josefin Sans sans-serif", weight: 700, Fmax:22, Fmin: 16})}
  letter-spacing: 3px;
  
  
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0px;
`
const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  &:hover {
      color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
    
    
`

const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`
const SocialItem = styled.li`

`