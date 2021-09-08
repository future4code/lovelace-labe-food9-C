import Styled from 'styled-components';

export const QuantityContainer = Styled.div`
width:80vw;
height:23vh;
background-color: #fff;
`
export const TitleOfTheContainer = Styled.h4`
  font-family: Roboto;
  font-size: 3vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  `

export const SelectInputOfPrductQuantity = Styled.select`
  width:80vw;
  display:block;
  padding: 1rem;
  border-radius: 4px;
  border: solid 1px var(--greyish, gray);
  background-color:white;

` 
export const ElemntsOFtheInput =Styled.option`
  font-family: Roboto;
  font-size: 1rem;
  color: var(--black);`

export const ButtonToAddIntoCart = Styled.button`
  font-family: Roboto;
  font-size: 1rem;
  letter-spacing: -0.39px;
  padding-right:9vw;
  padding-top:5vh;
  position:fixed;
  right:0;
  color: #4f81a8;
  background:none;
  border:none;`