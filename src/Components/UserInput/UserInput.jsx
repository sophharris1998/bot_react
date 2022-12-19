import "./UserInput.scss";

const UserInput = () => {
  return (
    <div className="userInput_container">
      <input
        className="userInputBox"
        type="text"
        placeholder="Type here to talk to Isaac Bot"
      />
    </div>
  );
};

export default UserInput;
