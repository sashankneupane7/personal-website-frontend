import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterContainer = styled.div`
    margin: 0;
    padding: 0;
    min-height: calc(100vh - 80px - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
`;

const RegisterTitle = styled.span`
    font-size: 70px;
`;

const RegisterForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    max-width: 700px;

    * {
        border-radius: 10px;
        border: none;
    }

    label {
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
    .errorMessage {
        padding-top: 10px;
        color: white;
        font-weight: 800;
    }

    @media screen and (max-width: 600px) {
        margin: 0 auto;
        width: 70%;
    }
`;

const Name = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`;

const NamePart = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;

    label{
        text-align: left;
    }

    input {
        background-color: white;
        border: none;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

const Asterick = () => {
    return(
    <span style = {{color:"red"}}>*</span>
    )}

const Register = () => {
    const [firstname, setFirstName] = useState("")
    const [middlename, setMiddleName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
            console.log(res);
        } catch (err) {
            setError(true);
        }
    };
    return (
        <RegisterContainer>
            <RegisterTitle>Register</RegisterTitle>
            <RegisterForm onSubmit={handleSubmit}>
                <div
                    style={{
                        padding: "10px",
                        "padding-left": "0",
                        "font-size": "10px",
                    }}
                >
                    Field with (<Asterick />) are required to fill.
                </div>
                <Name>
                    <NamePart>
                        <label htmlFor="">
                            First Name <Asterick />
                        </label>
                        <input
                            type="text"
                            placeholder="First Name..."
                            onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                    </NamePart>
                    <NamePart>
                        <label htmlFor="">Middle Name</label>
                        <input
                            type="text"
                            placeholder="Middle Name..."
                            onChange={(e) => setMiddleName(e.target.value)}
                        ></input>
                    </NamePart>
                    <NamePart>
                        <label htmlFor="">
                            Last Name <Asterick />
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name..."
                            onChange={(e) => setLastName(e.target.value)}
                        ></input>
                    </NamePart>
                </Name>
                <label htmlFor="">
                    Username <Asterick />
                </label>
                <input
                    type="text"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">
                    Email <Asterick />
                </label>
                <input
                    type="text"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">
                    Password <Asterick />
                </label>
                <input
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="Button" style={{ background: "teal" }}>
                    Register
                </button>
                <Link to="/login">
                    <button className="Button" style={{ background: "lightcoral", width: "100%"}}>
                        Login
                    </button>
                </Link>
                {error && (
                    <span className="errorMessage">Something went wrong!</span>
                )}
            </RegisterForm>
        </RegisterContainer>
    );
};

export default Register;
