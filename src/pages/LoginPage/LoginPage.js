import React, { useState } from "react"
import { Button, CircularProgress } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import { FormLogin, Logo, H4, ContainerLogin } from "./styledLoginPage";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

import { goToRegister, goToSignUp } from "../../routes/coordinator";

import { goToSignUp } from "../../routes/coordinator";

import { BASE_URL } from '../../constants/constants/urls'
import { users } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";





export const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitLogin = (event) => {
        event.preventDefault()
        users(`${BASE_URL}/fourFoodC/login`, form, clear, history, setIsLoading)

    }

    return (
        <ContainerLogin>
            <Logo src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg" alt="logo"/>
            <H4>Entrar</H4>
            <FormLogin onSubmit={onSubmitLogin}>
            <TextField
            name="email"
            type="email"
           
            label="Email" 
            variant="outlined"
            value={form.email} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="password"
            type="password"
            
            label="Senha" 
            variant="outlined" 
            value={form.password} 
            onChange={onChange}
            required
            />
            <br/> <br/>
            <Button variant="contained" color="secondary" type="submit"> {isLoading ? <CircularProgress color="inherit" size={24} /> : <> Enviar </>} </Button>
            <br/>
            <Button variant="text" color="primary" onClick={() => goToSignUp(history)}> Não possui conta? Clique aqui </Button>
        
            </FormLogin>
        </ContainerLogin>
    )
}

export default LoginPage