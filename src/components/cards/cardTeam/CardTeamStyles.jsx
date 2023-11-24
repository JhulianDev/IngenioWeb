import styled from "styled-components";
import { fonts } from "../../../assets/fonts/FontsHandler";
import { colors } from "../../../assets/colors/Colors";

export const CardBox = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 60px;
  padding: 50px;
  gap: 4%;

  @media screen and (max-width: 1800px){
    margin-top: 40px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    margin-top: 0px;
    gap: 30px;
  }

  @media screen and (max-width: 425px){
    border-radius: 8px;
    padding: 40px;
    gap: 20px;
  }
`

export const Image = styled.img`
  width: 47%;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1440px){
    /* width: 42%; */
  }

  @media screen and (max-width: 1200px){
    width: 40%;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }

  @media screen and (max-width: 425px){
    border-radius: 8px;
  }
`

export const BoxDescription = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.MainTypography};
  color: ${colors.colorSecundario};
  gap: 20px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const Description = styled.p`
  font-size: 1.67rem;

  @media screen and (max-width: 1800px){
    font-size: 1.41rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.16rem;
  }

  @media screen and (max-width: 1200px){
    font-size: .9rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1.1rem;
  }
`