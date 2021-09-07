import React from "react"
import { AllItens, BoxText, ContainerBox, ContainerCard, ContainerFeed, ContainerFiltro, ContainerFooter, ContainerImg, ContainerTaxa, IconeCart, IconeHome, IconeUser, ImageContainer, ItemFooterCart, ItemFooterHome, ItemFooterUser, TextFour, TextOne, TextRestaurante, TextThree, TextTwo, TimeContainer } from "./styledHomePage"

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
                <AllItens>
                    <ItemFooterHome>
                        <IconeHome src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/E718CCC7-08DF-4BEA-B3D1-8DCB3E8A3BA5.svg' />
                    </ItemFooterHome>
                    <ItemFooterCart>
                        <IconeCart src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/31E0BDE3-26B3-421A-AEC5-883D098413D6.svg' />
                    </ItemFooterCart>

                    <ItemFooterUser><IconeUser src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/3725C74F-82A8-4E32-9948-8CBFC09C877F.svg' />
                    </ItemFooterUser>
                </AllItens>
            </ContainerFooter>
        </ContainerFeed>
    )
}

export default HomePage


