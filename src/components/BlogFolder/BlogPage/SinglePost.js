import React from 'react'
import styled from 'styled-components'

const SinglePostContainer = styled.div`
  flex: 9;
`

const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
  border-radius: 10px;
`

const SinglePostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
`

const SinglePostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 28px;

`

const SinglePostEdit = styled.div`
  float: right;
  font-size: 16px;
`

const Icons = styled.span`
  margin-left: 10px;
  cursor: pointer;

  &:first-child {
    color: green;
  }

  &:last-child {
    color: red;
  }
`

const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: grey;
`

const SinglePostAuthor = styled.span`

`

const SinglePostDate = styled.span`

`

const Description = styled.p`
  color: black;
  font-size: 18px;
  line-height: 25px;

  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`

const SinglePost = () => {
  return (
    <>
      <SinglePostContainer>
        <SinglePostWrapper>
          <SinglePostImage src={require('../../../content/img/blog-cover.jpg').default}/>
          <SinglePostTitle>Lorem ipsum, dolor.
            <SinglePostEdit><Icons><i className="far fa-edit" /></Icons><Icons><i className="far fa-trash-alt" /></Icons>
          </SinglePostEdit>
          
          </SinglePostTitle>
          <SinglePostInfo>
            <SinglePostAuthor>Author: <b>Sashank Neupane</b></SinglePostAuthor>
          <SinglePostDate> 1 hour ago</SinglePostDate>
          </SinglePostInfo>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus, impedit debitis tempora tenetur voluptatibus magni distinctio similique fuga soluta ex voluptatum cumque porro quam itaque consequatur error iure in sapiente odio perspiciatis ullam quo explicabo? Velit, animi. Cum dicta sit, adipisci reprehenderit repudiandae obcaecati autem optio culpa totam quaerat, amet natus dolorem eos debitis quod eum. Amet officiis possimus optio, cum quasi numquam architecto hic et quia expedita nemo molestias maxime nihil fuga commodi, nostrum porro culpa cumque distinctio odit. Atque totam dolor quas, ipsam omnis id iusto. Consequatur officia nobis pariatur necessitatibus ad ducimus amet quisquam autem nostrum, eius numquam ut, ratione dolore dicta nulla! Eaque officia velit cumque minus neque officiis atque, ducimus tempore saepe odio doloremque quae voluptates? Dolorem ducimus laborum aliquid, dolores ea, officiis repellat fugiat voluptas porro quos ad pariatur similique fuga natus, velit minima? Eaque animi molestias corrupti. Deleniti odit perspiciatis aliquam commodi, nisi nam numquam magnam vitae amet natus, dolorum illum distinctio alias nulla, nemo omnis corporis dolorem est ea voluptate quod. Soluta molestiae veritatis eum recusandae distinctio dicta voluptas exercitationem necessitatibus nesciunt natus in officia quam unde, non ipsum eveniet quisquam! Ab quaerat tempora id non saepe, est doloremque debitis earum! Deleniti praesentium, dolor porro laudantium doloribus, officiis voluptas nam at sapiente amet fugiat tenetur soluta maiores error obcaecati architecto illum rem earum commodi quas iusto? Nihil dolor repellat, voluptate animi laborum optio laboriosam soluta labore architecto deleniti sit odio sunt magnam quaerat? At quam aperiam doloremque quisquam temporibus labore obcaecati ratione dolore consectetur aspernatur provident quae reprehenderit ipsam velit vitae tempore neque officiis, voluptate ducimus facere cupiditate doloribus rerum sit corporis! Labore aliquid facere cumque, accusantium dolor quia commodi fugiat deserunt explicabo ipsum minima magnam modi natus facilis delectus vero, quisquam sequi inventore eius suscipit voluptas ut aspernatur dicta? Consequuntur magni voluptate consequatur provident beatae eligendi praesentium inventore velit omnis repellendus, maiores doloribus est minus veritatis, error, aspernatur laboriosam molestiae nemo hic incidunt ratione nam sint. Accusamus, molestiae nobis! Qui impedit animi illo expedita quasi magni perspiciatis vitae! Accusantium quaerat tenetur esse cupiditate non a fugit similique nulla exercitationem, doloribus tempora in obcaecati asperiores maiores officia dolorem rerum nemo quo facilis optio! Molestias, obcaecati ut! Illum sapiente eaque suscipit tenetur eos est consectetur, voluptate nam quidem voluptatem aliquam, impedit doloremque blanditiis dolorem explicabo molestias sequi? Voluptas fugiat blanditiis dolorem odio tempora, sequi temporibus veniam quos, explicabo inventore et est beatae debitis totam facilis dignissimos sunt suscipit! Amet cupiditate, atque error rem similique iure quae. Molestias minus labore at commodi, earum sunt corporis quibusdam, exercitationem deleniti odit distinctio consequuntur non quis quia? Architecto quas veritatis saepe ipsam ratione similique animi, dolor alias odio, veniam placeat eum commodi mollitia libero incidunt a impedit, quisquam beatae debitis quidem odit? Ipsam, nesciunt nobis facilis atque at, illum repellendus quidem iure voluptas neque deserunt blanditiis deleniti iste fugiat? Nesciunt quos sed autem eum. Similique expedita iste rem tempora, inventore exercitationem dolor, error ad eligendi laborum velit hic aspernatur saepe, et doloribus porro omnis eaque animi.
          </Description>
        </SinglePostWrapper>
      </SinglePostContainer>
    </>
  )
}
// <i class="fa-solid fa-pen-to-square"></i>
export default SinglePost
