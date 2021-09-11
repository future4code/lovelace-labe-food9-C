import IconButton from '@material-ui/core/IconButton'
import React from "react"
import { useHistory } from "react-router"
import edit from "../../assets/edit.svg"
import Footer from "../../components/Footer/Footer"
import RequestsCard from "../../components/RequestsCard/RequestsCard"
import { BASE_URL } from '../../constants/constants/urls'
import useProfileRequest from '../../hooks/useProfileRequest'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToEditAdressPage, goToEditUserPage } from "../../routes/coordinator"
import { Adress, AdressContainer, Container, Data, DataContainer, HeaderContainer, RegisteredAdress, RequestsContainer } from "./styledOrderHistory"

const OrderHistoryPage = () => {
    useProtectedPage()
    const history = useHistory()
    const profileUsers = useProfileRequest({},`${BASE_URL}/fourFoodC/profile`)
     console.log(profileUsers)

    return (
        <Container>
            <HeaderContainer>
                <p>Meu perfil</p>
            </HeaderContainer>

            <DataContainer>
                <Data>
                    <p>{profileUsers.name}</p>
                    <p>{profileUsers.email}</p>
                    <p>{profileUsers.cpf}</p>
                </Data>

                <IconButton onClick={() => goToEditUserPage(history)}>
                    <img src={edit} alt={"Ícone de editar"} />
                </IconButton>
            </DataContainer>

            <AdressContainer>
                <Adress>
                    <RegisteredAdress>Endereço cadastrado</RegisteredAdress>
                    <p>{profileUsers.address}</p>
                </Adress>

                <IconButton onClick={() => goToEditAdressPage(history)}>
                    <img src={edit} alt={"Ícone de editar"} />
                </IconButton>
            </AdressContainer>
            <RequestsContainer>
                <p>Histórico de pedidos</p>
            </RequestsContainer>

            <RequestsCard />
            <RequestsCard />
            <RequestsCard />
            <RequestsCard />
            <Footer />
        </Container>
    )
}

export default OrderHistoryPage