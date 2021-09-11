import React from 'react'
import { useHistory } from 'react-router'
import avatar from "../../assets/avatar.svg"
import homepage from "../../assets/homepage.svg"
import shopping from "../../assets/shopping.svg"
import { goToHome, goToOrderHistoryPage } from '../../routes/coordinator'
import { FooterContainer } from './FooterStyled'

const Footer = () =>{
    const history = useHistory()
    return (
                <FooterContainer>
                <img src={homepage} alt={"Ícone da homepage"} onClick={() => goToHome(history)}  />
                <img src={shopping} alt={"Ícone de shopping-cart"} />
                <img src={avatar} alt={"Ícone de avatar"}  onClick={() => goToOrderHistoryPage(history)}/>
                </FooterContainer>
    )
}
export default Footer