import styled, {keyframes} from "styled-components";
import background from '../../../../assets/modal-background.jpg';

const modalFadeIn = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(75%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`; 

const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  60% {
      opacity: 0;
      transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`; 

const linkZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  60% {
      opacity: 0;
      transform: scale(0.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;


export const ModalOverlay = styled.div`
    position: fixed;
    top : 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
`;

export const ModalBody = styled.div`
    position : fixed;
    left: 15vw;
    right: 10vw;
    top : 10vh;
    bottom: 10vh;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1000;
    background-color: white;
    color: black;
    background-image: url(${background});
    animation-name: ${modalFadeIn};
    animation-duration: 0.5s;

    @media screen and (max-width: 1000px) {
        top: 2vh;
        bottom: 2vh;
        right: 2vw;
        left: 2vw;
        flex-direction: column;
    }

    & > button {
        position : absolute;
        right: 0.8rem;
        top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        border: none;
        background: transparent;
        cursor: pointer;

        & > span {
            font-size: 0.8rem;
            margin-right: 5px;
            font-weight: bold;
            letter-spacing: 0.5px;
        }
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    flex-basis: 30%;
    padding: 2rem;
    border-right: 2px solid black;
    @media screen and (max-width: 1000px) {
        flex-basis: 26%;
        width: 88%;
        background-color: transparent;
        color: black;
        border-right: 0;
        border-bottom: 2px solid black;
        padding: 0;
        padding-bottom: 1rem;
        margin-top: 3rem;
    }

`;

export const ModalMain = styled.div`
    padding: 3rem;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
   

    @media screen and (max-width: 1000px) {
        display: block;
        padding: 0;
        padding-top: 1rem;
        width: 94%;
        flex-basis: 74%;
        height: auto;
        overflow-y: auto;
    }
`;


export const ProjectHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        text-align: center;
        font-size: 0.9rem;
        font-weight: bold;
    }

    & > small {
        text-align: center;
    }
`;

export const ProjectPicture = styled.img`
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #FFCC45;

    @media screen and (max-width: 1000px) {
        width: 33vw;
        height: 33vw;
        max-width: 160px;
        max-height: 160px;
    }
`;

export const ProjectTitle = styled.h2`
    color: #FFCC45;
`;


export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin: 1rem;
    }

    @media screen and (max-width: 1000px) {
        height: 100%;
    }
`;

export const Context = styled.div`
    text-align: center;
    animation-name: ${textFadeIn};
    animation-duration: 1.5s;

    @media screen and (max-width: 768px) {
        text-align: start;
        font-size: 0.9rem;
    }
`;

export const Experience = styled.div`
    text-align: center;
    animation-name: ${textFadeIn};
    animation-duration: 1.7s;

    @media screen and (max-width: 768px) {
        text-align: start;
        font-size: 0.9rem;
    }
`;


export const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    @media screen and (max-width: 480px) {
        margin: 0;
    }
`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    background: black;
    color: white;
    margin: 1.5rem;
    transition: transform 0.25s;
    animation-name: ${linkZoomIn};
    animation-duration: 1.6s;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        margin: 1rem;
    }

    &:hover {
        transform: scale(1.1);
    }
`