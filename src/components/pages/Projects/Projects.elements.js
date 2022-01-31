import styled, {keyframes} from "styled-components";

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
  /* width: 80%; */
  max-width: 800px;

  & > li {
    margin-bottom: 33px;
  }

  @media screen and (max-width: 768px) {
    width: 99%;
  }
`;

export const ProjectTemplate = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectName = styled.h3`
  font-size: 20px;
  color: #FFCC45;
`;

export const ProjectDescription = styled.p`
  margin-bottom: 5px;
`;

export const ProjectTools = styled.small`
  //
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
