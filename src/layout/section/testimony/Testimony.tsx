import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {IconWrapper} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles"

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"testimony"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  position: relative;
  background-color: #0f0a18;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }

`