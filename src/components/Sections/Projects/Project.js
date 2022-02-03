import { useState } from 'react';
import {
  ProjectTemplate,
  ProjectSmallTemplate,
  Infos,
  LinkContainer,
  SingleLink,
  ProjectName,
  ProjectDescription,
  ProjectTools,
  ImageContainer,
  ProjectImage,
  ProjectLinks,
  ProjectLink,
  ProjectMobileLinks,
  ProjectMobileLink
} from "./Projects.elements";

const Project = ({
  name,
  description,
  tools,
  image,
  linkName,
  source,
  repository
}) => {

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
              <ProjectLink href={repository} target="_blank">Dépôt Github</ProjectLink>
              <ProjectLink href={source} target="_blank">{linkName}</ProjectLink>
            </ProjectLinks>
          }
      </ImageContainer>
      <ProjectMobileLinks>
        <ProjectMobileLink href={repository} target="_blank">Dépôt Github</ProjectMobileLink>
        <ProjectMobileLink href={source} target="_blank">{linkName}</ProjectMobileLink>
      </ProjectMobileLinks>
    </ProjectTemplate>
  );
  }

export const ImagelessProject =({
  name,
  description,
  tools,
  repository
}) => {
  return (
    <ProjectSmallTemplate>
      <Infos>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTools>{tools}</ProjectTools>
      </Infos>
      <LinkContainer>
        <SingleLink href={repository} target="_blank">Dépôt Github</SingleLink>
      </LinkContainer>
    </ProjectSmallTemplate>
    )
}


export default Project;
