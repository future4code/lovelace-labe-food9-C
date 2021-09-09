import React, { useState } from "react"
import useForm from "../../hooks/useForm";
import { ContainerRegister, FormRegister, H4} from "./styledRegisterPage";
import { Button, CircularProgress } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router";
import { goBack } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/constants/urls";
import { registerUser } from "../../services/user";



export const RegisterPage = () => {
    useProtectedPage()

    const history = useHistory()
    const [form, onChange, clear] = useForm({street: "", number: "", complement: "", neighbourhood: "", city: "", state: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitRegister = (event) => {
        event.preventDefault()
        register()
    }

    const register = () => {
        registerUser(`${BASE_URL}/fourFoodC/address`, form, setIsLoading)
    }
    

    return (
        <div>
            <Button onClick={() => goBack(history)}> <ArrowBackIosIcon/> </Button>
        <ContainerRegister>
            
            <H4>Meu endereço</H4>
            <FormRegister onSubmit={onSubmitRegister}>
            <TextField
            name="street"
            type="text"
            id="outlined-basic" 
            label="Logradouro" 
            placeholder="Rua / Av"
            variant="outlined"
            value={form.street} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="number"
            type="text"
            id="outlined-basic" 
            label="Número" 
            placeholder="Número"
            variant="outlined"
            value={form.number} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="complement"
            id="outlined-basic" 
            label="Complemento" 
            placeholder="Apt / Bloco"
            variant="outlined"
            value={form.complement} 
            onChange={onChange}
            />
            <br/>
            <TextField
            name="neighbourhood"
            type="text"
            id="outlined-basic" 
            label="Bairro" 
            placeholder="Bairro"
            variant="outlined" 
            value={form.neighbourhood} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="city"
            type="text"
            id="outlined-basic" 
            label="Cidade" 
            placeholder="Cidade"
            variant="outlined" 
            value={form.city} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="state"
            type="text"
            id="outlined-basic" 
            label="Estado" 
            placeholder="Estado"
            variant="outlined" 
            value={form.state} 
            onChange={onChange}
            required
            />
            <br/> <br/>
            <Button variant="contained" color="secondary" type="submit"> {isLoading ? <CircularProgress color="inherit" size={24} /> : <> Salvar </>} </Button>
            </FormRegister>
            
        </ContainerRegister>
        </div>
    )
}

export default RegisterPage