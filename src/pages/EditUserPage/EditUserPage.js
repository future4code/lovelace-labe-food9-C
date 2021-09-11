import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from "react"
import { useHistory } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import { goToHome, goToOrderHistoryPage } from "../../routes/coordinator"
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import { ContainerForm } from "./styledEditUser"

const EditUserPage = () => {
    
    useProtectedPage()
    const history = useHistory()

    // const [form, onChange] = useForm({})

    return (
        <Container>
            <HeaderContainer>
                <IconButton onClick={() => goToOrderHistoryPage(history)}>
                <ArrowBackIosIcon onClick={() => goToHome(history)}/>
                </IconButton>
                <p>Editar</p>
            </HeaderContainer>

            <ContainerForm >
                <TextField label="Nome" variant="outlined" />
                <TextField label="E-mail" variant="outlined" />
                <TextField label="CPF" placeholder="CPF" variant="outlined" />

                <Button variant="contained" color="primary">
                    Salvar
                </Button>
            </ContainerForm>
        </Container>
    )
}

export default EditUserPage