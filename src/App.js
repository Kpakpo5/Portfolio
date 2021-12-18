import GlobalStyle from './globalStyles';
import { Navbar } from './components';
import Sections from './components/pages/Sections';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';

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
