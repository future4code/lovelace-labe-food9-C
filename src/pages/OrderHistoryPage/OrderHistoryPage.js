import React from "react"
import { Adress, AdressContainer, Container, Data, DataContainer, FooterContainer, HeaderContainer, RegisteredAdress, RequestsContainer } from "./styledOrderHistory"
import edit from "../../assets/edit.svg"
import avatar from "../../assets/avatar.svg"
import homepage from "../../assets/homepage.svg"
import shopping from "../../assets/shopping.svg"
import RequestsCard from "../../components/RequestsCard/RequestsCard"
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from "react-router"
import { goToEditUserPage, goToEditAdressPage } from "../../routes/coordinator"

const OrderHistoryPage = () => {

    const history = useHistory()

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

                <IconButton onClick={() => goToEditUserPage(history)}>
                    <img src={edit} alt={"Ícone de editar"} />
                </IconButton>
            </DataContainer>

            <AdressContainer>
                <Adress>
                    <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
                    <p>Rua Alessandra Vieira, 42 - Santana</p>
                </Adress>

                <IconButton onClick={() => goToEditAdressPage(history)}>
                    <img src={edit} alt={"Ícone de editar"} />
                </IconButton>
            </AdressContainer>
            HomePage
            <RequestsContainer>
                <p>Histórico de pedidos</p>
            </RequestsContainer>

            <RequestsCard />
            <RequestsCard />
            <RequestsCard />
            <RequestsCard />

            <FooterContainer>
                <img src={homepage} alt={"Ícone da homepage"} />
                <img src={shopping} alt={"Ícone de shopping-cart"} />
                <img src={avatar} alt={"Ícone de avatar"} />
            </FooterContainer>
        </Container>
    )
}

export default OrderHistoryPage