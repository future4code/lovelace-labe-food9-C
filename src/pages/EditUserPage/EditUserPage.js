import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from "react"
import { useHistory } from "react-router"
import useForm from '../../hooks/useForm'
import useProtectedPage from "../../hooks/useProtectedPage"
import { goToHome, goToOrderHistoryPage } from "../../routes/coordinator"
import { editProfile } from '../../services/user'
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import { ContainerForm } from "./styledEditUser"

const EditUserPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({name: "", email: "", cpf: ""})
   
    const onSubmitForm = (event) => {
        event.preventDefault()
        goToOrderHistoryPage(history)
        editProfile(form, history,clear)
      }



    return (
        <Container>
            <HeaderContainer >
                <IconButton onClick={() => goToOrderHistoryPage(history)}>
                <ArrowBackIosIcon onClick={() => goToHome(history)}/>
                </IconButton>
                <p>Editar</p>
            </HeaderContainer>
            <ContainerForm onSubmit={onSubmitForm}>
                <TextField 
                name ={'name'} 
                label ={"Nome" }
                type={"text"}
                 placeholder={"Nome"} 
                 variant="outlined" 
                 value={form.name} 
                 onChange={onChange}  />
                
                <TextField 
                name ={'email'} 
                label ={"Email" }
                type={"email" }
                placeholder={"Email" }
                variant="outlined" 
                value={form.email} 
                onChange={onChange} />
                
                <TextField 
                name ={'cpf' }
                label ={"CPF" }
                type={"number" }
                placeholder= "000.000.000-00"
                variant={"outlined" }
                value={form.cpf} 
                onChange={onChange} />

                <Button variant="contained" color="primary" type={"submit"}> 
                    Salvar
                </Button>
            </ContainerForm>
        </Container>
    )
}

export default EditUserPage