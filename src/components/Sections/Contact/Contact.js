import {MdEmail} from 'react-icons/md';
import { SectionTitle } from "../../../globalStyles";
import {
  ContactSection,
  SectionContent,
  CvContainer,
  Cv,
  EmailLinkContainer,
  EmailLink,
  Availability
} from "./Contact.elements";

import CV from '../../../assets/Cv_Kpakpo_Akue.pdf'

const Contact = () => {

  
  return (
    <>
      <ContactSection id="contact">
        <SectionTitle>Contact</SectionTitle>
        <SectionContent>
          <Availability>
            <p>Actuellement, je suis à la recherche d'un contrat d'alternance qui me permettra de passer à l'étape suivante de ma reconversion, valoriser mes compétences et gagner de l'expérience dans un contexte professionnel .</p>
            <p>Pour toute proposition de collaboration, j'ai hâte d'échanger avec vous . </p>
          </Availability>
          <div></div>
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
        </SectionContent>
      </ContactSection>
    </>
  );
}


export default Contact;