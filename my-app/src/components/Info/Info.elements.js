import styled from 'styled-components';
import ImgBg from '../../images/Hero.png';
import $ImgBm from '../../images/Rectangle1.png'

export const InfoSec1 = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  margin:0;
  
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap:wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
};
`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right:15px;
padding-left:15px;
flex:1;
max-width:50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
 max-width: 100%;
 flex-basis: 100%;
 display: flex;
 justify-content: center;
}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 690px;
  color: #fff;
 
  line-height: 1;
  font-weight: bold;

@media screen and (max-width: 768px){
    padding-bottom: 35px;
}
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
font-size:18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size:48px;
line-height: 1.1;
color:${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
max-width:555px;
display: flex;
justify-content: ${({start}) => (start ?  'flex-start': 'flex-end')};
`;

export const Img = styled.img`
padding-right:0;
border:0;
max-width:100%;
vertical-align:middle;
display:inline-block;
max-height:500px;
`;
