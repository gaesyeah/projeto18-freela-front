import { styled } from "styled-components";

export const ModelPageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
  div:nth-child(1){
    background-color: lightgray;
    margin-top: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid lightgray;
    border-radius: 8px;
    width: 340px;
    div:nth-child(1){
      background-color: lightgray;
      position: relative;
      display: flex;
      justify-content: center;
      margin-top: unset;
      padding-left: 2px;
      padding-right: 2px;
      width: 340px;
      height: 340px;
      border: none;
      h3{
        overflow: hidden;
        position: absolute;
        width: 400px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        transform: rotate(-45deg);
        font-weight: 500;
        font-size: 50px;
        color: red;
        align-self: center;
        margin-bottom: 20px;
        margin-left: 10px;
      }
      img{
        border-radius: 6px 6px 0 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin-bottom: 2px;
      }
    }
    div:nth-child(2){
      background-color: lightgray;
      border-radius: 0 0 6px 6px;
      background-color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      div{
        background-color: lightgray;
        border-radius: 0 0 0 0;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: 700;
        font-size: 18px;
        h1{
          overflow-y: hidden;
          overflow-x: auto;
          margin-bottom: 3px;
          margin-top: 3px;
        }
      }
      p{
        background-color: lightgray;
        border-radius: 0 0 0 0;
        overflow: hidden;
        padding-left: 2px;
        font-weight: 500;
        padding-bottom: 3px;
        overflow-wrap: break-word;
        span{
          color: white;
        }
      }
      button{
        h3{
          margin-right: 12px;
        }
        cursor: ${({ avaliable }) => !avaliable ? 'default' : 'pointer'};
        background-color: ${({ liked, avaliable }) => liked ? '#FF5C5C' : (!avaliable ? 'lightgray' : '#5dbb63')};
        width: 100%;
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
          opacity: ${({ avaliable }) => !avaliable ? 1.0 : 0.9};
          }
        }
        &:disabled{
          cursor: default;
          opacity: 0.5;
        }
      }
    }
  p:last-child{
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    color: gray;
    font-size: 20px;
    font-weight: 500;
    transition-duration: 400ms;
    &:hover{
      color: #5dbb63;
    }
  }
`;

export const WhatsAppDiv = styled.div`
  margin-top: 14px;
  overflow: hidden;
  background-color: #5dbb63;
  width: 340px;
  border-radius: 10px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
    }
  p{
    overflow: hidden;
    color: #228C22;
    font-size: 22px;
    font-weight: 500;
  }
  img{
    margin: 2px;
    border-radius: 16%;
    width: 52px;
  }
  img:last-child{
    margin-top: 6px;
  }
`;