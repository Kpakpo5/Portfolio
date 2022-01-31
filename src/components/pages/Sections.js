import styled from "styled-components";

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15vw;
  padding: 0 10vw;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 100px 5vw;
  }

  & > *{
    min-height: 100vh;
    width: 1000px;
    padding: 99px 0;

    @media screen and (max-width: 768px) {
      padding: 44px 0;
      width: 100%;
  }
  }
  
`;


export default Sections;