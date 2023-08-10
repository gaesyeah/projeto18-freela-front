import { styled } from "styled-components";

export const StyledBackGround = styled.div`
  cursor: pointer;
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: 4;
  background-color: rgba(0,0,0,0.4);
`;

export const StyledCreateMenu = styled.div`
  transition: 400ms ease-out;
  top: 50%; right: ${({ accountMenu }) => accountMenu === 'criar' ? '50%' : '150%'};
  transform: translate(50%,-50%);
  position: absolute;
  border-radius: 10px;
  width: 90%;
  height: 500px;
  z-index: 5;
  background-color: #EDEDED;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledEditMenu = styled.div`
  transition: 400ms ease-out;
  top: 50%; right: ${({ accountMenu }) => accountMenu === 'editar' ? '50%' : '-50%'};
  transform: translate(50%,-50%);
  position: absolute;
  border-radius: 10px;
  width: 90%;
  height: 500px;
  z-index: 5;
  background-color: #EDEDED;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;