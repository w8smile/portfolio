import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Дайте нам ноутбуки в руки, мы взломаем интернет.</SectionTitle>
                    <Button>Взломать</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #8bff8b;


`