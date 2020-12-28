import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  height: 700px;
  margin: 50px 100px;
  background-color: #f4f4f4;
`;

export const TopBar = styled.div`
  position: absolute;
  height: 50px;
  top: 0px;
  width: 100%;
  box-shadow: 0px 1px 1px #edece8;
`;

export const ChatContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  height: 550px;
  width: 98%;
  padding: 10px;
  overflow: auto;
`;
export const Bottom = styled.div`
  position: absolute;
  height: 100px;
  bottom: 0px;
  width: 100%;
  align: center;
  text-align: center;
`;

export const LeftChat = styled.div`
  bottom: 0px;
  width: 25%;
  background-color: #edece8;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 70%;
  padding: 10px;
  color: #000000;
  font-family: SFUITextMedium;
`;

export const RightChat = styled.div`
  bottom: 0px;
  width: 25%;
  background-color: #4e78f6;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 5px;
  padding: 10px;
  color: #ffffff;
  margin-left: 70%;
`;

export const EditChat = styled.img`
  float: left;
  margin-top: -25px;
  margin-left: -25px;
  position: relative;
  cursor: pointer;
  font-weigth: bold;
`;

export const Manifest = styled.p`
  padding: 0px;
  font-size: 30px;
  color: #4e78f6;
  float: left;
  margin: 10px;
`;

export const Menubar = styled.img`
  float: right;
  margin: 10px;
`;

export const ProfileContainer = styled.div`
  text-align: center;
`;

export const WaitBox = styled.div``;
