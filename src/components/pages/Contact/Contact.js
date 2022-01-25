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
          <ContactForm>
            <label htmlFor="name">Votre nom</label>
            <ContactInput type="text" name="name" id="name"/>
            <label htmlFor="e-mail">Votre e-mail</label>
            <ContactInput type="email" name="email" id="email"/>
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