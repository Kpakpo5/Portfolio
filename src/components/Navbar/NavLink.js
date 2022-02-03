import {useContext, useState, useEffect} from 'react';
import { NavBarLink } from "./Navbar.elements";
import { NavContext } from './Navbar';

const NavLink = ({ navLinkId, text, path, setActiveNavLinkId }) => {
  const activeNavLinkId = useContext(NavContext);

  const [decoration, setDecoration] = useState(false);

  const handleClick = () => {
    const newActiveLinkId = (' ' + navLinkId).slice(1);
    console.log(newActiveLinkId);
    setActiveNavLinkId(newActiveLinkId);
    
    console.log(navLinkId);
  }
  console.log(activeNavLinkId);
  useEffect(() => {
    if(navLinkId === activeNavLinkId) {
      setDecoration(true);
    }else {
      setDecoration(false);
    }
  }, [activeNavLinkId,navLinkId]);


  return (
    <NavBarLink 
    onClick={handleClick}
    href={path}
    activeNavLinkId={activeNavLinkId}
    navLinkId={navLinkId}
    decoration={decoration}
    >
      {text}
    </NavBarLink>
);
}

export default NavLink;