import React from 'react';
import {Link } from 'react-router-dom'
import {  InfoSec1,  } from './Info.elements';
import { Container, Button,  } from '../../globalStyles';
import {Img } from './Info.elements'
import {
      
     InfoRow,
     InfoColumn,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     ImgWrapper,
    
    } from'./Info.elements';

const Info = ({ 
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

export default Info;
