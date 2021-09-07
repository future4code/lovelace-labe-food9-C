import React from "react"
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import back from "../../assets/back.svg"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ContainerForm } from "./styledEditUser"


const EditUserPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <img src={back} alt={"Ícone de voltar"} />
                <p>Editar</p>
            </HeaderContainer>

            <ContainerForm>
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