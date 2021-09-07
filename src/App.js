import React from "react"
import Router from "./routes/Router"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
  }
`


const App = () => {
  return (
    <div>
      <GlobalStyle />
       <Router />
    </div>
  )
}

export default App