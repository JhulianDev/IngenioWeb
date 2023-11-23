import styled, { css } from "styled-components";
import { fonts } from "../fonts/FontsHandler";
import { colors } from "../colors/Colors";

export const Section = styled.section`
  background-color: ${(props) => props.$bgColor};
  min-height: ${(props) => props.$height || "100vh"};
  padding: ${(props) => props.$portada ? "0 60px" : "60px"};
  width: 100%;
  display: flex;
  align-items: ${(props) => props.$align || "center"};
  justify-content: center;
  overflow: hidden;

  ${(props) => props.$portada && css`
    background: rgb(220,220,221);
    background: linear-gradient(180deg, rgba(220,220,221,1) 0%, rgba(220,220,221,1) 54%, 
    rgba(208,208,210,1) 62%, rgba(208,208,210,1) 73%, rgba(244,244,244,1) 88%);
    padding: 0 60px;
  `}

  @media screen and (max-width: 1800px){
    padding: ${(props) => props.$portada ? "0 120px" : "60px 120px"};
  }

  @media screen and (max-width: 1440px){
    padding: ${(props) => props.$portada ? "0 100px" : "60px 100px"};
  }

  @media screen and (max-width: 1024px){
    padding: ${(props) => props.$portada ? "0 70px" : "60px 70px"};
  }

  @media screen and (max-width: 768px){
    padding: ${(props) => props.$portada ? "0 50px" : "60px 50px"};
  }

  @media screen and (max-width: 425px){
    padding: ${(props) => props.$portada ? "0 30px" : "60px 30px"};
  }
`

export const MaxWidth = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.$column ? "column" : "row"};
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 768px){
    flex-direction: ${(props) => props.$header ? "row" : "column"};
    gap: 40px;
  }
`

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${colors.colorSecundario};
  font-size: 3rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 1800px){
    margin-top: 10px;
  }

  @media screen and (max-width: 1440px){
    font-size: 2.8rem;
    margin-top: 0px;
  }

  @media screen and (max-width: 768px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1.6rem;
  }
`

export const SubtitleSection = styled.h2`
  font-family: ${fonts.MainTypography};
  color: ${colors.colorSecundario};
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 1440px){
    font-size: 2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.9rem;
    margin-top: -40px;
  }

  @media screen and (max-width: 425px){
    font-size: 1.7rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1.5rem;
  }
`