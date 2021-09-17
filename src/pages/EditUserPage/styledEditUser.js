import styled from "styled-components"


export const ContainerForm = styled.form`
   display: flex;
   height: 45%;
   width: 90%;
   justify-content: space-evenly;
   flex-direction: column;
   margin-left: 20px;

   input {
       width: 45%;
       margin-left: 20px;
   }
   
   button {
      background-color: #e8222e;
      color: black;
      width: 90%;
      border-radius: 2px;
      margin-left: 20px;
   }
`