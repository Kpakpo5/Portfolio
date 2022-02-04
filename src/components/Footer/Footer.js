import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import {
  FooterContainer,
  Social,
  SocialItem,
  SocialIcon,
  Notice
} from './Footer.elements'

const Footer = () => {

  const date = new Date().getFullYear();
  return (
    <FooterContainer>
      <Social>
        <SocialItem>
          <SocialIcon href="https://www.linkedin.com/in/kpakpo-akue/" target="_blank">
            <FaLinkedin />
          </SocialIcon>
        </SocialItem>
        <SocialItem>
        <SocialIcon href="https://github.com/Kpakpo5" target="_blank">
          <FaGithubSquare />
        </SocialIcon>
        </SocialItem>
      </Social>
      <Notice>
        <span>&copy;</span><span>{date}</span><p>KA</p>
      </Notice>
    </FooterContainer>
  );
}
export default Footer;
