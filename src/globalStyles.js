import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Roboto', sans-serif;
    color: #b3b3b3;
    background: #000;
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  `;

export const SectionTitle = styled.h2`
  display: flex;
  color: black;
  background: white;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  margin-bottom: 55px;
  align-self: center;
  
  &:before {
    content: "";
    flex: 1;
    background: linear-gradient(to right, black, white);
  }
  
  &:after {
    content: "";
    flex: 1;
    background: linear-gradient(to left, black, white);
	}

`;





export default GlobalStyle;