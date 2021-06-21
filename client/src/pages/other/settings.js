import React from 'react'
import styled from 'styled-components'
import SideBar from '../../components/BlogFolder/BlogPage/Sidebar'

const SettingsContainer = styled.div`
  display: flex;
`

const SettingsWrapper = styled.div`
  flex: 9;
  padding: 20px;
`

const SettingsTitle = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SettingsUpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
  

  @media screen and (max-width: 768px){
    font-size: 20px;
  }

`

const SettingsDeleteTitle = styled.span`
  color: red;
  font-size: 12px;
  cursor: pointer;
`
const SettingsForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
    margin-top: 20px;
  }

  input {
    color: grey;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgrey;
  }
`

const SettingsPp = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 ;
`

const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
`

const ProfilePictureIcon = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: lightcoral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`
const SettingsSubmit = styled.button`
  width: 150px;
  align-self: center;
  border: none;
  border-radius: 10px;
  color: white;
  background: teal;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
`

export default function Settings() {
  return (
    <SettingsContainer>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
          <SettingsDeleteTitle>Delete Account</SettingsDeleteTitle>
        </SettingsTitle>
        <SettingsForm>
          <label htmlFor="">Profile Picture</label>
          <SettingsPp>
            <ProfilePicture src={require('../../content/img/knahsas.jpg').default}/>
            <label htmlFor="fileInput"><ProfilePictureIcon><i className = "far fa-user-circle"></i></ProfilePictureIcon></label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          </SettingsPp>
          <label>Username</label>
          <input type="text" placeholder = "cat"/>
          <label>Email</label>
          <input type="email" placeholder = "cat@dog.com"/>
          <label>Password</label>
          <input type="password"/>
          <SettingsSubmit>Update</SettingsSubmit>
        </SettingsForm>
      </SettingsWrapper>
      <SideBar />
    </SettingsContainer>
  )
}
