import { useState, useEffect } from 'react';
import { HomeSection, Greet, Intro, ScrollInvite } from './Home.elements';
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
            .typeString('&Agrave; toi qui lis ces mots,')
            .pauseFor(200)
            .typeString(' merci pour ta présence ici. <br />')
            .pauseFor(300)
            .typeString(' Bienvenue sur mon site personnel &#128522;')
            .start();
          }}
          options={{
            delay: 60,
            deleteSpeed: 30,
          }}
          />
        </Greet>
        { display &&
          <Intro>
            <h1>Moi c'est</h1>
            <h2>Kpakpo Akue</h2>
            <h3>développeur Web front-end.</h3>
            <p>Sur ce site, tu auras un aperçu de mon parcours et de mes réalisations.<br />
               Scrolles vers le bas pour en apprendre plus sur moi. Bonne visite !<br/>
            </p>
            <span>&#128521;</span>
            { visibility &&
              <ScrollInvite>
                <p><span>&#128071;</span></p>
              </ScrollInvite>
            }
          </Intro>
        }
      </HomeSection>
    </>

  );
}


export default Home;