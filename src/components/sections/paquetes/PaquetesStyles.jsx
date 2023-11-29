import styled from "styled-components";

export const WindowSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  overflow: hidden;
  position: relative;
` 

export const SliderMovil = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  

  @media screen and (max-width: 1221px){
    justify-content: center;
    width: 1020px;
    padding: 0 40px;
    transform: ${(props) => 
      props.$cardSelected === 1 ? "translateX(340px)" :
      props.$cardSelected === 2 ? "translateX(0px)": 
      props.$cardSelected === 3 ? "translateX(-340px)" : "translateX(0px)"
    };
    transition: all .6s ease-in-out;
  }
`

export const TouchSlider = styled.span`
  position: absolute;
  width: 100%;
  height: 76%;
  z-index: 1;
`

export const BoxCircles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: -30px;

  @media screen and (max-width: 1221px){
    margin-top: 0px;
  }

  @media screen and (max-width: 764px){
    margin-top: -40px;
    margin-bottom: -20px;
  }
`

export const Circle = styled.span`
  background-color: #ffffff;
  width: 15px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  display: none;

  @media screen and (max-width: 1221px){
    display: flex;
    opacity: ${(props) => props.$selected ? ".6" : ".2"};
    transition: all .1s ease-in-out;
  }
`

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  height: 90vh;
  z-index: -1;

  @media screen and (max-width: 1440px){
    height: 100vh;
  }
`