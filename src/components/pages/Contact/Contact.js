import emailjs from '@emailjs/browser';
import { SectionTitle } from "../../../globalStyles";
import {
  ContactSection,
  SectionContent,
  CvContainer,
  Cv,
  FormContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  SubmitButton
} from "./Contact.elements";
import Zoom from 'react-reveal/Zoom';
import CV from '../../../assets/akue_cv.pdf'

const Contact = () => {

  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_frlfeyi',
      'template_ro9lgea',
      e.target,
      'user_vIul8v33ok27Wx1Ydjx9g'
    ).then((res) => {
      console.log('SUCCESS!', res.status, res.text);
   }, (err) => {
      console.log('FAILED...', err);
   });
  }

  return (
    <>
      <ContactSection id="contact">
        <Zoom bottom>
          <SectionTitle>CV & Contact</SectionTitle>
        </Zoom>
        <SectionContent>
          <CvContainer>
            <p>CV à télécharger .</p>
            <Cv href={CV} download rel="noopener noreferrer" target="_blank">Curriculum Vitae</Cv>
          </CvContainer>
          <FormContainer>
            <p>Vous souhaitez me contacter en vue d'une prochaine collaboration ou juste faire un coucou, vous pouvez le faire via le formulaire ci-dessous .</p>
            <ContactForm onSubmit={sendMail}>
              <label htmlFor="name">Votre nom</label>
              <ContactInput type="text" name="name" id="name"/>
              <label htmlFor="user_email">Votre e-mail</label>
              <ContactInput type="email" name="user_email" id="user_email"/>
              <label htmlFor="message">Votre message</label>
              <ContactTextArea name="message"/>
              <SubmitButton>Envoyer</SubmitButton>
            </ContactForm>
          </FormContainer>
        </SectionContent>
      </ContactSection>
    </>
  );
}


export default Contact;