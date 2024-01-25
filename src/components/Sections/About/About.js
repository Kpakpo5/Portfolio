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
               Bien parti pour travailler dans la fonction publique après mes études d'Histoire, mon intérêt pour l'univers du digital m'a conduit à effectuer une reconversion dans le domaine.
              </Paragraph><br />
              <Paragraph>
                Après une formation de développeur Web et l'obtention du titre professionnel, mes projets personnels m'ont permis de gagner en autonomie et d'améliorer mes techniques.
              </Paragraph><br />
              <Paragraph>
                Mes principales compétences actuelles sont basées sur Javascript ainsi que les frameworks et bibliothèques en lien avec ce langage, notamment React.Js et ses outils complémentaires.
              </Paragraph>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
              <Paragraph>D'un naturel curieux, et conscient de l'importance de la formation continue, j'effectue une veille technologique permanente, particulièrement dans le domaine de la conception d'applications Web ainsi que le Webmarketing.</Paragraph>
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