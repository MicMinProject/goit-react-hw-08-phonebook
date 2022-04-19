import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAsync } from "../utils/fetchAPI";
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const token = useSelector((state) => state.persistedReducer.users.token);
  const loading = useSelector((state) => state.persistedReducer.users.loading);

  const handlerRegister = (e) => {
    e.preventDefault();
    dispatch(
      signupAsync({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      }),
    );
  };

  const handlerChange = (e) => {
    if (e.target.name === "name") {
      setNameValue(e.target.value);
    } else if (e.target.name === "email") {
      setEmailValue(e.target.value);
    } else {
      setPasswordValue(e.target.value);
    }
  };

  useEffect(() => {
    token && navigate("/contacts");
  }, [token]);

  return (
    <form
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        border: "0px solid",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "20px",
      }}
      onSubmit={handlerRegister}>
      <h3>Register</h3>
      <input
        css={{
          width: "400px",
          height: "50px",
          marginBottom: "10px",
          fontSize: "20px",
          borderRadius: "10px",
          borderColor: "#abacac",
          backgroundColor: "#ced4d4",
        }}
        name="name"
        placeholder="Name"
        type="text"
        onChange={handlerChange}
        value={nameValue}></input>

      <input
        css={{
          width: "400px",
          height: "50px",
          marginBottom: "10px",
          fontSize: "20px",
          borderRadius: "10px",
          borderColor: "#abacac",
          backgroundColor: "#ced4d4",
        }}
        name="email"
        placeholder="Email"
        type="email"
        onChange={handlerChange}
        value={emailValue}></input>

      <input
        css={{
          width: "400px",
          height: "50px",
          marginBottom: "10px",
          fontSize: "20px",
          borderRadius: "10px",
          borderColor: "#abacac",
          backgroundColor: "#ced4d4",
        }}
        name="password"
        placeholder="Password"
        type="password"
        onChange={handlerChange}
        value={passwordValue}></input>

      {loading ? (
        <p>Please, wait...</p>
      ) : (
        <button
          css={{
            marginTop: "20px",
            padding: "10px 30px",
            fontSize: "25px",
            border: "0px",
            borderRadius: "10px",
            backgroundColor: "#0697e0",
            color: "white",
            fontWeight: "bold",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
            '&:active': {
              boxShadow:'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
            }
          }}
          type="submit">Sign up</button>
      )}
    </form>
  );
};
