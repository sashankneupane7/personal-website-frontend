import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Instagram, Twitter } from '../../../components/icons/SocialMedia'
import config from '../../../website-config'

const SideBarContainer = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background: grey;
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
  width: 80%;
  border-radius: 50%;
  border: 2px solid black;
`

const Bio = styled.p`
  padding: 30px;
`

const SideBarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;

  .link{
    text-decoration: none;
    color: #222;
  }
  .link:hover{
    color: black;
  }
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

  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async() => {
      const res = await axios.get(`${config.serverURL}/api/categories`)
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
      <SideBarContainer>
          <SideBarItem>
              <SideBarTitle>ABOUT ME</SideBarTitle>
              <ProfileImage
                  src={require("../../../content/img/knahsas.jpg").default}
              />
              <Bio>
                  I am Sashank Neupane, a student, tech enthusiast, and a problem-solver.
              </Bio>
          </SideBarItem>
          <SideBarItem>
              <SideBarTitle>Categories</SideBarTitle>
              <SideBarList>
                  {cats.map((c) => (
                      <Link className="link" key={c.name} to={`/blog/?cat=${c.name}`}>
                          <SideBarListItem key={c._id}>
                              {c.name}
                          </SideBarListItem>
                      </Link>
                  ))}
              </SideBarList>
          </SideBarItem>
          <SideBarItem>
              <SideBarTitle>FOLLOW ME</SideBarTitle>
              <SideBarSocial>
                  <Icon>
                      <Facebook />
                  </Icon>
                  <Icon>
                      <Twitter />
                  </Icon>
                  <Icon>
                      <Github />
                  </Icon>
                  <Icon>
                      <Instagram />
                  </Icon>
              </SideBarSocial>
          </SideBarItem>
      </SideBarContainer>
  );
}
