import { IconContext } from 'react-icons/lib';
import { SiPhp, SiStyledcomponents, SiNextdotjs, SiReact, SiJavascript, SiRedux, SiMysql } from 'react-icons/si';
import { SectionTitle } from "../../../globalStyles";
import {
  AboutSection,
  AboutContent,
  Story,
  Picture,
  Narrative,
  Skills,
  PLink,
  Techs,
  Tech,
  TechIcon,
  TechName,
  Vision

} from "./About.elements";
import Me from '../../../assets/me.png'
import Zoom from 'react-reveal/Zoom';


const About = () => {
  return (
    <>
      <AboutSection id="profil">
        <Zoom bottom>
          <SectionTitle>Profil</SectionTitle>
        </Zoom>
        <AboutContent>
          <Story>
            <Picture>
              <img src={Me} alt="dessin" />
            </Picture>
            <Narrative>
              <p>
                Ma première rencontre avec le développement web a eu lieu par curiosité en 2016 à la fin de mes études d'Histoire. Voulant avoir un aperçu des coulisses de tout ce que je voyais sur le Web, j'ai fait quelques recherches qui m'ont fait prendre conscience de l'immense diversité de langages et outils servant à réaliser des sites internet.
              </p>
              <p>
                Mais ce n'est qu'en 2019 que j'ai commencé à envisager une reconversion dans le domaine et que j'ai écrit mes premières lignes de code. J'ai ensuite eu la chance de suivre la formation de développeur Web à <PLink href="https://oclock.io/">O'clock</PLink> où j'ai acquis des bases solides notamment en Javascript et PHP.
              </p>
              <p>
                Aujourd'hui je m'applique à développer mes compétences et techniques via mes projets tout en continuant l'apprentissage d'outils de développement , notamment les technologies Front-End pour lesquelles j'ai un attrait particulier.
              </p>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
            <p>Voici une liste non exhaustive des langages et technologies que j'utilise :</p>
            </Vision>
            <IconContext.Provider value={{ style: {color: '#000', fontSize: '3rem', backgroundColor: '#fff', fill: 'black', stroke: 'black' }}}>
              <Techs>
                <Tech>
                  <TechIcon><SiStyledcomponents /></TechIcon>
                  <TechName>Styled Components</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiPhp /></TechIcon>
                  <TechName>PHP</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiNextdotjs /></TechIcon>
                  <TechName>Next.js</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiReact /></TechIcon>
                  <TechName>React</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiJavascript /></TechIcon>
                  <TechName>Javascript</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiRedux /></TechIcon>
                  <TechName>Redux</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiMysql /></TechIcon>
                  <TechName>MySQL</TechName>
                </Tech>
              </Techs>
            </IconContext.Provider>
          </Skills>
        </AboutContent>
      </AboutSection>
    </>
  );
}


export default About;