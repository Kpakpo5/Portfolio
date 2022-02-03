import GlobalStyle from './globalStyles';
import { Navbar } from './components';
import Sections from './components/Sections/Sections';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sections>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Sections>
    </>
  );
}

export default App;
