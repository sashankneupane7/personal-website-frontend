import React from 'react'
import styled from 'styled-components'


const RegisterContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${require('../../content/img/blog-cover.jpg').default});
  background-repeat: no-repeat;
  background-size: cover;
`

const RegisterTitle = styled.span`
  font-size: 50px;
`

const RegisterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0;
  }

  input {
    padding: 10px;
    background-color: white;
    border: none;

  }
`
const RegisterButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
const RegisterLoginButton = styled.button`
  position: absolute;
  top: 100px;
  right: 60px;
  font-size: 15px;
  background-color: teal;
  border-radius: 10px;
  padding: 7px 10px;
  cursor: pointer;
  border: none;
  color: white;
`


const Register = () => {
  return (
    <RegisterContainer>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm>
      <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username..."/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email..."/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password..."/>
        <RegisterButton>
          Register
        </RegisterButton>
        <RegisterLoginButton>
          Login
        </RegisterLoginButton>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default Register
