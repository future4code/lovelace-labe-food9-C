import React from "react";
import { ContainerFather, StyleOfThePopUpBox,CloseIcon} from "./PopUpStyled";
 
const Popup = (props) => {
  return (
    <ContainerFather>
      <StyleOfThePopUpBox>
        <CloseIcon onClick={props.closeTheQuantityBox}>x</CloseIcon>
        {props.content}
      </StyleOfThePopUpBox>
    </ContainerFather>
  );
};
 
export default Popup;