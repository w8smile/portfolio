import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Tilt from 'react-parallax-tilt';

import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Sergei Nakovnick</span></S.Name>
                        <S.MainTitle>
                            <Typewriter
                            options={{
                                strings: ["A Web Developer","A Frontend Developer",],
                                autoStart: true,
                                loop: true,
                                delay: 40
                            }}
                        />
                        </S.MainTitle>
                    </div>
                    <Tilt className="parallax-effect-img"
                          tiltMaxAngleX={40}
                          tiltMaxAngleY={40}
                          perspective={800}
                          transitionSpeed={1500}
                          scale={1.1}
                          gyroscope={true}>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


