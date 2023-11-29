import styled from "styled-components";
import { colors } from "../../assets/colors/Colors";
import { fonts } from "../../assets/fonts/FontsHandler";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: -30px;

  @media screen and (max-width: 1440px){
    margin-top: 20px;
    margin-bottom: -30px;
  }

  @media screen and (max-width: 768px){
    margin-top: -20px;
    margin-bottom: -70px;
  }
`

export const BoxCurrency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #224a992f;
  border: ${(props) => props.$selected && `2px solid ${colors.colorSecundario}`};
  border-radius: 6px;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  transition: all .15s ease-in-out;

  &:hover{
    border-color: ${(props) => !props.$selected && "#224a997d"};
  }
`

export const Icon = styled.img`
  width: 30px;
  display: flex;

  @media screen and (max-width: 425px){
    width: 24px;
  }
`

export const Currency = styled.span`
  font-family: ${fonts.MainTypography};
  color: ${colors.colorSecundario};

  @media screen and (max-width: 1440px){
    font-size: .9rem;
  }

  @media screen and (max-width: 425px){
    font-size: .81rem;
  }
`