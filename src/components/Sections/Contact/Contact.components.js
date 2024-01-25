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

export const ContentWrapper = styled.div`
  max-width: 700px;
`;

export const SectionContent = withReveal(styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    padding: 1rem;
  }

`, <Fade bottom/>);

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;

  & > p {
    color: #b3b3b3;
    margin-bottom: 1rem;
    width: auto;
  }
`;


export const Cv = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  border: 2px  #ffdb7a solid;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 219, 122, 0.1);
  }
`;


export const EmailLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  & > p {
    color: #bfbfbf;
  }
`

export const EmailLink = styled.a`
  color : #ffdb7a;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;


export const Availability = styled.div`
  margin-bottom: 2rem;

  & > p {
    padding: 8px;
    text-align: center;
    color: #FCF5E5;
  }
`

export const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style : none;
  margin-top: 5rem;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SocialIcon = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  font-size: 3rem;
  margin: 0 30px;
  color: #ffdb7a;
`;