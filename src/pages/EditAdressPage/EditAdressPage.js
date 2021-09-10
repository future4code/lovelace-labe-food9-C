import React, { useEffect } from "react"
import { HeaderContainer } from "../OrderHistoryPage/styledOrderHistory"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import back from "../../assets/back.svg"
import { ContainerRegister, FormRegister } from "../../pages/RegisterPage/styledRegisterPage"
import IconButton from '@material-ui/core/IconButton'
import { goToOrderHistoryPage } from "../../routes/coordinator"
import { useHistory } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/constants/urls"
import useForm from "../../hooks/useForm"
import useUpdateData from "../../hooks/useUpdateData"
import useRequestData from "../../hooks/useRequestData"
import axios from "axios"

const EditAdressPage = () => {
     useProtectedPage()

   
     const history = useHistory()
    
     const [form, onChange] = useForm({street: "", number: "", complement: "", neighbourhood: "", city: "", state: "" })

    //  const user = useRequestData({}, `${BASE_URL}/fourFoodC/address`, form)

    //  const updateAdress = useUpdateData({}, `${BASE_URL}/fourFoodC/address`, form)
    //  console.log(updateAdress)

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