import "./Fonts/SFUIText-Bold.ttf";
import "./Fonts/SFUIText-Heavy.ttf";
import "./Fonts/SFUIText-Light.ttf";
import "./Fonts/SFUIText-Medium.ttf";
import "./Fonts/SFUIText-Regular.ttf";
import "./Fonts/SFUIText-Semibold.ttf";
import "./App.css";
import ChatBox from "./components/chatBox/chatBox";
import HenryMsgs from "./henryMsgs";

const App = () => {
  return (
    <div className="App">
      <ChatBox HenryMsgs={HenryMsgs} />
    </div>
  );
};

export default App;
