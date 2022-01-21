
import test from '../../../assets/test.jpg';
import test1 from '../../../assets/test1.jpg';
import { ProjectsSection, ProjectsContainer } from "./Projects.elements";
import Project from './Project';

const Projects = () => {

  return (
    <>
      <ProjectsSection id="projets">
        <p>Ci dessous un aperçu de mes réalisations</p>
        <ProjectsContainer>
          <Project 
            name="Creator'Z"
            description= "Site vitrine pour les artisans réalisé dans le cadre de notre fin de formation"
            tools="Réalisé avec : React, Redux, Axios"
            image={test}
          />
          <Project 
            name="Flag-memo"
            description= "Application de quiz sur les drapeaux"
            tools="Réalisé avec : React, Redux, Axios"
            image={test1}
          />
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
}


export default Projects;