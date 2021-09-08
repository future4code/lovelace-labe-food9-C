import React from "react"
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import { FormContainer } from "./styledAdressPage"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import back from "../../assets/back.svg"


const AdressPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <img src={back} alt={"Ícone de voltar"} />
                <p>Endereço</p>
            </HeaderContainer>

            <FormContainer>
                <TextField label="Logadouro" variant="outlined" />
                <TextField label="Número" variant="outlined" />
                <TextField label="Complemento" placeholder="Apto./Bloco" variant="outlined" />
                <TextField label="Bairro" variant="outlined" />
                <TextField label="Cidade" variant="outlined" />
                <TextField label="Estado" variant="outlined" />

                <Button variant="contained" color="primary">
                    Salvar
                </Button>

            </FormContainer>

        </Container>
    )
}

export default AdressPage