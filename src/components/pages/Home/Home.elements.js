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

export const HomeSection = styled.section`
padding-top: 44px;
@media screen and (max-width: 768px){
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
`;

export const Intro = styled.div`
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

