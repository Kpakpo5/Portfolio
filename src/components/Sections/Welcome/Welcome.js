import { useState, useEffect } from 'react';
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';
import { HomeSection, Greeting, Intro, LinksContainer, SocialLink, CV} from './Welcome.components';
import Cv from '../../../assets/Cv_Kpakpo_Akue_alternance_CP.pdf';

const Home = () => {

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => 
      setDisplay(true), 3000);
  }, []);

  return (
    <>
      <HomeSection id="bienvenue">
        <Greeting>
          <p>Salut &#128075; <br/>Merci pour ta visite<br/>Bienvenue sur mon site</p>
        </Greeting>
        { display &&
          <Intro>
            <h1>Moi c'est</h1>
            <h2>Kpakpo AKUE</h2>
            <h3>futur chef de projet digital</h3>
            <p>Après m'être formé au développement Web, j'élargis actuellement mes compétences vers le Webdesign et le marketing digital.</p>
            <LinksContainer>
              <IconContext.Provider value={{style: { color: "black", fontSize: "60px", margin: "-6px"}}}>
                <SocialLink href="https://www.linkedin.com/in/kpakpo-akue/" target="_blank">
                  <TiSocialLinkedinCircular />
                </SocialLink>
                <SocialLink href="https://github.com/Kpakpo5" target="_blank">
                  <TiSocialGithubCircular />
                </SocialLink>
                <CV href={Cv} download rel="noopener noreferrer" target="_blank">CV</CV>
              </IconContext.Provider>
            </LinksContainer>
          </Intro>
          
        }
      </HomeSection>
    </>

  );
}


export default Home;