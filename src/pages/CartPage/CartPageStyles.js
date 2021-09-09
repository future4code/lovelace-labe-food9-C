import { RadioGroup } from "@material-ui/core"
import styled from "styled-components"

export const Container = styled.body`
  display: flex;
  height: 100vh;
  flex-direction: column;
`


export const HeaderContainer = styled.header`
  display: flex;
  height: 8vh;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  

  img {
     position: absolute;
     margin-right: 85%;
  }
`

export const DataContainer = styled.section`
  display: flex;
  height: 12vh;
  margin: 10px;
  justify-content: space-between;

`

export const Data = styled.section`
  display: flex;
  width: 55vw;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  /* border: 1px solid black; */
  margin-bottom: 15px;
  
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      margin: -10px;
      padding: 10px;
     
  }
`

export const AdressContainer = styled.section`
   display: flex;
   height: 10vh;
   padding: 5px;
   padding-bottom: 10px;
   justify-content: space-between;
   background-color: #eeeeee;

   img {
       width: 24px;
       height: 24px;
   }
`

export const ServicesCart = styled.section`
    margin-top: 10px;
    width: 100vw;
    margin-bottom: auto;
    
    
`
export const Text = styled.p`
    text-align: center;
`

export const Pay = styled.p`
`

export const PricesCart = styled.section`
    margin: 10px;
    margin-bottom: auto;
    margin-top: 60px;
    p {
        text-align: end;
        
    }
`

export const SubTotal = styled.section`
    display: flex;
    justify-content: space-between;
`

export const PaymentMethods = styled.section`
    margin-bottom: auto;
    border-bottom: 1px solid black;
    width: 90vw;
    margin: auto;

    p {
        position: relative;
        top: 10px;
    }
`

export const CheckboxPayment = styled(RadioGroup)`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: auto;
    flex-grow: 1;
`

export const ContainerButton = styled.section`
    width: 90vw;
    border: 1px solid black;
    display: flex;
    margin: auto;
    margin-top: auto;
    justify-content: center;
    margin-bottom: 20px;
`