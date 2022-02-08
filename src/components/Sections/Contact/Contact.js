import { useState } from 'react';
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
  SubmitButton,
  ValidateMessage
} from "./Contact.elements";
import CV from '../../../assets/akue_cv.pdf'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageHasError, setMessageHasError] = useState(false);
  const [FormSubmitted, setFormSubmitted] = useState(false);

  const HideValidateMessage = () => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  }
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_frlfeyi',
      'template_ro9lgea',
      e.target,
      'user_vIul8v33ok27Wx1Ydjx9g'
    ).then((res) => {
      console.log('SUCCESS!', res.status, res.text);
      setMessageHasError(false);
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(true);
      HideValidateMessage();
   }, (err) => {
      console.log('FAILED...', err);
      setMessageHasError(true);
      setFormSubmitted(true);
      HideValidateMessage();
   });
  }

  return (
    <>
      <ContactSection id="contact">
        <SectionTitle>Contact</SectionTitle>
        <SectionContent>
          <CvContainer>
            <p>CV à télécharger .</p>
            <Cv href={CV} download rel="noopener noreferrer" target="_blank">Curriculum Vitae</Cv>
          </CvContainer>
          <FormContainer>
            <p>Vous souhaitez me contacter en vue d'une prochaine collaboration ou juste faire un coucou, vous pouvez le faire directement via le formulaire ci-dessous .</p>
            <ContactForm onSubmit={sendMail}>
              <label htmlFor="name">Votre nom</label>
              <ContactInput
                required
                minLength={2}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="user_email">Votre e-mail</label>
              <ContactInput
                required
                type="email"
                name="user_email"
                id="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Votre message</label>
              <ContactTextArea
                required
                minLength={10}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {FormSubmitted && 
                <ValidateMessage hasError={messageHasError}>
                  {messageHasError ? 
                    "Erreur lors de l'envoi. Vérifiez vos informations et réessayez.":
                    "Message bien envoyé. Merci!" 
                  }
                </ValidateMessage>
              }
              <SubmitButton>Envoyer</SubmitButton>
            </ContactForm>
          </FormContainer>
        </SectionContent>
      </ContactSection>
    </>
  );
}


export default Contact;