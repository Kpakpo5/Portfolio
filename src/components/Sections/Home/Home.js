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
      setDisplay(true), 8500)
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
            .typeString("&#192; toi qui lis ces mots,")
            .pauseFor(300)
            .typeString(" quelle que soit la raison de ta présence,")
            .pauseFor(300)
            .typeString(" bienvenue sur mon site &#128522;")
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
            <p>Si mon nom te fait trébucher, n'aies crainte, je suis de tout coeur avec toi.<br />
               La suite sera à ton aise, et je l'espère, t'en apprendra plus sur moi.<br/>
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