import React, { createContext, useState } from "react";

const contextAPI = createContext();

const MyContextApi = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [state, setState] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const { userName, password, email } = state;

  const [state2, setState2] = useState({
    password2: "",
    email2: "",
  });

  const handleInput = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInput2 = (e) => {
    setState2((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const { password2, email2 } = state2;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMsg("Not every input is filled");
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (email2 !== state.email || password2 !== state.password) {
      setErrorMsg("The above account does not exist");
      return;
    }

    if (password2.trim() === "" || email2.trim() === "") {
      setErrorMsg("Not every input is filled");
    } else {
      setSuccess("Login successful");
    }

    // if (state2.password === "" && state2.email.trim() === "") {
    //   setSuccess("");
    // }
  };

  setTimeout(() => {
    setErrorMsg("");
  }, 5000);

  return (
    <div>
      <contextAPI.Provider
        value={{
          state,
          state2,
          handleInput,
          handleSubmit,
          handleSubmit2,
          handleInput2,
          errorMsg,
          success,
          // password,
          // email,
          // email2,
          // password2,
          userName,
        }}
      >
        {" "}
        {children}
      </contextAPI.Provider>
    </div>
  );
};

export { MyContextApi, contextAPI };
