import styled from "styled-components"

export const FormContainer = styled.form`
   display: flex;
   height: 100%;
   width: 90%;
   flex-direction: column;
   justify-content: space-evenly;
   margin: 20px;

   input {
      width: 50%;
      display: flex;
   }

   button {
      background-color: #e8222e;
      color: black;
      border-radius: 2px;
   }
`