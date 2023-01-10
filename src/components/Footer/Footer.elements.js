import styled from "styled-components";


export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 0.9rem;

  & > p {
    margin-left: 5px;
  }
  
  & > p, & > span {
    color: #bfbfbf;
    margin-right: 5px;
  }
`;