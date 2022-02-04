import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 2vw 5vw;
  }
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  list-style : none;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SocialItem = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.a`
  font-size: 2rem;
  margin: 0 10px;
`;

export const Notice = styled.div`
  width: 50%;
  justify-self: start;
  justify-content: center;
  display: flex;
  font-size: 0.9rem;

  & > p {
    margin-left: 5px;
  }
  
  & > p, & > span {
    color: #bfbfbf;
    margin-right: 5px;
  }
`;