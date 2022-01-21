import { useState } from 'react';
import {
  ProjectTemplate,
  ProjectName,
  ProjectDescription,
  ProjectTools,
  ImageContainer,
  ProjectImage,
  ProjectLinks,
  ProjectLink
} from "./Projects.elements";

const Project = ({ name, description, tools, image }) => {

  const [display, setDisplay] = useState(false);

  const handleonMouseEnter = () => {
    setDisplay(true);
  };

  const handleonMouseLeave = () => {
    setDisplay(false);
  }

  return (
    <ProjectTemplate>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectTools>{tools}</ProjectTools>
      <ImageContainer onMouseEnter={handleonMouseEnter} onMouseLeave={handleonMouseLeave}>
      <ProjectImage src={image}/>
        { display &&
          <ProjectLinks>
            <ProjectLink></ProjectLink>
            <ProjectLink></ProjectLink>
          </ProjectLinks>
        }
        </ImageContainer>
    </ProjectTemplate>
  );
  }
export default Project;
