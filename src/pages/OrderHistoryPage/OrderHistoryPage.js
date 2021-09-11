import IconButton from '@material-ui/core/IconButton'
import React from "react"
import { useHistory } from "react-router"
import edit from "../../assets/edit.svg"
import Footer from "../../components/Footer/Footer"
import RequestsCard from "../../components/RequestsCard/RequestsCard"
import { goToEditAdressPage, goToEditUserPage } from "../../routes/coordinator"
import { Adress, AdressContainer, Container, Data, DataContainer, HeaderContainer, RegisteredAdress, RequestsContainer } from "./styledOrderHistory"

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
              <Footer/>
        </Container>
    )
}

export default OrderHistoryPage