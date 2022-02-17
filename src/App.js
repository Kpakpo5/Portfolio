import GlobalStyle from './globalStyles';
import Navbar  from './components/Navbar/Navbar';
import Sections from './components/Sections/Sections';
import Home from './components/Sections/Home/Home';
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
        <Home />
        <About />
        <Projects />
        <Contact />
      </Sections>
      <Footer />
    </>
  );
}

export default App;
