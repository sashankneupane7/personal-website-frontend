import React from 'react'
import styled from 'styled-components'


const LoginContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${require('../../content/img/blog-cover.jpg').default});
  background-repeat: no-repeat;
  background-size: cover;
`

const LoginTitle = styled.span`
  font-size: 50px;
`

const LoginForm = styled.form`
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
const LoginButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
const LoginRegisterButton = styled.button`
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


const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email..."/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password..."/>
        <LoginButton>
          Login
        </LoginButton>
        <LoginRegisterButton>
          Register
        </LoginRegisterButton>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
