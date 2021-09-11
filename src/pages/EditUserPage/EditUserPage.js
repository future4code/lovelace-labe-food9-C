import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from "react"
import { useHistory } from "react-router"
import { BASE_URL } from '../../constants/constants/urls'
import useForm from '../../hooks/useForm'
import useProtectedPage from "../../hooks/useProtectedPage"
import useUpdateData from '../../hooks/useUpdateData'
import { goToHome, goToOrderHistoryPage } from "../../routes/coordinator"
import { Container, HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import { ContainerForm } from "./styledEditUser"

const EditUserPage = () => {
    useProtectedPage()
    const history = useHistory()
    const editProfile = useUpdateData([],`${BASE_URL}/fourFoodC/profile`)
    const [form, onChange, clear] = useForm({id:'' ,name: "", email: "", cpf: ""})
    
    
    const putUpdateProfile = (event) => {
        event.preventDefault();
       editProfile(form, onChange, clear)
    }




    return (
        <Container>
            <HeaderContainer >
                <IconButton onClick={() => goToOrderHistoryPage(history)}>
                <ArrowBackIosIcon onClick={() => goToHome(history)}/>
                </IconButton>
                <p>Editar</p>
            </HeaderContainer>
            <ContainerForm onSubmit={putUpdateProfile}>
                <TextField 
                name ='name' 
                label ="Nome" 
                type="text"
                 placeholder="Nome" 
                 variant="outlined" 
                 value={form.name} 
                 onChange={onChange}  />
                
                <TextField 
                name ='email' 
                label ="Email" 
                type="email" 
                placeholder="Email" 
                variant="outlined" 
                value={form.email} 
                onChange={onChange} />
                
                <TextField 
                name ='cpf' 
                label ="cpf" 
                type="number" 
                placeholder= "cpf" 
                variant="outlined" 
                value={form.cpf} 
                onChange={onChange} />

                <Button variant="contained" color="primary">
                    Salvar
                </Button>
            </ContainerForm>
        </Container>
    )
}

export default EditUserPage