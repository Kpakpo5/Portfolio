import emailjs from '@emailjs/browser';
import { SectionTitle } from "../../../globalStyles";
import {
  ContactSection,
  CvContainer,
  Cv,
  FormContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  SubmitButton
} from "./Contact.elements";
import Zoom from 'react-reveal/Zoom';

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
        <CvContainer>
          <Cv>Curriculum Vitae</Cv>
        </CvContainer>
        <FormContainer>
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
      </ContactSection>
    </>
  );
}


export default Contact;