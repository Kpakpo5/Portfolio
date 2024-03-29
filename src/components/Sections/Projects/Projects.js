
import creatorz from '../../../assets/creatorz.png';
import flag from '../../../assets/flag-memo.png';
import portfolio from '../../../assets/portfolio-bg.png';
import movies from '../../../assets/movies-bg.png';
import { SectionTitle } from "../../../globalStyles";
import { ProjectsSection, ProjectsContainer, ProjectIntro } from "./Project.components";
import Project from './Project';

const Projects = () => {

  return (
    <>
      <ProjectsSection id="projets">
        <SectionTitle>Projets</SectionTitle>
        <ProjectIntro>Quelques réalisations notables </ProjectIntro>
        <ProjectsContainer>
          <Project 
            name="Creator'Z"
            description= "Site vitrine pour artisans"
            tools="React, Redux, Axios"
            image={creatorz}
            linkName= "Démo live"
            context="Réalisé en équipe avec des étudiants O'Clock, ce projet de fin de formation est venu sanctionner plusieurs mois d'apprentissage intense du développement Web ."
            execution="Le développement, programmé sur un mois, m'a non seulement permis de mettre en pratique les connaissances acquises en formation dans le cadre d'un projet pertinent, mais aussi d'améliorer mes compétences en matière de comnunication et de travail en équipe ."
            source=" https://youtu.be/TIXGltXg4yY?t=1524"
            repository="https://github.com/Kpakpo5/Creatorz"
          />
          <Project 
            name="Flag-memo"
            description= "Quiz sur les drapeaux"
            tools="React, Redux, Axios"
            image={flag}
            linkName= "Site Web"
            context="Premier projet post-formation grâce auquel j'ai pu retravailler les concepts que je connaissais déjà sur React et Redux en toute autonomie. "
            execution="Plus laborieux que prévu, ce projet a nettement amélioré mes compétences de développeur, m'a permis de tester mes capacités à mener un projet de bout en bout et j'ai pu m'approprier bon nombre de principes fondamentaux en développement Front."
            source="https://flag-memo.netlify.app/"
            repository="https://github.com/Kpakpo5/Flag-Memo"
          />
          <Project 
            name="Portfolio"
            description= "site personnel"
            tools="React, styled-components"
            image={portfolio}
            context="Je souhaitais augmenter ma visibilité en réalisant un site où je mettrai en valeur mon parcours. &Agrave; l'époque, j'envisageais aussi de tester le concept du CSS-in-JS. Faire d'une pierre deux coups, voilà l'idée de départ."
            execution=" Assez challengeant, aussi  bien côté développement que design, ce projet m'a beaucoup fait progresser en matière d'organisation de travail et a énormément boosté ma créativité."
            repository="https://github.com/Kpakpo5/Portfolio"
          />
          <Project 
            name="Redux-Movies"
            description= "App démo Redux Toolkit"
            tools="React, Tailwind.css, Redux Toolkit"
            image={movies}
            context="Le but de ce projet était de mettre à jour mes compétences sur Redux, l'essentiel de la logique de l'application devait ainsi être géré par l'outil de gestion d'état."
            execution="J'ai pris du plaisir à réaliser cette petite application qui m'a renoué avec certains procédés de Redux et m'en a fait découvrir d'autres, plus pratiques, avec Redux Toolkit."
            repository="https://github.com/Kpakpo5/Redux-Movies"
          />
          
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
}


export default Projects;