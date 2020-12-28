import { useEffect, useState } from "react";
import HenryMsgs from "../../henryMsgs";
import {
  Bottom,
  Box,
  ChatContainer,
  EditChat,
  LeftChat,
  Manifest,
  Menubar,
  ProfileContainer,
  RightChat,
  TopBar,
  WaitBox,
} from "./chatBox.styles";

const ChatBox = () => {
  const [chatMsgs, setChatmsgs] = useState(HenryMsgs.slice(0, 2));
  const [isWaiting, setISWaiting] = useState(true);
  const [currentIndex, ChangeCurrentIndex] = useState(2);
  const [strDate, setDate] = useState("");
  useEffect(() => {
    TypeMsgs();
  }, [currentIndex]);

  const TypeMsgs = () => {
    setTimeout(HenryTyping, 1000);
  };

  const HenryTyping = () => {
    var data = chatMsgs;
    if (currentIndex === 4) {
      data.push(HenryMsgs[4]);
      data.push(HenryMsgs[5]);
      data.push(HenryMsgs[6]);
      data.push(HenryMsgs[7]);
    } else if (currentIndex === 5) {
      data.push(HenryMsgs[8]);
      data.push(HenryMsgs[9]);
    } else if (currentIndex === 6) {
      data.push(HenryMsgs[10]);
    } else {
      if (!data.includes(HenryMsgs[currentIndex]))
        data.push(HenryMsgs[currentIndex]);
    }
    setChatmsgs(data);
    setISWaiting(false);
    var div = document.getElementById("chatContainer");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  };

  const getSelectedDate = (e) => {
    setDate(e.target.value);

    var div = document.getElementById("chatContainer");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  };

  const userOptions = () => {
    if (currentIndex === 2) {
      return (
        <div>
          <button className="myBtn" onClick={() => userSelection("Yes")}>
            Yes
          </button>
          <button className="myBtn" onClick={() => userSelection("No")}>
            No
          </button>
        </div>
      );
    } else if (currentIndex === 3) {
      return (
        <div>
          <button className="myBtn" onClick={() => userSelection("Yes")}>
            Yes
          </button>
          <button className="myBtn" onClick={() => userSelection("Not Really")}>
            Not Really
          </button>
        </div>
      );
    } else if (currentIndex === 4) {
      return (
        <div>
          <button className="myBtn" onClick={() => userSelection("Active")}>
            Active
          </button>
          <button className="myBtn" onClick={() => userSelection("Passive")}>
            Passive
          </button>
        </div>
      );
    } else if (currentIndex === 5) {
      return (
        <div>
          <input
            type="date"
            value={strDate}
            max="2020-12-28"
            onChange={(evt) => getSelectedDate(evt)}
          />{" "}
          <button className="myBtn" onClick={() => userSelection(strDate)}>
            Confirm
          </button>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <button className="myBtn" onClick={() => userSelection("Continue")}>
            Continue
          </button>
          <br />
        </div>
      );
    }
  };
  const editChat = (ind) => {
    if (window.confirm("Do you really want to edit?")) {
      var data = chatMsgs;
      setChatmsgs(data.splice(0, ind.index + 1));
      ChangeCurrentIndex(ind.cindex);
    }
  };
  const userSelection = (val) => {
    debugger;
    if (val !== "Continue") {
      var data = chatMsgs;
      var obj = {
        index: data.length - 1,
        msg: val,
        user: "user",
        cindex: currentIndex,
      };
      data.push(obj);
      setChatmsgs(data);
      ChangeCurrentIndex(currentIndex + 1);
    } else {
      if (window.confirm("Do you want to restart chat?")) {
        setChatmsgs(HenryMsgs.slice(0, 3));
        ChangeCurrentIndex(2);
        setISWaiting(true);
      }
    }
  };

  return (
    <Box>
      <TopBar>
        <Manifest>Manifest</Manifest>
        <Menubar
          src="Assets/Group 1298.png"
          onClick={() => userSelection("Continue")}
        />
      </TopBar>
      <ChatContainer id="chatContainer">
        <ProfileContainer>
          <img src="Assets/61.png" alt="" />
          <h1>Henry</h1>
          <h2>TRANSFER SPECIALIST</h2>
        </ProfileContainer>

        {!isWaiting &&
          chatMsgs.map((m, i) => {
            if (m.user === "henry") {
              return (
                <div>
                  <LeftChat key={i}>{m.msg}</LeftChat>
                </div>
              );
            } else
              return (
                <RightChat key={i}>
                  {m.msg}
                  <EditChat
                    src="Assets/Symbol 9 – 10.png"
                    onClick={() => editChat(m)}
                  ></EditChat>
                </RightChat>
              );
          })}
        {isWaiting && (
          <WaitBox>
            <img src="Assets/Wait.png" alt="" />
          </WaitBox>
        )}
      </ChatContainer>
      <Bottom>{!isWaiting && userOptions()}</Bottom>
    </Box>
  );
};

export default ChatBox;
