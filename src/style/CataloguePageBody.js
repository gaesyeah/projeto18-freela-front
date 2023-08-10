import { AiFillHeart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaArrowCircleLeft } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { styled } from "styled-components";

export const BreedsBody = styled.div`
  h2{
    margin-top: 78px;
    font-weight: 700;
    font-size: 17px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDEDED;
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  min-height: 100vh;
  padding-bottom: 14px;
  ul{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 18px;
    gap: 8px;
  }
`;

export const StyledBreedCard = styled.li`
  width: 90%;
  font-family: 'Lexend Deca', sans-serif;
  h1{
    text-align: center;
    color: black;
    font-weight: 500;
  }
  div{
    cursor: ${({ loading }) => loading ? 'default' : 'pointer'};
    border-radius: 8px;
    background-color: #5dbb63;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
      opacity: ${({ loading }) => loading ? 1 : 0.9};
      transition-duration: 400ms;
    }
    p{
      padding-left: 10px;
      color: black;
      font-size: 24px;
      font-weight: 600;
    }
    div{
      height: 70px;
      width: 70px;
        img{
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  ul{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding-top: 10px;
    margin-top: -6px;
    background-color: #F8F8F8;
    border-radius: 0 0 10px 10px;
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 7px;
    gap: 7px;
  }
`;

export const StyledModelCard = styled.li`
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  margin-top: -2.5px;
  background-color: #EDEDED;
  box-sizing: content-box;
  border: 2px solid lightgray;
  border-radius: 8px;
  width: 158px;
  div:nth-child(1) {
    cursor: pointer;
    h2{
      width: 220px;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
      transform: rotate(-45deg);
      position: absolute;
      z-index: 1;
      font-weight: 500;
      font-size: 26px;
      color: #FF2E2E;
      align-self: center;
      margin-top: 56px;
      margin-left: 12px;
    }
    display: flex;
    flex-direction: column;
    height: 158px;
    width: 158px;
    img{
      position: relative;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  div:nth-child(2){
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border-radius: 0px;
    p{
      max-width: 168px;
      overflow: scroll hidden;
      white-space: nowrap;
      margin-left: 2px;
      padding: 0;
      font-weight: 500;
      margin-bottom: 2px;
      font-size: 16px;
      line-height: 20px;
    }
    button{
      cursor: ${({ avaliable }) => !avaliable ? 'default' : 'pointer'};
      background-color: ${({ liked, avaliable }) => liked ? '#FF5C5C' : (!avaliable ? 'lightgray' : '#5dbb63')};
      height: 53px;
      font-size: 18px;
      font-weight: 500;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0 0 6px 6px;
      transition-duration: 400ms;
      &:hover{
        opacity: 0.9;
      }
      &:disabled{
        cursor: default;
        opacity: 0.5;
      }
    }
  }
`;

export const LoadingBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  p{
    color: lightgray;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const CataloguePageNavBar = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  z-index: 2;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  background-color: #5dbb63;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1{
    text-align: center;
    border-radius: 100%;
    font-weight: 500;
    font-size: 18px;
    height: 19px;
    width: 19px;
    background-color: white;
    position: fixed;
    right: 0;
    margin-right: 5px;
    top: 34px;
    z-index: 1;
  }
  div{
    margin-left: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    p{
      cursor: pointer;
      margin-left: 3px;
      font-weight: 600;
      font-size: 20px;
      transition-duration: 400ms;
      &:hover{
        color: white;
      }
    }
    span{
      max-width: 95%;
      overflow: scroll hidden;
      white-space: nowrap;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const StyledHeart = styled(AiFillHeart)`
  font-size: 40px;
  display: flex;
  position: fixed;
  right: 0;
  cursor: pointer;
  color: black;
  margin-right: 5px;
  transition-duration: 400ms;
  &:hover{
    color: white;
  }
`;

export const AddRmLike = styled(AiFillHeart)`
  font-size: 38px;
  color: white;
`;

export const StyledArrow = styled(FaArrowCircleLeft)`
  font-size: 24px;
  cursor: pointer;
  color: black;
  transition-duration: 400ms;
  &:hover{
    color: white;
  }
`;

export const StyledAccountButtons = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 3;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: ${({ accountMenu }) => !accountMenu ? '10px' : '-90px'};
  margin-right: 10px;
  transition: 400ms ease-out;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div:nth-child(1){
    border-radius: 10px 0 0 10px;
  }
  div:nth-child(2){
    border-radius: 0 10px 10px 0;
  }
  div{
    cursor: pointer;
    background: #5dbb63;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    height: 100%;
    &:hover{
      opacity: 0.8;
      transition-duration: 400ms;
    }
  }
`;

export const StyledEditIcon = styled(BiEdit)`
  color: black;
  font-size: 26px;
`;

export const StyledPlusIcon = styled(HiPlus)`
  color: black;
  font-size: 28px;
`;