import styled, {keyframes} from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';
import { Container } from '../../globalStyles';

const animateNav = keyframes`
  0% {
    top: -100px;
  }
  100% {
    top: 0;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top : 0;
  left : 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 15vw;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    width : 100%;
    height: 80px;
    justify-content: center;
    top: ${({hidden}) => (hidden ? '-100px' : 0)};
    transition: all 0.8s ease;
    z-index: 999;
    animation-name: ${animateNav};
    animation-duration: 1.5s;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
  }

${Container}
`;

export const NavLogo = styled.a`
  display: block;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 100px;
  width: 45px;
  height: 45px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.66;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 0 20px;
  }
`;

export const Logo = styled.img`
filter: brightness(1.1);
object-fit: cover;
width: 45px;
height: 45px;
`;


export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 50px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({open}) => (open ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavBarLink = styled.a`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 60%;
  position: relative;

  &:after {
    background: repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: ${({decoration}) => (decoration ? 0 : '50%')};
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${({decoration}) => (decoration ? '100%' : 0)};
  }

  &:hover:after {
    width: 100%; 
    left: 0; 
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const SocialSection = withReveal(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 110px;

  @media screen and (max-width: 768px) {
   display: none;
  }
`, <Fade left/>);

export const SocialLink = styled.a`
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  transition: transform 0.3s ease, border-top 0.12s ease, border-right 0.12s ease;

  
  &:hover {
    transform: scale(1.1) translate(4px,-4px);
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
  }

  & > * {
    width: 100%;
    height: 100%;
  }
`;