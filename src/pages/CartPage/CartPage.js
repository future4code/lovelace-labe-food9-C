import { Button, Checkbox, FormControlLabel, Radio } from "@material-ui/core"
import { CheckBox } from "@material-ui/icons"
import React from "react"
import { AdressContainer, CheckboxPayment, Container, ContainerButton, Data, HeaderContainer, Pay, PaymentMethods, PricesCart, ServicesCart, SubTotal, Text } from "./CartPageStyles"


const CartPage = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <Container>
            <HeaderContainer>
                <p>Meu carrinho</p>
            </HeaderContainer>
        
            <AdressContainer>
                <Data>
                    <p>Endereço de entrega</p>
                    <strong> <p>Rua Botafogo Campeão, 95</p>  </strong>                
                </Data>
      
            </AdressContainer>

            <ServicesCart>
                <Text>Carrinho vazio</Text>

            <PricesCart>
                <p>Frete R$0,00</p>
                <SubTotal>
                    <p>SUBTOTAL</p>
                    <p>R$00.00</p>
                </SubTotal>
            </PricesCart>
            <PaymentMethods>
                <Pay>Formas de Pagamento</Pay>
            </PaymentMethods>
            </ServicesCart>


            <CheckboxPayment value={value} onChange={handleChange}>
            <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="Cartão de Crédito" control={<Radio />} label="Cartão de Crédito" />
            </CheckboxPayment>

            <ContainerButton>

            <Button color="secondary" variant="contained" fullWidth >Confirmar</Button>
            </ContainerButton>
        </Container>
    )
}

export default CartPage