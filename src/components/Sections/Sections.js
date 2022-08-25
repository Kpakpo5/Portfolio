import styled from "styled-components";

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15vw;
  padding: 0 10vw;
  max-width: 85vw;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 100px 5vw;
    max-width: 100%;
  }

  & > *{
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
    padding: 99px 0;

    @media screen and (max-width: 768px) {
      padding: 40px 0;
      margin-bottom: 50px;
  }
  }
  
`;


export default Sections;