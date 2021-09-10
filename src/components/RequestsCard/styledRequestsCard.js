import styled from "styled-components"


export const RequestCard = styled.section`
   display: flex;
   border-radius: 8px;
   border: 1px solid #b8b8b8;
   margin: 10px;
   width: 90%;
   height: 15vh;
   justify-content: space-between;
   align-items: center;

   p {
    margin-bottom: -10px;
    margin: 5px;
    font-size: 14px;
   }
`

export const HistoryContainer = styled.div`
   display: flex;
   width: 60%;
   height: 100%;
   flex-direction: column;
   justify-content: center;
`

export const Restaurant = styled.p`
   color: #e8222e;
`

export const OrderDate = styled.p`
   font-size: 5px;
`

export const Total = styled.p`
   font-weight: bold;
`