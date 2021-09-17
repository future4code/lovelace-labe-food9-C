import React from "react"
import { RequestCard, HistoryContainer, Restaurant, OrderDate, Total } from "./styledRequestsCard"


const RequestsCard = () => {
    return (
        <RequestCard>
            <HistoryContainer>
                <Restaurant>Bullguer Vila Madalena</Restaurant>
                <OrderDate>39 de outubro 2019</OrderDate>
                <Total>SUBTOTAL R$89,00</Total>
            </HistoryContainer>
        </RequestCard>
    )
}

export default RequestsCard