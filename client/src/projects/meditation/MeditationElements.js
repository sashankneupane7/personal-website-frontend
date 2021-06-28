import styled from "styled-components";

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
`

export const Header = styled.div`
	padding-top: 30px;
	position: fixed;
	width: 100%;
	font-weight: 500;
	font-size: 35px;
	text-align: center;
`;

export const Containers = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-around;
  width: 100vw;
  height: calc(100vh - 80px - 90px);

	* {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;

export const LeftContainer = styled.div`
	margin: 25vh 0;
	width: 25%;
	padding: 0 10px 0 5px;
`;

export const CenterContainer = styled.div`
	margin: 20vh 0;
	width: 50%;
	padding: 0 10px 0 0;
`;

export const RightContainer = styled.div`
	margin: 20vh 0;
	width: 25%;
`;

export const BtnWrapper = styled.div`
  margin: 10px auto;
  max-width: 100px;
	height: 33.333vh;
	align-items: center;
	text-align: center;
	font: bold 3rem center;
	height: 10vh;
  cursor: pointer;
  padding: 10px;
  border: black 1px solid;
  border-radius: 10px;

  .inputBox {
    text-align: center;
    cursor: text;
  }

  .inputBox:focus{
    outline: none;
  }
`;

export const Input = styled.input`
	background: none;
	border: none;
	opacity: 0.9;
	color: black;
  cursor: pointer;
`;

export const PpImg = styled.img`
  padding-bottom: 20px;
  margin: 0 auto;
  max-width: 200px;
  cursor: pointer;
`

export const Timer = styled.div`
  align-items: center;
  font-size: 30px;
`

export const IconContainer = styled.div`
	height: 33.333vh;
	align-items: center;
	text-align: center;
	font: bold 3rem center;
`;

export const Icon = styled.img`
  height: 90px;
  width: 90px;
  max-height: 10vw;
  max-width: 10vw;
  padding: 5px;
  cursor: pointer;
`