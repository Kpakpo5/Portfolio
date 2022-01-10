import { HomeSection, Greet, Intro } from './Home.elements';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <HomeSection id="accueil">
        <Greet>
          <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .typeString("Salut à toi jeune entrepreneur !")
            .pauseFor(600)
            .deleteChars(20)
            .typeString("cher visiteur ! <br /> Bienvenue sur mon site &#128522;")
            .start();
          }}
          options={{
            delay: 60,
            deleteSpeed: 30,
          }}
          />
        </Greet>
        <Intro>
          <h1>Moi c'est</h1>
          <h2>Kpakpo Akue.</h2>
          <h3>Je suis développeur Web.</h3>
          <p>" First do it, then do it right, then do it better "<br /><span>Addy Osmani</span></p>
        </Intro>
      </HomeSection>
    </>

  );
}


export default Home;