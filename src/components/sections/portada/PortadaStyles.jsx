import styled from "styled-components";
import { fonts } from "../../../assets/fonts/FontsHandler";
import { colors } from "../../../assets/colors/Colors";

export const BoxTexts = styled.div`
  color: ${colors.colorSecundario};
  font-family: ${fonts.MainTypography};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
  margin-top: -80px;
  z-index: 1;

  @media screen and (max-width: 1800px){
    margin-top: -30px;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  line-height: 100px;
  letter-spacing: .1rem;

  @media screen and (max-width: 1800px){
    font-size: 4.5rem;
    line-height: 90px;
  }

  @media screen and (max-width: 1440px){
    font-size: 3.6rem;
    line-height: 75px;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.6rem;
    line-height: 52px;
  }

  @media screen and (max-width: 768px){
    font-size: 3.8rem;
    line-height: 75px;
    margin-top: 40px;
  }

  @media screen and (max-width: 500px){
    font-size: calc(1vw + 2.5rem);
    line-height: 58px;
  }

  @media screen and (max-width: 375px){
    font-size: calc(1vw + 1.5rem);
    line-height: 35px;
  }
`

export const Paragraph = styled.span`
  font-size: 2.8rem;
  line-height: 65px;
  font-weight: 600;

  @media screen and (max-width: 1800px){
    font-size: 2.6rem;
    line-height: 60px;
  }

  @media screen and (max-width: 1440px){
    font-size: 2.2rem;
    line-height: 50px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.6rem;
    line-height: 36px;
  }

  @media screen and (max-width: 768px){
    font-size: 2.3rem;
    line-height: 50px;
  }

  @media screen and (max-width: 500px){
    font-size: 1.7rem;
    line-height: 40px;
  }

  @media screen and (max-width: 375px){
    font-size: 1.2rem;
    line-height: 25px;
  }
`

export const Span = styled.span`
  border-radius: 8px;

  margin-left: ${(props) => 
    props.$typeB || props.$typeC ? "8px" : "none"
  };

  padding: ${(props) => 
    props.$typeA || props.$typeB ? "2px 20px" : "none"
  };

  color: ${(props) => 
    props.$typeA || props.$typeB ? "white" :
    props.$typeC ? colors.colorPrincipal : 
    colors.colorSecundario
  };

  background-color: ${(props) => 
    props.$typeA ? colors.colorPrincipal : 
    props.$typeB ? colors.colorSecundario : ""
  };
`

export const Image = styled.img`
  width: 60%;
  z-index: 1;

  @media screen and (max-width: 1800px){
    width: 55%;
  }

  @media screen and (max-width: 1440px){
    width: 50%;
  }

  @media screen and (max-width: 1024px){
    width: 55%;
  }

  @media screen and (max-width: 768px){
    width: 90%;
    margin-top: 40px;
  }

  @media screen and (max-width: 425px){
    width: 110%;
    margin-top: 40px;
  }
`

export const Trazo = styled.img`
  display: ${(props) => props.$mobile ? "none" : "flex"};
  position: absolute;
  height: 100vh;
  right: 0px;
  opacity: .2;

  @media screen and (max-width: 768px){
    display: ${(props) => props.$mobile ? "flex" : "none"};
    top: 0;
  }
`