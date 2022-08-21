import styled, { createGlobalStyle } from "styled-components";
import withReveal from "react-reveal/withReveal";
import Zoom from 'react-reveal/Zoom';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }


  body {
    color: #fff;
    background: #0e0e0e;
  }
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Roboto', sans-serif;
    /* color: #fff;
    background: #0e0e0e; */
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  `;

export const SectionTitle = withReveal(styled.h2`
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
    background: linear-gradient(to right, #0E0E0E, white);
  }
  
  &:after {
    content: "";
    flex: 1;
    background: linear-gradient(to left, #0E0E0E, white);
	}

`, <Zoom fraction={1}/>);





export default GlobalStyle;