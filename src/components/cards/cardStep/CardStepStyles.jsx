import styled from "styled-components";
import { colors } from "../../../assets/colors/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const BoxCardStep = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media screen and (max-width: 1024px){
    gap: 40px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const BoxStep = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: ${(props) => 
    props.$position === "left" ? "flex-start" : 
    props.$position === "right" ? "flex-end" : ""
  };;

  order: ${(props) => 
    props.$position === "left" ? "1" : 
    props.$position === "right" ? "2" : ""
  };

  @media screen and (max-width: 768px){
    order: ${(props) => props.$position === "right" && "2"};
  }
`

export const Number = styled.span`
  background-color: ${(props) => props.$bgColor};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 5rem;
  width: 400px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${(props) => 
    props.$position === "left" ? "12px 0 0 12px" : 
    props.$position === "right" ? "0 12px 12px 0" : ""
  };

  order: ${(props) => 
    props.$position === "left" ? "1" : 
    props.$position === "right" ? "2" : ""
  };

  @media screen and (max-width: 1800px){
    width: 350px;
    height: 130px;
    font-size: 4.6rem;
  }

  @media screen and (max-width: 1440px){
    width: 280px;
    height: 120px;
    font-size: 4rem;
  }

  @media screen and (max-width: 1024px){
    width: 215px;
    height: 100px;
    font-size: 4rem;
  }

  @media screen and (max-width: 768px){
    width: 55%;
    height: 120px;
    border-radius: ${(props) => 
      props.$position === "left" ? "8px 0 0 8px" : 
      props.$position === "right" ? "0 8px 8px 0" : ""
    };
  }

  @media screen and (max-width: 635px){
    height: 100px;
    font-size: 3.5rem;
  }

  @media screen and (max-width: 538px){
    height: 80px;
    font-size: 3rem;
  }

  @media screen and (max-width: 375px){
    height: 60px;
    font-size: 2rem;
  }
`

export const Image = styled.img`
  height: 200px;
  border-radius: 12px;
  order: ${(props) => 
    props.$position === "left" ? "2" : 
    props.$position === "right" ? "1" : ""
  };

  box-shadow:
  0px 0px 20px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1800px){
    height: 170px;
  }

  @media screen and (max-width: 1440px){
    height: 150px;
  }

  @media screen and (max-width: 1024px){
    height: 130px;
  }

  @media screen and (max-width: 768px){
    width: 45%;
    height: auto;
    border-radius: 8px;
  }

`

export const BoxTexts = styled.div`
  font-family: ${fonts.MainTypography};
  color: ${colors.colorSecundario};
  max-width: 700px;

  order: ${(props) => 
    props.$position === "left" ? "2" : 
    props.$position === "right" ? "1" : ""
  };

  @media screen and (max-width: 1800px){
    max-width: 590px;
  }

  @media screen and (max-width: 1440px){
    max-width: 510px;
  }

  @media screen and (max-width: 768px){
    max-width: 100%;
    order: ${(props) => props.$position === "right" && "2"};
  }
`

export const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 5px;

  @media screen and (max-width: 1800px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.8rem;
  }
`

export const Description = styled.p`
  font-size: 1.8rem;

  @media screen and (max-width: 1800px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
  }
`