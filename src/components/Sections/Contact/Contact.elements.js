import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .react-reveal {
    width: 100%;
  }

`;

export const SectionContent = withReveal(styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`, <Fade bottom/>);

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 30%;

  & > p {
    color: #b3b3b3;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Cv = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  border: 1px #fff solid;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #fff;
    color: black;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }

  & > p {
    color: #b3b3b3;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  padding: 3rem;
  margin-top: 33px;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }

  & > label {
    color: #b3b3b3;
  }

  & > input,
  & > textarea {
    color: black;
    background: white;
    filter: brightness(0.8);

    &:focus {
      filter: brightness(1);
    }
  }
`;

export const ContactInput = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 8px 0 16px 0;
  padding: 0.5rem;
`;

export const ContactTextArea = styled.textarea`
  resize: none;
  border-radius: 3px;
  width: 100%;
  min-height: 111px;
  padding: 0.5rem;
  margin: 8px 0 16px 0;
`;

export const SubmitButton = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`;