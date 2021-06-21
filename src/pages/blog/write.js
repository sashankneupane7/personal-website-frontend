import React from 'react'
import styled from 'styled-components'
import './css/write.css'

const WriteContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const WriteForm = styled.form`
  position: relative;
`
const WriteImage = styled.img`
  margin: 0 auto;
  width: 80vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`

const WriteFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80vw;
  margin: 0 auto;
`

const WriteSubmit = styled.button`
  color: white;
  background-color: teal;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`

export default function Write() {
  return (
    <WriteContainer>
      <WriteImage src= {require('../../content/img/blog-cover.jpg').default}/>
      <WriteForm>
        <WriteFormGroup>
          <label className="writeIcon" htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input className="writeInput" type="text" placeholder="Title" autoFocus={true}/>
          <WriteSubmit>Publish</WriteSubmit>
        </WriteFormGroup>
        <WriteFormGroup>
          <textarea className= "writeText writeInput" placeholder="Tell your story..." type="text"></textarea>
        </WriteFormGroup>
      </WriteForm> 
    </WriteContainer>
  )
}
