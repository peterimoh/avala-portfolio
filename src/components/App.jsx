import React, { useState } from "react";

function App() {
  // const [contact, setContact] = useState({
  //   fName: "",
  //   lName: "",
  //   email: "",
  // });

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function firstNameChange(event) {
    setfName(event.target.value);
  }
  function lastNameChange(event) {
    setlName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName} !
      </h1>

      <form>
        <input
          onChange={firstNameChange}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={lastNameChange}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
