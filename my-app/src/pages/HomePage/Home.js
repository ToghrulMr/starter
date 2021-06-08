import React from 'react'
import { homeObjOne, homeObjTwo,homeObjThree,homeObjFour } from './Data'
import { InfoSection,Info,Mnfo,Lnfo } from '../../components';
import Products from '../../components/Products';
import Mroducts from '../../components/Mroducts';
import { productData } from '../../components/Products/data';
import { mroductData } from '../../components/Mroducts/data';

const Home = () => {
    return (
        <>
    <InfoSection {...homeObjOne}/>
    <Products data={productData}/>
    <Info {...homeObjTwo}/>
    <Mnfo {...homeObjThree}/>
    <Lnfo {...homeObjFour}/>
    <Mroducts data={mroductData}/>
    </>
    );
}

export default Home;
