import { IconContext } from 'react-icons/lib';
import { SiPhp, SiStyledcomponents, SiNextdotjs, SiReact, SiJavascript, SiRedux, SiMysql, SiTailwindcss } from 'react-icons/si';
import { SectionTitle } from "../../../globalStyles";
import {
  AboutSection,
  AboutContent,
  Story,
  Picture,
  Paragraph,
  Narrative,
  Skills,
  PLink,
  TechsIntro,
  Techs,
  Tech,
  TechIcon,
  TechName,
  Vision
} from "./About.components";
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
              <Paragraph>
               Initialement formé en Histoire, je me suis pris de passion pour le développement informatique, et c'est naturellement que j'ai décidé d'en faire mon métier en effectuant une reconversion dans le domaine.
              </Paragraph><br />
              <Paragraph>
                Après une formation intensive de développeur Web à <PLink href="https://oclock.io/">O'clock</PLink>, validée par l'obtention du titre professionnel, j'ai poursuivi ma montée en compétences via des side-projects qui m'ont permis de gagner en autonomie et d'améliorer mes techniques.
              </Paragraph><br />
              <Paragraph>
                Mes compétences actuelles sont basées sur Javascript ainsi que les frameworks et bibliothèques en lien avec ce langage, notamment React.Js et ses outils complémentaires.
              </Paragraph>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
              <Paragraph>Totalement ouvert à l'apprentissage de nouveaux langages et outils pertinents, j'effectue une veille technologique permanente afin de mettre régulièrement à jour mes connaissances .</Paragraph>
            </Vision>
            <TechsIntro>Un aperçu de ma stack technique</TechsIntro>
            <IconContext.Provider value={{ style: {color: '#000', fontSize: '2.2rem', backgroundColor: '#fff', fill: 'black', stroke: 'black' }}}>
              <Techs>
                <Tech>
                  <TechIcon><SiJavascript /></TechIcon>
                  <TechName>Javascript</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiReact /></TechIcon>
                  <TechName>React</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiRedux /></TechIcon>
                  <TechName>Redux</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiStyledcomponents /></TechIcon>
                  <TechName>Styled Components</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiTailwindcss /></TechIcon>
                  <TechName>TailwindCss</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiNextdotjs /></TechIcon>
                  <TechName>Next.js</TechName>
                </Tech>
                <Tech>
                  <TechIcon><SiPhp style={{fontSize: '4rem'}}/></TechIcon>
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