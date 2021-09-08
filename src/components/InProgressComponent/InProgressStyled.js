import Styled from 'styled-components';

export const MainContainer = Styled.div`
  height:17vh;
  background-color: #e8222e;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  position: fixed;
  bottom: 0;

`
export const ImgContainer = Styled.div`
padding-left:20px;
width:2vw;`

export const InProgressImg = Styled.img`
  object-fit: contain;
`

export const ContainerOfTheProgressInfo= Styled.div`
width:50vw;
margin-right:110px;
display:flex;
flex-direction:column;
text-align:left;
`

export const TitleOfTheConatiner = Styled.span`
  font-family: Montserrat;
  font-size: 3vh;
  /* font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal; */
  letter-spacing: -0.39px;
  color: #fff;
`

export const RestaurantName = Styled.span`
  font-family: Montserrat;
  font-size: 3vh;
  /* font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal; */
  letter-spacing: -0.39px;
  color: var(--black);
`

export const SubTottalOrMissingTime = Styled.span`
  font-family: Montserrat;
  font-size: 3vh;
  font-weight: bold;
   /* font-stretch: normal;
  font-style: normal;
  line-height: normal; */
  letter-spacing: -0.39px;
  color: var(--black);`
