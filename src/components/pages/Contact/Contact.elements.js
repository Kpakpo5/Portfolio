import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;

  & > .react-reveal {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CvContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`

export const Cv = styled.a`
  text-decoration: none;
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
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 3rem;
  width: 60%;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
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
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
`;