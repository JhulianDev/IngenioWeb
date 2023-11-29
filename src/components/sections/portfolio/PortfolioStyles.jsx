import styled from "styled-components";

export const BoxImages = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4%;
  margin-top: 40px;
  margin-bottom: -50px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: -40px;
  }
`

export const Image = styled.img`
  width: 48%;
  border-radius: 10px;
  margin-bottom: 50px;
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.09);
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 40px;
  }
`