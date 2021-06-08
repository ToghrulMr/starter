import React from 'react';
import cup from '../../images/cup.png';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductDesc,
    ProductsMiniHeading

} from './Products'
const Products = ({ data}) => {
    return (
        
 <ProductsContainer>
 <ProductsHeading> <img src={cup} height="50px"/> Prizes and Rewards <img src={cup} height="50px"/>  <ProductsMiniHeading> New Prizes added every month</ProductsMiniHeading></ProductsHeading>
 
 <ProductWrapper>
     {data.map((product, index) =>{
       return(
           <ProductCard key={index}>
               <ProductImg src={product.img} alt={product.alt}/>
                   <ProductTitle>{product.name}</ProductTitle>
                   <ProductDesc>{product.desc}</ProductDesc>
           </ProductCard>
       )
     })}
 </ProductWrapper>
 </ProductsContainer>
  )
}

export default Products
