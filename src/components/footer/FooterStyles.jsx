import styled from "styled-components";
import { fonts } from "../../assets/fonts/FontsHandler";
import { colors } from "../../assets/colors/Colors";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const CopyRight = styled.span`
  color: ${colors.colorSecundario};
  font-family: ${fonts.MainTypography};
  font-size: 1.1rem;
  text-align: center;

  @media screen and (max-width: 768px){
    margin: 0 50px;
  }

  @media screen and (max-width: 425px){
    margin: 0 30px;
    font-size: .75rem;
  }
`