import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../../assets/logo.png';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
  SocialSection,
  SocialLink
} from './Navbar.elements';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <Logo src={logo} alt="logo" />
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {open ? <FaTimes /> : <FaBars />}
          </MenuIcon>
          <NavMenu onClick={handleClick} open={open}>
            <NavItem>
              <NavLink href="#accueil">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#profil">Profil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projets">Projets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
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
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
