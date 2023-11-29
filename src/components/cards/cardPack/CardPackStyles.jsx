import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../assets/colors/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const CardBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  color: ${colors.colorSecundario};
  width: 400px;
  min-width: 340px;


  border: 1px solid ${colors.colorSecundario};
  border-radius: 16px;
  padding: 50px 40px;
  gap: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: ${fonts.MainTypography};
  transform: scale(.9);

  @media screen and (max-width: 1800px){
    gap: 6px;
  }

  @media screen and (max-width: 1440px){
    padding: 40px 30px;
    width: 340px;
  }
`

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 5px;
`

export const Sign = styled.span`
  margin-left: 24px;
`

export const Price = styled.span`
  font-size: 3rem;
`

export const Currency = styled.span`
  font-size: .8rem;
`

export const NamePackage = styled.h3`
  font-size: 1.8rem;

  @media screen and (max-width: 1800px){
    font-size: 1.6rem;
  }
`

export const Description = styled.p`
  font-size: 1.1rem;
  text-align: center;

  @media screen and (max-width: 1800px){
    font-size: .98rem;
  }

  @media screen and (max-width: 1440px){
    font-size: .9rem;
  }
`

export const Benefits = styled.h4`
  font-size: 1.4rem;

  @media screen and (max-width: 1800px){
    font-size: 1.3rem;
    margin: 5px 0;
  }
`

export const List = styled.ul`
  margin-top: 5px;
  list-style: none;
`

export const Item = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  margin-left: -8px;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }
`

export const Button = styled(Link)`
  background-color: ${colors.colorSecundario};
  color: white;
  padding: 10px 35px;
  border-radius: 100px;
  font-size: 1.2rem;
  text-align: center;
  transition: all .15s ease-in-out;

  &:hover{
    background-color: #4a86ff;
  }
`