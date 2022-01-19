import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from 'react-reveal/Fade';

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  max-width: 1000px;

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
    font-size: .9rem;
  }

  & > p {
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

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Techs = styled.ul`
  display: flex;
  list-style: none;
  & > li {
    margin-right: 20px;
  }
`;

export const Tech = styled.li`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 120px;
  height: 80px;
  border-radius: 3px;
`;

export const TechIcon = styled.div`
  font-size: 2rem;
  background-color: white;

  & > svg {
    margin-top: 2px;
  }
`;

export const TechName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3px;
  background-color: white;
  color: black;
`;

export const Vision = styled.div`
  font-size: 1rem;
  margin-bottom: 50px;
`;

export const PLink = styled.a`
   color: #FFFF00;
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
    background: #FFFF00;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%; 
    left: 0; 
  }
`