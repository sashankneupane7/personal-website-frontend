import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

    .Button:last-child {
        width: 100%;
        background: teal;
    }
`;

const Login = () => {
    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <LoginForm>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email..." />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className = "Button">Login</button>

                <Link to="/register">
                    <button className="Button">Register</button>
                </Link>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
