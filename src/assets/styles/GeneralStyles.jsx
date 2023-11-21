import styled, { css } from "styled-components";
import { fonts } from "../fonts/FontsHandler";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor};
  padding: 0 60px;
  overflow: hidden;

  ${(props) => props.$portada && css`
    background: rgb(220,220,221);
    background: linear-gradient(180deg, rgba(220,220,221,1) 0%, rgba(220,220,221,1) 54%, 
    rgba(208,208,210,1) 62%, rgba(208,208,210,1) 73%, rgba(244,244,244,1) 88%);
  `}

  @media screen and (max-width: 768px){
    padding: 60px;
  }

  @media screen and (max-width: 425px){
    padding: 60px 40px;
  }
`

export const MaxWidth = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify};
  position: relative;

  @media screen and (max-width: 1800px){
    max-width: 1300px;
  }

  @media screen and (max-width: 1440px){
    max-width: 1050px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
`

export const SubtitleSection = styled.h2`
  font-family: ${fonts.MainTypography};
`