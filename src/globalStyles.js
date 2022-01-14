import styled, {createGlobalStyle, keyframes} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Roboto', sans-serif;
    color: white;
    background: #000;
  }
`;


const animateTitle = keyframes`
  0% {
    width: 0;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  `;

export const SectionTitle = styled.h2`
  color: transparent;
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 3rem;

  
  &:before {
    background: repeat scroll 0 0 transparent;
    top: 0;
    content: "";
    color : black;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    background: white;
    border-radius: 5px;
    animation-name: ${animateTitle};
    animation-duration: 1s;
    animation-timing-function: ease;
  }
`;





export default GlobalStyle;