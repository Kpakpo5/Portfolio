import styled, {keyframes} from "styled-components";

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

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const pointDown = keyframes`
  100% { transform: translateY(0)}
  0%{ transform: translateY(11px)}
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

export const Greet = styled.div`
  color: white;
  font-size: 33px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }

  & > * {
    text-align: center;
  }

  & > .Typewriter {

    & > .Typewriter__cursor {
      display: none;
    }
    & > .Typewriter__wrapper {
      text-align: center;
    }

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
    margin-top: 60px;
    border-radius: 2px;
    padding: 10px 8px;
    max-width: 360px;
    background-color: #FCF5E5;
    color: black;
    box-shadow: 0 0 5px 5px #FCF5E5;
    font-size: 1.1rem;
    font-style: italic;
    animation-name: ${fadeUp};
    animation-duration: 1.8s;
    @media screen and (max-width: 480px) {
    margin-top: 30px;
    }
    
    &:after{
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 16px solid #FCF5E5;
      border-right: 12px solid transparent;
      border-top: 8px solid #FCF5E5;
      border-bottom: 20px solid transparent;
      left: 51%;
      bottom: -20px;
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

export const ScrollInvitation = styled.div`
  position: fixed;
  background-color: transparent;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  & > p {
    white-space: nowrap;
    animation-name: ${blink};
    animation-duration: 4s;
    animation-iteration-count: infinite;

    & > span {
    display: inline-block;
    margin-left: 15px;
    animation: ${pointDown} 1s alternate infinite;
    }
  }
`;