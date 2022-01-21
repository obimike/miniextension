import { useState, useRef } from "react";

import { Students } from "../api/Base";

/**
 *
 * login using the Students name
 *
 * get the name from the input
 *
 * check if student exist
 *
 * if not display error message
 *
 * if exist save student state in redux on login
 *
 * get all class the student takes plus students that involved
 *
 * Logout and clear stored students
 *
 */

const Home = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>();

  //on buutton click
  const login = (e: any) => {
    e.preventDefault();
    console.log("Waiting...");

    if (nameRef.current?.value !== "") {
      //getting the value of the input
      const nameInput: string | undefined = nameRef.current?.value;

      authenticate(nameInput);
    }
  };

  //Checking if Students exist
  const authenticate = (name: string | undefined) => {
    console.log(name);
    let studentRecord = Students.select({
      view: "Grid view",
      filterByFormula: `SEARCH('${name}', {Name})`,
    }).firstPage((err, record) => {
      if (err) {
        console.log(err);
        setErrorMessage("Sorry! No such user.");
        return;
      }
      return record;
    });
  };

  return (
    <div className="App">
      <p>{errorMessage}</p>
      <div>
        <label> Student Name:</label>
        <br />
        <input type="text" ref={nameRef} placeholder="name" />
        <br />
        <input type="submit" value="Login" onClick={login} />
      </div>
    </div>
  );
};

export default Home;
