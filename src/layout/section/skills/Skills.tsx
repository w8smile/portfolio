import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

const skillData = [
    {
        iconId: "codeSvg",
        title: "html5",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
     {
        iconId: "cssSvg",
        title: "css3",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
     {
        iconId: "reactSvg",
        title: "React",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
     {
        iconId: "styledSvg",
        title: "React",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
     {
        iconId: "tsSvg",
        title: "Typescript",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
     {
        iconId: "figmaSvg",
        title: "Web design",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },


]
export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((s, index)=> {
                       return <Skill iconId={s.iconId} title={s.title} key={index}
                                  description={s.description}/>
                    })}
                {/*    <Skill iconId={"codeSvg"} title={"html5"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                {/*    <Skill iconId={"cssSvg"} title={"css3"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                {/*    <Skill iconId={"reactSvg"} title={"React"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                {/*    <Skill iconId={"styledSvg"} title={"Styled components"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                {/*    <Skill iconId={"tsSvg"} title={"Typescript"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                {/*    <Skill iconId={"figmaSvg"} title={"Web design"}*/}
                {/*           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>*/}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};



