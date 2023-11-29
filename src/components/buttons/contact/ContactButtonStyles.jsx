import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../assets/colors/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const Button = styled(Link)`
  background-color: white;
  color: ${colors.colorSecundario};
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  padding: 10px 20px;
  border-radius: 100px;
  margin-top: 25px;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: #4a86ff;
    color: white;
  }

  @media screen and (max-width: 768px){
    margin-top: -20px;
  }
`