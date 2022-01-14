import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';
import { SectionTitle } from "../../../globalStyles";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  & > .react-reveal {
    width: 100%;
  }
`;

export const AboutTitle = styled(SectionTitle)`
  &::before {
    content:"PROFIL";
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Narrative = styled.div`
  padding: 2px;
  margin-left: 44px;

  & > p {
    margin-bottom: 10px;
  }
`

export const Picture = styled.div`
  border: solid 2px white;
  width: 222px;
  height: 250px;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Story = withReveal(styled.div`
  display: flex;
`, <Fade bottom/>);

export const Skills = styled.div`
  display: flex;
`;