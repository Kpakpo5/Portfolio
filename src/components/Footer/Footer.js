import { FooterContainer } from './Footer.elements'

const Footer = () => {

  const date = new Date().getFullYear();
  return (
    <FooterContainer>
        <span>&copy;</span><span>{date}</span><p>K. A.</p>
    </FooterContainer>
  );
}


export default Footer;
