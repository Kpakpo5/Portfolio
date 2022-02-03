
import creatorz from '../../../assets/creatorz.png';
import flag from '../../../assets/flag-memo.png';
import { SectionTitle } from "../../../globalStyles";
import { ProjectsSection, ProjectsContainer } from "./Projects.elements";
import Project, {ImagelessProject} from './Project';

const Projects = () => {

  return (
    <>
      <ProjectsSection id="projets">
        <SectionTitle>Portfolio</SectionTitle>
        <p>Ci-dessous mes principales réalisations .</p>
        <ProjectsContainer>
          <Project 
            name="Creator'Z"
            description= "Site vitrine pour les artisans. Partie Front réalisé avec une autre étudiante dans le cadre de notre fin de formation ."
            tools="Réalisé avec : React, Redux, Axios ."
            image={creatorz}
            linkName= "Démo Youtube"
            source=" https://youtu.be/TIXGltXg4yY?t=1524"
            repository="https://github.com/Kpakpo5/Creatorz"
          />
          <Project 
            name="Flag-memo"
            description= "Application de quiz sur les drapeaux ."
            tools="Réalisé avec : React, Redux, Axios ."
            image={flag}
            linkName= "Site Web"
            source="https://flag-memo.netlify.app/"
            repository="https://github.com/Kpakpo5/Flag-Memo"
          />
          <ImagelessProject 
            name="Site personnel"
            description= "Le site sur lequel vous vous trouvez ."
            tools="Réalisé avec : React, styled-components ."
            repository="https://github.com/Kpakpo5/Portfolio"
          />
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
}


export default Projects;