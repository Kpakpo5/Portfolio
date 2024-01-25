import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`; 


export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 480px){
    display: block;
    padding-top: 0;
  }
`;


export const Greeting = styled.div`
  color: white;
  font-size: 33px;
  font-weight: bold;
  color: white;
  text-align: center;
  animation-name: ${fadeIn};
  animation-duration: 1.1s;
  animation-timing-function: ease-in;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }

  & > h1 {
    font-size: 1rem;
    animation-name: ${fadeInLeft};
    animation-duration: 1s;
  }

  & > h2 {
    font-size : clamp(40px, 8vw, 80px);
    color: #FFCC45;
    animation-name: ${fadeInRight};
    animation-duration: 1.3s;
  }

  & > h3 {
    font-size: clamp(30px, 6vw, 60px);
    color: #ffdb7a;
    animation-name: ${fadeInLeft};
    animation-duration: 1.6s;
  }
  
  & > p {
    position: relative;
    margin-top: 80px;
    border-radius: 2px;
    padding: 8px 16px;
    max-width: 460px;
    background-color: #FCF5E5;
    color: black;
    box-shadow: 0 0 5px 5px #FCF5E5;
    font-size: 1.1rem;
    font-weight: bold;
    font-style: italic;
    animation-name: ${fadeUp};
    animation-duration: 1.5s;
    @media screen and (max-width: 480px) {
    margin-top: 30px;
    width: 100%;
    font-size: 0.9rem;
    }
    
    &:before{
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 16px solid #FCF5E5;
      border-right: 8px solid transparent;
      border-bottom: 12px solid #FCF5E5;
      border-top: 20px solid transparent;
      left: 51%;
      top: -20px;
      filter: blur(1px)
    }
    
  }

  & > span {
      margin-top : 1rem;
      font-size: 2rem;
      font-style: normal;
      font-weight: normal;
    }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  color: black;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
`;

export const CV = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px  #ffdb7a solid;
  background-color: rgba(255, 219, 122, 0.2);
  color: white;
  font-size: 1.1rem;
  font-weight: bolder;
  letter-spacing: 2px;
`;

