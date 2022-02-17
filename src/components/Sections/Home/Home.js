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
      setDisplay(true), 8250)
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
            .typeString("Salut à toi, Bretagne, ô pays que")
            .pauseFor(600)
            .deleteChars(22)
            .typeString(" qui lis ces mots ! <br /> Bienvenue sur mon site &#128522;")
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
            <h2>Kpakpo Akue.</h2>
            <h3>Je suis développeur Web.</h3>
            <p title="citation">" First do it, then do it right, then do it better "<br /><span>Addy Osmani</span></p>
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