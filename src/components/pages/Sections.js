import styled from "styled-components";

const Sections = styled.div`
  margin-left: 15vw;
  padding: 0 10vw;
  & > *{
    min-height: 100vh;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 5vw;
  }
`;


export default Sections;