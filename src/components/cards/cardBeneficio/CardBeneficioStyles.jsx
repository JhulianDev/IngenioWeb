import styled from "styled-components";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const BoxCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 12px;
  padding: 30px 40px;
  gap: 20px;

  @media screen and (max-width: 1800px){
    padding: 25px 35px;
  }

  @media screen and (max-width: 1440px){
    padding: 20px 30px;
    gap: 15px;
  }

  @media screen and (max-width: 1200px){
    padding: 15px 20px;
  }

  @media screen and (max-width: 1024px){
    padding: 10px 12px;
    border-radius: 10px;
    gap: 10px;
  }

  @media screen and (max-width: 768px){
    padding: 25px 20px;
    gap: 20px;
    width: 100%;
  }

  @media screen and (max-width: 500px){
    padding: 20px 18px;
    width: 100%;
    gap: 15px;
  }

  @media screen and (max-width: 425px){
    justify-content: flex-start;
    padding: 20px 22px;
  }
`

export const Icon = styled.img`
  height: 100px;

  @media screen and (max-width: 1800px){
    height: 80px;
  }

  @media screen and (max-width: 1440px){
    height: 60px;
  }

  @media screen and (max-width: 1200px){
    height: 50px;
  }

  @media screen and (max-width: 1024px){
    height: 40px;
  }

  @media screen and (max-width: 768px){
    height: 90px;
  }

  @media screen and (max-width: 500px){
    height: 50px;
  }

  @media screen and (max-width: 375px){
    height: 50px;
  }
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  font-family: ${fonts.MainTypography};
  gap: 2px;
`

export const Title = styled.h1`
  font-size: 1.5rem;

  @media screen and (max-width: 1800px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1200px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`

export const Paragraph = styled.p`
  font-size: 1.3rem;

  @media screen and (max-width: 1800px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1200px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 500px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`