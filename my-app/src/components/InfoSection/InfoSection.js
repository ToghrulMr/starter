import React from 'react';
import {Link } from 'react-router-dom'
import { InfoSec,   } from './InfoSection.elements';
import { Container,   } from '../../globalStyles';
import {Img } from './InfoSection.elements'
import Rocket from '../../images/Rocket.png';
import {
      
     InfoRow,
     InfoColumn,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     ImgWrapper,
     SubButton,
     SubButton1,
     SubWrapper
    } from'./InfoSection.elements';

const InfoSection = ({ 
    primary, 
    imgStart, 
    lightTopLine,
    lightTextDesc, 
   
    description,
    headline, 
    lightText,
    topLine,
    img,
    alt,
    start,
}) => {
    return (
        <>
            <InfoSec>
                <Container >
                    <InfoRow imgStart={imgStart}>
                     <InfoColumn> 
                            <TextWrapper>
                              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <SubWrapper>
                            <SubButton >
                               <img src={Rocket}/>
                            </SubButton>    
                        <SubButton1 >
                               About Us
                        </SubButton1>
                                   </SubWrapper>
                               
                               
                            </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                               <ImgWrapper start={start}>
                                  <Img src={img} alt={alt} />
                                </ImgWrapper>
                            </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
            
        </>
        
    );
};

export default InfoSection;
