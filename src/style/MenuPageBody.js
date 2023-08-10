import { styled } from "styled-components";

export const StyledBackGround = styled.div`
  cursor: pointer;
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: 4;
  background-color: rgba(0,0,0,0.4);
`;

export const StyledCreateMenu = styled.form`
  font-family: 'Lexend Deca', sans-serif;
  background-color: #EDEDED;
  transition: 400ms ease-out;
  top: 50%; right: ${({ accountMenu }) => accountMenu === 'cadastrar' ? '50%' : '150%'};
  transform: translate(50%,-50%);
  position: absolute;
  border-radius: 10px;
  width: 90%;
  padding-top: 14px;
  padding-bottom: 10px;
  z-index: 5;
  background-color: #EDEDED;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
  label{
    overflow: hidden;
  }
  select{
    cursor: pointer;
    padding-left: 11px;
    width: 90%;
    height: 38px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    &:disabled{
      cursor: default;
      opacity: 0.5;
      background: #F2F2F2;
    }
  }
  textarea{
    padding-left: 11px;
    user-select: text;
    width: 90%;
    height: 100px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &:disabled{
      cursor: default;
      opacity: 0.5;
      background: #F2F2F2;
    }
    &::placeholder{
      color: #DBDBDB;
    }
  }
  input{
    padding-left: 11px;
    user-select: text;
    width: 90%;
    height: 38px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &:disabled{
      cursor: default;
      opacity: 0.5;
      background: #F2F2F2;
    }
    &::placeholder{
      color: #DBDBDB;
    }
  }
  button:nth-child(6){
    width: 38px;
    height: 38px;
    background: #5dbb63;
    position: absolute;
    border-radius: 0 5px 5px 0;
    right: 16px;
    margin-top: 180px;
      &:disabled{
      cursor: default;
      opacity: 0.5;
    }
    &:hover{
      opacity: 0.9;
      transition-duration: 200ms;
    }
  }
  button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    background: #5dbb63;
    width: 90%;
    height: 38px;
    margin-bottom: 12px;
    font-size: 21px;
    line-height: 26px;
    color: #FFFFFF;
    &:disabled{
        cursor: default;
        opacity: 0.5;
    }
    &:hover{
        opacity: 0.9;
        transition-duration: 200ms;
    }
  }
`;

export const StyledEditMenu = styled.form`
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