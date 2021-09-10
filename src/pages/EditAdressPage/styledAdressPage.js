import styled from "styled-components"

export const FormContainer = styled.form`
   display: flex;
   height: 85%;
   /* border: 1px solid black; */
   width: 90%;
   flex-direction: column;
   justify-content: space-evenly;
   margin: 15px;

   input {
      width: 50%;
      
   }

   button {
      background-color: #e8222e;
      color: black;
      border-radius: 2px;
   }
`