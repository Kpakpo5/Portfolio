import GlobalStyle from './globalStyles';
import Navbar  from './components/Navbar/Navbar';
import Sections from './components/Sections/Sections';
import Intro from './components/Sections/Welcome/Welcome';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sections>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </Sections>
      <Footer />
    </>
  );
}

export default App;
