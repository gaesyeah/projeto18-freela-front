import { styled } from "styled-components";

export const ModelPageBody = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
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
export const ModelContent = styled.div`
  background-color: lightgray;
  margin-top: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid lightgray;
  border-radius: 8px;
  width: 340px;
`;

export const InteractContainer = styled.div`
  background-color: lightgray;
  border-radius: 0 0 6px 6px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  div{
    overflow: hidden;
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
      margin-left: 2px;
      line-height: 27px;
      margin-top: -2px;
    }
  }
  p{
    overflow: auto;
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
`;

export const PhotoContainer = styled.div`
  overflow: hidden;
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
    transition: ease-in-out 200ms;
    margin-right: ${({ photoChanged }) => photoChanged && (photoChanged === 'right' ? '680px' : 'unset')};
    margin-left: ${({ photoChanged }) => photoChanged && (photoChanged === 'left' ? '680px' : 'unset')};
    border-radius: 6px 6px 0 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 2px;
  }
`;

export const ChangeImg = styled.div`
  cursor: pointer;
  overflow: hidden;
  left: ${({ position }) => position === 'left' ? 0 : 'unset'};
  right: ${({ position }) => position === 'right' ? 0 : 'unset'};
  margin-left: ${({ position }) => position === 'left' ? '3px' : 'unset'};
  margin-right: ${({ position }) => position === 'right' ? '3px' : 'unset'};
  position: absolute;
  align-self: center;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  opacity: 0.5;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 400ms;
  &:hover{
    opacity: 0.4;
  }
  span{
    overflow: hidden;
    color: black;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const WhatsAppDiv = styled.div`
  div{
    border: unset;
    border-radius: 16%;
    max-width: 52px;
    height: 52px;
    overflow-y: hidden;
    margin-bottom: 2px;
    margin-top: 2px;
    margin-left: 2px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 14px;
  overflow: hidden;
  background-color: #5dbb63;
  width: 340px;
  border-radius: 10px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 400ms;
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
  img:last-child{
    width: 52px;
    margin-right: 2px;
    margin-bottom: -3px;
  }
`;