import { useState, useEffect } from 'react';
import { HomeSection, Greet, Intro, ScrollInvitation } from './Home.elements';
import Typewriter from "typewriter-effect";

const Home = () => {

  const [display, setDisplay] = useState(false);

  const [visibility, setVisibility] = useState(true);

  const onScroll = () => {
    setVisibility(false);
  }

  useEffect(() => {
    setTimeout(() => 
      setDisplay(true), 8200)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll",onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    }, []);

  return (
    <>
      <HomeSection id="bienvenue">
        <Greet>
          <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .typeString('Toi,')
            .pauseFor(400)
            .typeString(' qui lis ces mots,')
            .pauseFor(400)
            .typeString(' merci pour ta présence ici. <br />')
            .pauseFor(400)
            .typeString(' Bienvenue sur mon site personnel :)')
            .start();
          }}
          options={{
            delay: 60,
            deleteSpeed: 30,
            wrapperClassName:"wrapper"
          }}
          />
        </Greet>
        { display &&
          <Intro>
            <h1>Moi c'est</h1>
            <h2>Kpakpo AKUE</h2>
            <h3>développeur Web front-end.</h3>
            <p>Ce site vise à mettre en lumière mon parcours et mes réalisations.<br />
              Scrolles vers le bas pour en apprendre plus sur moi. Bonne visite !<br/>
            </p>
            <span>&#128521;</span>
            { visibility &&
              <ScrollInvitation>
                <p><span>&#128071;</span></p>
              </ScrollInvitation>
            }
          </Intro>
        }
      </HomeSection>
    </>

  );
}


export default Home;