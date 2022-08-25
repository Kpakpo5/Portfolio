import { IconContext } from 'react-icons/lib';
import { SiPhp, SiStyledcomponents, SiNextdotjs, SiReact, SiJavascript, SiRedux, SiMysql, SiTailwindcss } from 'react-icons/si';
import { SectionTitle } from "../../../globalStyles";
import {
  AboutSection,
  AboutContent,
  Story,
  Picture,
  Phrase,
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
              <Phrase>
               &Agrave; mille lieues, à l'époque, de m'imaginer envisager sérieusement une reconversion dans le domaine, c'est à la fin de mes études d'Histoire qu'eût lieu ma première rencontre avec le développement Web. Cherchant un moyen d'améliorer l'affichage d'une page Web, je dévoilai son code Html et Css en ouvrant au hasard les outils de développement du navigateur. Au cours des mois qui suivirent et au fil de mes recherches sur le sujet, la curiosité suscitée par ma découverte se mua en un intérêt certain qui, à son tour, déboucha sur une fascination grandissante, portant au passage un sérieux coup à mon projet professionnel en cours.
              </Phrase><br />
              <Phrase>
                Après un apprentissage en autodidacte plus ou moins laborieux dont je vous passe les détails, je décidai de me jeter à l'eau en entamant un processus de reconversion un peu plus encadré, qui m'amena notamment à effectuer une formation de développeur Web à <PLink href="https://oclock.io/">O'clock</PLink>. Cela me permit d'acquérir de solides bases en Javascript ( avec un apprentissage plus poussé du framework React ) et Php, que je validai ensuite en obtenant le titre professionnel.
              </Phrase><br />
              <Phrase>
                Aujourd'hui je continue de grandir en développant mes compétences techniques via mes projets, en particulier sur les technologies appartenant à l'univers Javascript, avec un attrait affiché pour l'écosystème React.
              </Phrase>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
              <Phrase>Avec l'ambition de devenir un développeur totalement accompli à moyen terme, je m'informe et reste ouvert à l'apprentissage de nouvelles technologies pertinentes que je m'emploie à ajouter au fur et à mesure à mon arc de compétences.</Phrase>
              <Phrase>Ci-dessous un aperçu des langages et outils avec lesquels je travaille :</Phrase>
            </Vision>
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