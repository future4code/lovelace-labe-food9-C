import React,{useEffect, useState} from 'react';
import { MainContainer, TitleOfTheConatiner, InProgressImg, RestaurantName, SubTottalOrMissingTime,ContainerOfTheProgressInfo,ImgContainer } from './InProgressStyled';
import clockImage from '../../assets/clock.png'
const InProgressCard = () => {

    // const [showInProgress, setShowInProgress ] = useState(false)

    // useEffect(()=>{

    // },[])

    return (
        <MainContainer>

            <ImgContainer>
                <InProgressImg src={clockImage} />
            </ImgContainer>

            <ContainerOfTheProgressInfo>
                <TitleOfTheConatiner>Pedido em andamento</TitleOfTheConatiner>
                <RestaurantName>Bullguer Vila Madalena</RestaurantName>
                <SubTottalOrMissingTime>SUBTOTAL R$67,00</SubTottalOrMissingTime>
            </ContainerOfTheProgressInfo>

        </MainContainer>
    );
};
export default InProgressCard