import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import axios from "axios"
import React, { useEffect } from "react"
import { useHistory } from "react-router"
import back from "../../assets/back.svg"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { ContainerRegister, FormRegister } from "../../pages/RegisterPage/styledRegisterPage"
import { goToOrderHistoryPage } from "../../routes/coordinator"
import { HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"

const EditAdressPage = () => {
     useProtectedPage()

   
     const history = useHistory()
    
     const [form, onChange] = useForm({street: "", number: "", complement: "", neighbourhood: "", city: "", state: "" })

    const getFullAdress = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/address", {
            headers: {
                auth: localStorage.getItem("token")
            }
        }) 
    }
    
    useEffect(() => {
        getFullAdress()
    }, [])
     
     const onSubmitAdress = (event) => {
         event.preventDefault()
         
     }

    return (
        <ContainerRegister>

            <HeaderContainer>
                <IconButton onClick={() => goToOrderHistoryPage(history)}>
                    <img src={back} alt={"Ícone de voltar"} />
                </IconButton>
                <p>Endereço</p>
            </HeaderContainer>


            <FormRegister onSubmit={onSubmitAdress}>
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
                <br />
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
                <br />
                <TextField
                    name="complement"
                    id="outlined-basic"
                    label="Complemento"
                    placeholder="Apt / Bloco"
                    variant="outlined"
                    value={form.complement}
                    onChange={onChange}
                />
                <br />
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
                <br />
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
                <br />
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
                <br /> <br />
                <Button variant="contained" color="secondary" type="submit">Salvar</Button>
            </FormRegister>

        </ContainerRegister>
    )
}

export default EditAdressPage