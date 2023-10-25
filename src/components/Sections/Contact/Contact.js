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

import CV from '../../../assets/Cv_Kpakpo_Akue_développeur.pdf'

const Contact = () => {

  
  return (
    <>
      <ContactSection id="contact">
        <SectionTitle>Contact</SectionTitle>
        <ContentWrapper>
          <SectionContent>
            <Availability>
              <p>Actuellement, je cherche une opportunité professionnelle (alternance comprise) afin me consacrer pleinement à ma passion. C'est la dernière étape de ma reconversion, celle qui me permettra de mettre en valeur mes compétences et poursuivre ma progression dans un contexte entreprise .</p>
              <p>Pour toute proposition de collaboration, j'ai hâte d'échanger avec vous . </p>
            </Availability>
            <EmailLinkContainer>
              <p>Contactez-moi !</p> 
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