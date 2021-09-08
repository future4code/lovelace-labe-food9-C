import React from "react"
import { Adress, AdressContainer, Button, Container, Data, DataContainer, HeaderContainer, HistoryContainer, OrderDate, RegisteredAdress, RequestCard, RequestsContainer, Restaurant, Total } from "./styledOrderHistory"
import edit from "../../assets/edit.svg"

const OrderHistoryPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <p>Meu perfil</p>
            </HeaderContainer>

            <DataContainer>
                <Data>
                    <p>Bruna Oliveira</p>
                    <p>bruna@gmail.com</p>
                    <p>333.333.333-33</p>
                </Data>

                <img src={edit} alt={"Ícone de editar"} />
            </DataContainer>

            <AdressContainer>
                <Adress>
                    <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
                    <p>Rua Alessandra Vieira, 42 - Santana</p>
                </Adress>

                <img src={edit} alt={"Ícone de editar"} />
            </AdressContainer>

            <RequestsContainer>
                <p>Histórico de pedidos</p>
            </RequestsContainer>

            <RequestCard>
                <HistoryContainer>
                    <Restaurant>Bullguer Vila Madalena</Restaurant>
                    <OrderDate>39 de outubro 2019</OrderDate>
                    <Total>SUBTOTAL R$89,00</Total>
                </HistoryContainer>

                <Button>3</Button>
            </RequestCard>

            <RequestCard>
                <HistoryContainer>
                    <Restaurant>Bullguer Vila Madalena</Restaurant>
                    <OrderDate>39 de outubro 2019</OrderDate>
                    <Total>SUBTOTAL R$89,00</Total>
                </HistoryContainer>

                <Button>3</Button>
            </RequestCard>

            <RequestCard>
                <HistoryContainer>
                    <Restaurant>Bullguer Vila Madalena</Restaurant>
                    <OrderDate>39 de outubro 2019</OrderDate>
                    <Total>SUBTOTAL R$89,00</Total>
                </HistoryContainer>

                <Button>3</Button>
            </RequestCard>

            <RequestCard>
                <HistoryContainer>
                    <Restaurant>Bullguer Vila Madalena</Restaurant>
                    <OrderDate>39 de outubro 2019</OrderDate>
                    <Total>SUBTOTAL R$89,00</Total>
                </HistoryContainer>

                <Button>3</Button>
            </RequestCard>

        </Container>
    )
}

export default OrderHistoryPage