import "./App.scss";
import UserInput from "./Components/UserInput/UserInput";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>JSM APP</h1>
      </header>
      <main className="main">
        <p>This is main</p>
      </main>
      <div className="App__userInput">
        <UserInput />
      </div>
    </div>
  );
};

export default App;
