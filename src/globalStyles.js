import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Roboto', sans-serif;
    background: #000;
  }
`;

export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
`;



export default GlobalStyle;