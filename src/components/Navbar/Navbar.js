import { useState, useEffect, createContext } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../assets/logo.png';
import Fade from 'react-reveal/Fade';
import NavLink from './NavLink';
import { Cv } from '../Sections/Contact/Contact.components';
import CV from '../../assets/Cv_Kpakpo_Akue_alternance_CP.pdf';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MenuIcon,
  NavMenu,
  NavItem,
  SocialSection,
  SocialLink
} from './Navbar.components';

export const NavContext = createContext();

const navLinks = [
  {navLinkId: 'bienvenue', text: 'Bienvenue', path: '#bienvenue'},
  {navLinkId: 'profil', text:'Profil', path: '#profil'},
  {navLinkId: 'projets', text:'Projets', path: '#projets'},
  {navLinkId: 'contact', text:'Contact', path: '#contact'}
]

const Navbar = () => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  const handleClick = () => setIsOpen(!isOpen);

  let prevScrollPos = window.scrollY;
  const handleScroll = () => {
    let currentScrollPos = window.scrollY;
    if(prevScrollPos < currentScrollPos) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
  })

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
    <IconContext.Provider value={{ color: 'black' }}>
      <NavContext.Provider value={activeNavLinkId}>
        <Nav isHidden={isHidden}>
          <NavbarContainer>
            <NavLogo href='/'>
              <Logo src={logo} alt="logo" />
            </NavLogo>
            <IconContext.Provider value={{ color: 'white' }}>
            <MenuIcon onClick={handleClick}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            </IconContext.Provider>
            <Fade left cascade>
            <NavMenu onClick={handleClick} isOpen={isOpen}>
              {navLinks.map(
              ({navLinkId, text, path}) =>
                <NavItem  key={navLinkId}>
                  <NavLink 
                    navLinkId={navLinkId} 
                    text={text}
                    path={path}
                    setActiveNavLinkId={setActiveNavLinkId} 
                  />
                </NavItem>
              )}
            </NavMenu>
            </Fade>
            <SocialSection>
              <Cv href={CV} download rel="noopener noreferrer" target="_blank">Curriculum Vitae</Cv>
              <SocialLink href="https://www.linkedin.com/in/kpakpo-akue/" target="_blank">
                <FaLinkedin />
                LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/Kpakpo5" target="_blank">
                <FaGithubSquare />
                Github
              </SocialLink>
            </SocialSection>
          </NavbarContainer>
        </Nav>
      </NavContext.Provider>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
