import { useState, useEffect } from 'react';
import { HomeSection, Greet, Intro, ScrollInvitation } from './Welcome.components';
import Typewriter from "typewriter-effect";

const Home = () => {

  const [display, setDisplay] = useState(false);

  const [visibility, setVisibility] = useState(true);

  const onScroll = () => {
    setVisibility(false);
  }

  useEffect(() => {
    setTimeout(() => 
      setDisplay(true), 7900)
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
            .typeString('Vous')
            .pauseFor(400)
            .typeString(' qui lisez ces mots <br />')
            .pauseFor(400)
            .typeString(' Merci pour votre présence ici <br />')
            .pauseFor(400)
            .typeString(' Bienvenue sur mon site !')
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
            <h3>Développeur junior</h3>
            <p>Je vous invite à scroller pour en apprendre plus sur moi.<br />
              Bonne visite et bonne lecture!<br/>
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