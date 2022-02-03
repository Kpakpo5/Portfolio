import styled, {keyframes} from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';

const Spread = keyframes`
  0% {
    width: 0;
    left: 50%;
  }
  100% {
    width: 90%;
    left: 5%;
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .react-reveal {
    width: 100%;
  }

  & > p {
    margin-bottom: 2rem;
  }
`;

export const ProjectsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    width: 99%;
  }

  & > .react-reveal {
    margin-bottom: 88px;

    @media screen and (max-width: 768px) {
    margin-bottom: 55px;
  }
  }
`;

export const ProjectTemplate = withReveal(styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 44px;
  }
`, <Fade bottom/>);

export const ProjectSmallTemplate = withReveal(styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    border: none;
    flex-direction: column;
    align-items: start;
  }
`, <Fade bottom/>);

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & > * {
    width: 100%;
  }

`;

export const LinkContainer = styled.div`
  width: 30%;
  background: transparent;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 5px;
  }
`;

export const SingleLink = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255 ,255 ,255, 0.09);
  font-size : 0.9rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    width: 44vw;
    margin-top: 5px;
  }

  &:hover {
    background-color: rgba(255 ,255 ,255, 0.4);
  }
`

export const ProjectName = styled.h3`
  font-size: 20px;
  color: #FFCC45;
`;

export const ProjectMobileLinks = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
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

export const ProjectMobileLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255 ,255 ,255, 0.09);
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

export const ProjectDescription = styled.p`
  margin-bottom: 5px;
  color: #bfbfbf;
`;

export const ProjectTools = styled.small`
  letter-spacing: .05rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 44vh;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 50vw;
  }
`;

export const ProjectImage = styled.img`
  border: 1px solid grey;
  border-radius : 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectLinks = styled.div`
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
