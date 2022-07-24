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
                Pendant mes études universitaires en Histoire, j'étais à mille lieues de m'imaginer écrire des lignes de code quelques années plus tard. C'est lors de recherches internet effectuées dans le cadre de mon mémoire que j'eus un aperçu de la réalisation d'une page Web; cherchant à améliorer l'affichage d'un site, j'ouvris par hasard les outils de développement du navigateur, dévoilant le code Html et Css de la page. D'un naturel curieux, je cherchai evidemment à en savoir plus. Au cours des mois qui suivirent et au fil de mes découvertes, la curiosité fit place à la fascination et celle-ci déboucha sur une passion grandissante pour le développement Web.
              </Phrase><br />
              <Phrase>
                Après un apprentissage en autodidacte plus ou moins laborieux, j'entamai un processus de reconversion un peu plus cadré qui m'amena notamment à effectuer une formation de développeur Web à <PLink href="https://oclock.io/">O'clock</PLink>; ce qui me permit d'acquérir de solides bases techniques et pratiques en Javascript et PHP, pour ensuite passer et obtenir le titre professionnel.
              </Phrase><br />
              <Phrase>
                Aujourd'hui je poursuis le développement de mes compétences et techniques via mes projets, en particulier sur les technologies appartenant à l'écosystème Javascript, et je m'emploie aussi à affiner ma sensibilité design.
              </Phrase>
            </Narrative>
          </Story>
          <Skills>
            <Vision>
              <Phrase>Avec pour ambition de devenir un développeur accompli à moyen terme, je m'informe et reste ouvert à l'apprentissage de nouvelles technologies que j'ajoute au fur et à mesure à mon arc de compétences.</Phrase>
              <Phrase>Ci-dessous une liste réduite des langages et technologies dont je me suis déjà servi :</Phrase>
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