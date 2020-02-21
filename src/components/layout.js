import React from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  body, html {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }

`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  )
}

export default Layout
