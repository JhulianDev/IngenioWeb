import styled from "styled-components";

export const BoxSteps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  gap: 80px;

  @media screen and (max-width: 1440px){
    margin-top: 60px;
    gap: 60px;
  }

  @media screen and (max-width: 1024px){
    margin-top: 40px;
    gap: 40px;
  }

  @media screen and (max-width: 768px){
    margin-top: 10px;
    gap: 40px;
  }
`