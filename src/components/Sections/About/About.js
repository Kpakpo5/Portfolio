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

const About = () => {
  return (
    <>
      <AboutSection id="profil">
        <SectionTitle>Profil</SectionTitle>
        <AboutContent>
          <Story>
            <Picture>
              <img src={Me} alt="dessin" />
            </Picture>
            <Narrative>
              <p>
              &Agrave; la fin de mes études d'Histoire en 2016 , piqué par la curiosité , je décide (enfin!) de m'intéresser aux coulisses du Web après avoir l'avoir parcouru pendant des années. Les quelques recherches effectuées m'ont plongé et perdu dans l'immense diversité des langages, technologies et outils servant à la réalisation de sites internet. Ce fut ma première rencontre avec le développement Web.
              </p>
              <p>
                Ce n'est qu'en 2019 , de plus en plus attiré par la programmation, que j'ai écrit mes premières lignes de code et commencé à envisager une reconversion dans le domaine. J'ai par la suite eu la chance de suivre la formation de développeur Web à <PLink href="https://oclock.io/">O'clock</PLink> où j'ai acquis de solides bases , notamment en Javascript et PHP, pour finalement passer et obtenir le titre professionnel.
              </p>
              <p>
                Aujourd'hui je m'emploie à développer mes compétences et techniques via mes projets tout en continuant l'apprentissage d'outils de développement , notamment les technologies Front-End pour lesquelles j'ai un attrait particulier.
              </p>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
              <p>Ma ligne directrice est de m'appliquer à rendre mes réalisations intuitives tout en respectant les standards d'accessibilité , tout cela sur la base d'un code lisible.</p>
              <p>Voici la liste non exhaustive des langages et technologies que je sais mettre à profit :</p>
            </Vision>
            <IconContext.Provider value={{ style: {color: '#000', fontSize: '2.2rem', backgroundColor: '#fff', fill: 'black', stroke: 'black' }}}>
              <Techs>
                <Tech>
                  <TechIcon><SiStyledcomponents /></TechIcon>
                  <TechName>Styled Components</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiPhp style={{fontSize: '4rem'}}/></TechIcon>
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
                  <TechIcon><SiMysql style={{fontSize: '4rem'}}/></TechIcon>
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