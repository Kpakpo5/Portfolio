import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'



export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .react-reveal {
    width: 100%;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Narrative = styled.div`
  padding: 5px;
  margin-left: 44px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 44px;
  }

  & > div {
    color:#bfbfbf;
    margin-bottom: 10px;
  }
`

export const Picture = styled.div`
  border: solid 2px white;
  min-width: 222px;
  max-width: 222px;
  height: 250px;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Story = withReveal(styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`, <Fade bottom/>);

export const Skills = withReveal(styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`, <Fade bottom/>);

export const Paragraph = withReveal(styled.p`
  color: #FCF5E5;
  text-align: center;
  font-size: 1.3rem;
`, <Fade bottom/>);


export const TechsIntro = withReveal(styled.p`
  font-size: 1.1rem;
  text-align: center;
`, <Fade left/>);

export const Techs = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;

  & > .react-reveal {
    margin: 1rem;
  }
`;

export const Tech = withReveal(styled.li`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 120px;
  height: 80px;
  border-radius: 3px;

  @media screen and (max-width: 480px) {
    width: 33vw;
    height: 22vw;
  }
`, <Zoom/>);

export const TechIcon = styled.div`
  background-color: white;
  overflow: hidden;

  & > svg {
    margin-top: 2px;
  }
`;

export const TechName = styled.h4`
  display: block;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  background-color: white;
  color: black;
  border-radius: 0 0 3px 3px;

  @media screen and (max-width: 480px) {
    font-size: 3vw;
  }
`;

export const Vision = styled.div`
  font-size: 1rem;
  margin-bottom: 3rem;

  & > * {
    text-align: center;
    margin-bottom: 2rem;
    color: #bfbfbf;
  }

`;

export const PLink = styled.a`
   color: #ffdb7a;
   position: relative;
   text-decoration: none;
  &:after {
    background: repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1.1px;
    left: 50%;
    position: absolute;
    background: #ffdb7a;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%; 
    left: 0; 
  }
`