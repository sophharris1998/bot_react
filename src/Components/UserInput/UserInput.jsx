import "./UserInput.scss";

const UserInput = ({ userFirstMessage }) => {
  return (
    <div className="userInput_container">
      <input
        onInput={userFirstMessage}
        className="userInputBox"
        type="text"
        placeholder="Type here to talk to Isaac Bot"
      />
    </div>
  );
};

export default UserInput;
