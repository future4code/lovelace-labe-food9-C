import React, { useState } from "react"
import useForm from "../../hooks/useForm";
import { Button, CircularProgress } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import { ContainerSignUp, FormSignUp, H4, Logo } from "./styledSignUpPage";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router";
import { goToLogin } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/constants/urls";
import { usersSignUp } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export const SignUpPage = () => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({name: "", email: "", cpf: "", password: ""})
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitSignUp = (event) => {
        event.preventDefault()
        usersSignUp(`${BASE_URL}/fourFoodC/signup`, form, clear, history, setIsLoading)

    }


    return (
        <div>
       <Button onClick={() => goToLogin(history)}> <ArrowBackIosIcon/> </Button>
        <ContainerSignUp>
        
            <Logo src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg" alt="logo"/>
            <H4>Cadastrar</H4>
            <FormSignUp onSubmit={onSubmitSignUp}>
            <TextField
            name="name"
            type="text"
            label="Nome" 
            placeholder="Nome e Sobrenome"
            variant="outlined"
            value={form.name} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="email"
            type="email"
            label="Email" 
            placeholder="email@email.com"
            variant="outlined"
            value={form.email} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="cpf"
            label="CPF" 
            placeholder="000.000.000-00"
            variant="outlined"
            value={form.cpf} 
            onChange={onChange}
            inputProps={{pattern:"[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"}}
            required
            />
            <br/>
            <TextField
            name="password"
            type="password"
            label="Senha" 
            placeholder="Senha"
            variant="outlined" 
            value={form.password} 
            onChange={onChange}
            required
            />
            <br/>
            <TextField
            name="password"
            type="password"
            label="Confirmar senha" 
            placeholder="Confirme a senha anterior"
            variant="outlined" 
            value={form.password} 
            onChange={onChange}
            required
            />
            <br/> <br/>
            <Button variant="contained" color="secondary" type="submit"> {isLoading ? <CircularProgress color="inherit" size={24} /> : <> Criar </>} </Button>
            </FormSignUp>
        </ContainerSignUp>
        </div>
    )
}

export default SignUpPage 