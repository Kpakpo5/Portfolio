import { useState, useEffect, createContext } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../assets/logo.png';
import Fade from 'react-reveal/Fade';
import NavLink from './NavLink';
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
} from './Navbar.elements';

export const NavContext = createContext();

const navLinks = [
  {navLinkId: 'bienvenue', text: 'Bienvenue', path: '#bienvenue'},
  {navLinkId: 'profil', text:'Profil', path: '#profil'},
  {navLinkId: 'projets', text:'Projets', path: '#projets'},
  {navLinkId: 'contact', text:'Contact', path: '#contact'}
]

const Navbar = () => {
  

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeNavLinkId, setActiveNavLinkId] = useState('');
  const handleClick = () => setOpen(!open);

  let prevScrollPos = window.scrollY;

  const handleScroll = () => {
    let currentScrollPos = window.scrollY;
    if(prevScrollPos < currentScrollPos) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
    <IconContext.Provider value={{ color: 'white' }}>
      <NavContext.Provider value={activeNavLinkId}>
        <Nav hidden={hidden}>
          <NavbarContainer>
            <NavLogo href='/'>
              <Logo src={logo} alt="logo" />
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {open ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <Fade left cascade>
            <NavMenu onClick={handleClick} open={open}>
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
              <SocialLink href="https://www.linkedin.com/in/kpakpo-akue/" target="_blank">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/Kpakpo5" target="_blank">
                <FaGithubSquare />
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
