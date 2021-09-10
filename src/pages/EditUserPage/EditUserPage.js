import React from "react"
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import back from "../../assets/back.svg"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ContainerForm } from "./styledEditUser"
import IconButton from '@material-ui/core/IconButton'
import { goToOrderHistoryPage } from "../../routes/coordinator"
import { useHistory } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"


const EditUserPage = () => {
    
    useProtectedPage()
    const history = useHistory()

    // const [form, onChange] = useForm({})

    return (
        <Container>
            <HeaderContainer>
                <IconButton onClick={() => goToOrderHistoryPage(history)}>
                    <img src={back} alt={"Ícone de voltar"} />
                </IconButton>
                <p>Editar</p>
            </HeaderContainer>

            <ContainerForm >
                <TextField label="Nome" variant="outlined" />
                <TextField label="E-mail" variant="outlined" />
                <TextField label="CPF" placeholder="Apto./Bloco" variant="outlined" />

                <Button variant="contained" color="primary">
                    Salvar
                </Button>
            </ContainerForm>
        </Container>
    )
}

export default EditUserPage