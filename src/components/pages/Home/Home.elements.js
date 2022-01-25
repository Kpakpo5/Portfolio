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
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px){
    display: block;
    padding-top: 0;
  }
`;

export const Greet = styled.div`
  color: white;
  font-size: 33px;
  background-color: white;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }

  & > .Typewriter > .Typewriter__cursor {
    display: none;
  }
`;

export const Intro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 55px;

  & > h1 {
    font-size: 1rem;
    animation-name: ${fadeInLeft};
    animation-duration: 0.7s;
  }

  & > h2 {
    font-size : clamp(40px, 8vw, 80px);
    color: #FFCC45;
    animation-name: ${fadeInRight};
    animation-duration: 1s;
  }

  & > h3 {
    font-size: clamp(30px, 6vw, 60px);
    color: #FFFF00;
    animation-name: ${fadeInLeft};
    animation-duration: 1.3s;
  }
  
  & > p {
    margin-top: 50px;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: bold;
    animation-name: ${fadeUp};
    animation-duration: 1.5s;
    & > span {
      font-size: .8rem;
      font-style: normal;
      font-weight: normal;
    }
  }
`;

export const ScrollInvite = styled.div`
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
    animation: ${pointDown} 2s alternate infinite;
    }
  }
`;