import styled from 'styled-components';
import {Button} from '../../ButtonElement'

export const ProjectContainer = styled.div`
  color: white;
  background: ${({dark}) => (dark ? '#010606' : '#f9f9f9')};
  min-height: calc(100vh - 30px);

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const ProjectRow = styled.div`
  padding-top: 60px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0 50px;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({dark})=> (dark ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({dark})=> (dark ? '#fff' : '#010606')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

export const ProjectElement = ({id, dark, imgStart, topline, headline, description, buttonLabel, imgsrc, primary}) => {
  return (
		<>
			<ProjectContainer dark={dark} id={id}>
				<ProjectWrapper>
					<ProjectRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topline}</TopLine>
								<Heading dark={dark}>{headline}</Heading>
								<Subtitle dark={dark}>{description}</Subtitle>
							</TextWrapper>
							<BtnWrap>
								<Button
									to="/projects/meditation"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									primary={primary ? 1 : 0}
									dark={dark ? 1 : 0}
								>
									{buttonLabel}
								</Button>
							</BtnWrap>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={imgsrc} alt="car" />
							</ImgWrap>
						</Column2>
					</ProjectRow>
				</ProjectWrapper>
			</ProjectContainer>
		</>
	);
}