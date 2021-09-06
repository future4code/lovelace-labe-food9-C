import React from "react"
import {BoxText, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa,ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser,TextFour, TextOne, TextRestaurante, TextThree, TextTwo, TimeContainer } from "./styledHomePage"

export const HomePage = () => {
    return (
        <ContainerFeed>
            <h1>HomePage</h1>

            <ContainerFiltro>
                <TextOne><span>Burger</span></TextOne>
                <TextTwo><span>Asiatica</span></TextTwo>
                <TextThree><span>Massas</span></TextThree>
                <TextFour><span>Saudaveis</span></TextFour>
            </ContainerFiltro> 

            <ContainerCard>

                  <ContainerBox> 

                <ContainerImg>
                <ImageContainer src='https://img.itdg.com.br/tdg/images/blog/uploads/2017/07/shutterstock_337714676.jpg?w=1200' alt='foto do sanduba' />
                  </ContainerImg>
                   <TextRestaurante>Nome do Restaurante</TextRestaurante>
                     <TimeContainer> 50 - 60 min </TimeContainer>
                  <ContainerTaxa> Frete R$6,00  </ContainerTaxa>
                  </ContainerBox> 
                
            </ContainerCard> 
            

            <ContainerFooter>

            <ItemFooterHome>icon1</ItemFooterHome>

            <ItemFooterCart>icon2</ItemFooterCart>

            <ItemFooterUser>icon3</ItemFooterUser>
         </ContainerFooter>
        </ContainerFeed>
    )
}

export default HomePage