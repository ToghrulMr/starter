import React from 'react';
import {Link } from 'react-router-dom'
import {  InfoSec1,  } from './Mnfo.elements';
import { Container, Button,  } from '../../globalStyles';
import {Img } from './Mnfo.elements'
import {
      
     InfoRow,
     InfoColumn,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     ImgWrapper,
    
    } from'./Mnfo.elements';

const Mnfo = ({ 
    primary, 
    imgStart, 
    lightTopLine,
    lightTextDesc, 
    buttonLabel, 
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
            <InfoSec1>
                <Container>
                    <InfoRow imgStart={imgStart}>
                     <InfoColumn> 
                            <TextWrapper>
                              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                              <Link to="/sign-up">
                                  <Button big fontBig primary={primary}>
                                      {buttonLabel}
                                  </Button>
                              </Link>
                            </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                               <ImgWrapper start={start}>
                                  <Img src={img} alt={alt} />
                                </ImgWrapper>
                            </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec1>
            
        </>
        
    );
};

export default Mnfo;
