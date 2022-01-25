import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  & > .react-reveal {
    width: 100%;
  }

  & > p {
    margin-bottom: 2rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;

  & > div {
    margin-bottom: 33px;
  }
`;

export const ProjectTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectName = styled.h3`
  color: #FFCC45;
`;

export const ProjectDescription = styled.p`
    //
`;

export const ProjectTools = styled.small`
  //
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectLinks = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  left: 5%;
  height: 90%;
  width: 90%;
  background-color: rgba(255,255,255,0.9);
`;

export const ProjectLink = styled.a`
  //
`;
