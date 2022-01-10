import styled from "styled-components";
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  position: fixed;
  top : 0;
  left : 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  width: 15vw;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    width : 100%;
    height: 80px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 999;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const NavLink = styled.a`
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
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
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

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 110px;

  @media screen and (max-width: 768px) {
   display: none;
  }
`;

export const SocialLink = styled.a`
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