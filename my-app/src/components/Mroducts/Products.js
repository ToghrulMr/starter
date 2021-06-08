import styled from 'styled-components';
import ImgBg from '../../images/group.png'


export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: url(${ImgBg});;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  height:200px;
  width: 200px;
  background-color:#1a1aff;
  margin-top: 2rem;
`;

export const ProductImg = styled.img`
  height: 90px;
  min-width: 100px;
  max-width: 100%;
  margin-left: 50px;
  margin-top: 20px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 80;
  font-size: 1rem;
  margin-left:20%;
  line-height: 1;
  margin-top:1rem;
  margin-bottom: 1rem;
  width:210px;
`;



export const ProductDesc = styled.p`
 color:white;
  margin-left:20%;
  font-size:10px;
  text-align: center;
`;

export const ProductsMiniHeading = styled.p`
color:white;
text-align: center;
  margin-bottom: 1rem;
  font-size:10px;
`;