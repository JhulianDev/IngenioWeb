import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -100px;

  @media screen and (max-width: 1800px){
    padding: 0 120px;
  }

  @media screen and (max-width: 1440px){
    padding: 0 100px;
  }

  @media screen and (max-width: 1024px){
    padding: 0 70px;
  }

  @media screen and (max-width: 768px){
    padding: 0 50px;
  }

  @media screen and (max-width: 425px){
    padding: 0 30px;
  }
`

export const Logo = styled.img`
  width: 60px;
`