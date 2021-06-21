import React from 'react'
import styled from 'styled-components'
import { Facebook, Github, Instagram, Twitter } from '../../../components/icons/SocialMedia'

const SideBarContainer = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const SideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`

const SideBarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 100%;
  border-top: 1px solid #a7a7a4;
  border-bottom: 1px solid #a7a7a4;
  font-size: 12px;
  color: #222;
  line-height: 20px;
  text-align: center;
`
const ProfileImage = styled.img`
  margin-top: 15px;
  width: 100%;
  border-radius: 50%;
  border: 2px solid black;
`

const Bio = styled.p`
  padding: 30px;
`

const SideBarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`

const SideBarListItem = styled.li`
  padding-left: 10px;
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`

const SideBarSocial = styled.ul`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;

  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`
const Icon = styled.li`
  margin: 0;
  fill: black;
  width: 35px;
  height: 35px;
  padding: 1px 3px;
  cursor: pointer;
`

export default function Sidebar() {
  return (
    <SideBarContainer>
      <SideBarItem>
        <SideBarTitle>ABOUT ME</SideBarTitle>
        <ProfileImage src={require('../../../content/img/knahsas.jpg').default} />
        <Bio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe natus! Tenetur quas et eius delectus inventore neque tempore voluptatum.</Bio>
      </SideBarItem>
      <SideBarItem>
        <SideBarTitle>Categories</SideBarTitle>
        <SideBarList>
          <SideBarListItem>Life</SideBarListItem>
          <SideBarListItem>Music</SideBarListItem>
          <SideBarListItem>Style</SideBarListItem>
          <SideBarListItem>Sport</SideBarListItem>
          <SideBarListItem>Cinema</SideBarListItem>
          <SideBarListItem>Tech</SideBarListItem>
        </SideBarList>
      </SideBarItem>
      <SideBarItem>
        <SideBarTitle>
          FOLLOW ME
        </SideBarTitle>
        <SideBarSocial>
          <Icon><Facebook /></Icon>
          <Icon><Twitter /></Icon>
          <Icon><Github /></Icon>
          <Icon><Instagram /></Icon>
        </SideBarSocial>
      </SideBarItem>
    </SideBarContainer>
  )
}
