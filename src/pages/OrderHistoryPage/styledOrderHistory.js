import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  display: flex;
  height: 8vh;
  border: 1px solid #eeee;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;

  img {
     position: absolute;
     margin-right: 82%;
     margin-left: 65%;
  }

  button {
    width: 24px;
    height: 24px;
    position: absolute;
    margin-right: 82%;
  }
`

export const DataContainer = styled.section`
  display: flex;
  height: 12vh;
  margin: 10px;
  justify-content: space-between;

  img {
      width: 24px;
      height: 24px;
  }
`

export const Data = styled.section`
  display: flex;
  width: 40vw;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  
  p {
      font-size: 14px;
      margin: -10px;
      padding: 10px;
      font-weight: bold;
  }
`

export const AdressContainer = styled.section`
   display: flex;
   height: 10vh;
   padding: 10px;
   justify-content: space-between;
   background-color: #eeeeee;

   img {
       width: 24px;
       height: 24px;
   }
`

export const Adress = styled.section`
   display: flex;
   width: 80%;
   height: 100%;
   flex-direction: column;

   p {
       font-size: 14px;
       margin-bottom: -5px;
   }
`

export const RegisteredAdress = styled.p`
   color: #b8b8b8;
`

export const RequestsContainer = styled.section`
   display: flex;
   height: 5vh;
   border-bottom: 1px solid black;
   padding: 10px;

   p {
       font-size: 14px;
   }

   hr {
       width: 90%;
       margin-bottom: 50px;
   }
`

export const RequestCard = styled.section`
   display: flex;
   border-radius: 8px;
   border: 1px solid #b8b8b8;
   margin: 10px;
   width: 90%;
   height: 16vh;
   justify-content: space-between;
   align-items: center;
   

   p {
   margin-bottom: -10px;
   margin: 5px;
   font-size: 14px;
   }
`

export const FooterContainer = styled.footer`
  display: flex;
  height: 8vh;
  border: 1px solid #eeee;
  margin-top: auto;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`