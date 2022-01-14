import {
  AboutSection,
  AboutTitle,
  AboutContent,
  Story,
  Picture,
  Narrative,
  Skills
} from "./About.elements";
import Me from '../../../assets/me.png'
import Zoom from 'react-reveal/Zoom';


const About = () => {
  return (
    <>
      <AboutSection id="profil">
        <Zoom bottom>
          <AboutTitle>Projets</AboutTitle>
        </Zoom>
        <AboutContent>
          <Story>
            <Picture>
              <img src={Me} alt="dessin" />
            </Picture>
            <Narrative>
              <p>
                Ma première rencontre avec le développement web a eu lieu par curiosité en 2016 à la fin de mes études d'Histoire. Voulant avoir un aperçu des coulisses de tout ce que je voyais sur le Web, j'ai fait quelques recherches qui m'ont fait prendre conscience de la diversité des langages et technologies servant à réaliser des sites internet.
              </p>
              <p>
                Mais ce n'est qu'en 2019 que j'ai commencé à envisager une reconversion dans le domaine et que j'ai écrit mes premières lignes de code. J'ai ensuite eu la chance de suivre la formation de développeur Web à Oclock où j'ai acquis des bases solides notamment en Javascript et PHP.
              </p>
              <p>
                Aujourd'hui je m'efforce à accroître mes compétences et techniques via mes projets et je continue l'apprentissage d'outils de développemnt notamment les technologies Front-End pour lesquelles j'ai un attrait particulier.
              </p>
            </Narrative>
          </Story>
          <Skills>

          </Skills>
        </AboutContent>
      </AboutSection>
    </>
  );
}


export default About;