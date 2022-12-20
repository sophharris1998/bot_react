import { useState, useEffect } from "react";
import "./App.scss";
import UserInput from "./Components/UserInput/UserInput";

const App = () => {
  const [userMessage, setUserMessage] = useState("");

  const userFirstMessage = (event) => {
    setUserMessage(event.target.value);
    var messageTag = Array.from(document.getElementsByClassName("message"))[0];
    messageTag.innerText = userMessage;
  };

  return (
    <div className="App">
      <header className="JSM">
        <h1>JSM</h1>
      </header>
      <main className="main">
        <p className="message"></p>
      </main>
      <div className="App__userInput">
        <UserInput userFirstMessage={userFirstMessage} />
      </div>
    </div>
  );
};

export default App;
