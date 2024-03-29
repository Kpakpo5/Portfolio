import {MdEmail} from 'react-icons/md';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SectionTitle } from "../../../globalStyles";
import {
  ContactSection,
  ContentWrapper,
  SectionContent,
  CvContainer,
  Cv,
  EmailLinkContainer,
  EmailLink,
  Availability,
  SocialIcons,
  SocialIcon,
  SocialLink
} from "./Contact.components";

import CV from '../../../assets/Cv_Kpakpo_Akue_alternance_CP.pdf';

const Contact = () => {

  
  return (
    <>
      <ContactSection id="contact">
        <SectionTitle>Contact</SectionTitle>
        <ContentWrapper>
          <SectionContent>
            <Availability>
              <p>Je recherche actuellement une opportunité professionnelle dans le cadre de ma formation en alternance "Chef de projet e-commerce" chez Academy Numérique.</p>
              <p>Que cela soit pour une proposition de collaboration, ou tout autre motif, n'hésitez pas à me contacter, je serai ravi d'échanger avec vous . </p>
            </Availability>
            <EmailLinkContainer>
              <p>M'envoyer un e-mail</p> 
              <EmailLink href="mailto:kpakpo.akue5@gmail.com">
                <MdEmail style={{fontSize: '6rem'}}/>
              </EmailLink>
            </EmailLinkContainer>
            <CvContainer>
              <p>CV à télécharger</p>
              <Cv href={CV} download rel="noopener noreferrer" target="_blank">Curriculum Vitae</Cv>
            </CvContainer>
            <SocialIcons>
              <SocialIcon>
                <SocialLink href="https://www.linkedin.com/in/kpakpo-akue/" target="_blank">
                  <FaLinkedin />
                </SocialLink>
              </SocialIcon>
              <SocialIcon>
                <SocialLink href="https://github.com/Kpakpo5" target="_blank">
                  <FaGithubSquare />
                </SocialLink>
              </SocialIcon>
            </SocialIcons>
          </SectionContent>
        </ContentWrapper>
      </ContactSection>
    </>
  );
}


export default Contact;