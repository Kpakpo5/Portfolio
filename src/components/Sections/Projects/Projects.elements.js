import styled, {keyframes} from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';

const Spread = keyframes`
  0% {
    width: 0;
    left: 50%;
  }
  100% {
    width: 94%;
    left: 3%;
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .react-reveal {
    width: 100%;
  }

  & > .react-reveal > p {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const ProjectsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 98%;
  }

  & > .react-reveal {
    margin-bottom: 88px;

    @media screen and (max-width: 768px) {
    margin-bottom: 55px;
  }
  }
`;

export const ProjectIntro = withReveal(styled.p`
  //
`, <Fade left/>);

export const ProjectTemplate = withReveal(styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 44px;
  }

`, <Fade bottom/>);


export const ProjectName = styled.h3`
  font-size: 20px;
  color: #FFCC45;
  text-align: center;
  margin-bottom: 8px;
`;



export const ProjectLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  background: transparent;
  border: 3px solid black;
  
  &:hover{
    color: white;
    background: black;
  }
`;

export const OpenModalButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  background: transparent;
  border: 3px solid black;
  
  &:hover{
    color: white;
    background: black;
  }
`;



export const ProjectMobileLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255 ,255 ,255, 0.1);
  font-size : 0.9rem;
  font-weight: bold;
  width: 49.5%;
  height: 100%;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(255 ,255 ,255, 0.4);
  }
`;

export const ProjectMobileLinks = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  bottom: -44px;
  left: 0;
  width: 100%;
  height: 40px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MobileOpenModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255 ,255 ,255, 0.1);
  font-size : 0.9rem;
  font-weight: bold;
  width: 49.5%;
  height: 100%;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(255 ,255 ,255, 0.4);
  }
`


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 44vh;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 44vw;
  }
`;

export const ProjectImage = styled.img`
  border: 1px solid grey;
  border-radius : 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius : 3px;
  position: absolute;
  top: 5%;
  left: 3%;
  height: 90%;
  width: 94%;
  background-color: rgba(255,255,255,.95);
  animation: ${Spread};
  animation-duration: .5s;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


