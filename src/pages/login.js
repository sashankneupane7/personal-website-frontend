import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

const LoginContainer = styled.div`
    min-height: calc(100vh - 80px - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
`;

const LoginTitle = styled.span`
    font-size: 70px;
`;

const LoginForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    width: 250px;

    * {
        border-radius: 10px;
    }
    label {
        padding-left: 2px;
        margin: 10px 0;
    }

    input {
        padding: 10px;
        background-color: white;
        border: none;
    }

    .Button {
        margin-top: 20px;
        cursor: pointer;
        background: lightcoral;
        border: none;
        color: white;
        border-radius: 10px;
        padding: 10px;
    }

    .Button:disabled{
        cursor: not-allowed;
        background: rgb(252,177,177)
    }

    .Button:last-child {
        width: 100%;
        background: teal;
    }
`;

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <LoginForm onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="Button" type="submit"
                disabled={isFetching}>
                    Login
                </button>

                <Link to="/register">
                    <button className="Button">Register</button>
                </Link>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
