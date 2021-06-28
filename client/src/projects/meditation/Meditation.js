import React, { useState } from "react";
import {
	Header,
	Containers,
	LeftContainer,
	CenterContainer,
	RightContainer,
	Input,
	BtnWrapper,
	IconContainer,
	Icon,
	Timer,
	PpImg,
	Video,
} from "./MeditationElements";

function msToTimeString(ms) {
	let seconds = (ms / 1000) % 60;
	let minutes = Math.floor(ms / 1000 / 60) % 60;
	let hours = Math.floor(ms / 1000 / 60 / 60);

	seconds = ("0" + seconds).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	hours = ("0" + hours).slice(-2);

	return `${hours === "00" ? "" : hours + ":"}${minutes}:${seconds}`;
}

const Meditation = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [time, setTime] = useState(300000);
	const [video, setVideo] = useState("fire");
	return (
		<>
			<Video playsInline loop>
				<source
					src={require(`./content/videos/${video}.mp4`).default}
					type="video/mp4"
				/>
			</Video>
			<Header>Meditate with Sash</Header>
			<Containers>
				<LeftContainer>
					<BtnWrapper>
						<Input
							type="button"
							value="2 Minutes"
							onClick={() => setTime(120000)}
						/>
					</BtnWrapper>
					<BtnWrapper>
						<Input
							type="button"
							value="5 Minutes"
							onClick={() => setTime(300000)}
						/>
					</BtnWrapper>
					<BtnWrapper>
						<Input
							type="button"
							value="10 Minutes"
							onClick={() => setTime(600000)}
						/>
					</BtnWrapper>
					<BtnWrapper>
						<Input
							type="text"
							className="inputBox"
							onLoad={(e) => (e.target.placeholder = "Custom")}
							onChange={(e) => {
								if (!isPlaying) {
									setTime(Number(e.target.value) * 60 * 1000);
								}
								console.log(time);
								if (time <= 0) {
									setIsPlaying(false);
								}
							}}
							onBlur={(e) => (e.target.placeholder = "Custom")}
							onFocus={(e) => (e.target.placeholder = "")}
							onKeyUp={(e) => {
								if (time > 0 && e.key === "Enter") {
									setIsPlaying(true);
									setTime(e.target.value);
								} else {
									setIsPlaying(isPlaying);
								}
							}}
						/>
					</BtnWrapper>
				</LeftContainer>
				<CenterContainer>
					<div>
						<PpImg
							onClick={() => {
								setIsPlaying(!isPlaying);
							}}
							src={
								isPlaying && time > 0
									? require("./content/images/pause.png").default
									: require("./content/images/play.png").default
							}
							alt="playpause"
						/>
					</div>
					<Timer>{msToTimeString(time)}</Timer>
				</CenterContainer>
				<RightContainer>
					<IconContainer>
						<Icon
							src={require("./content/images/rain.png").default}
							onClick={() => setVideo("rain")}
						/>
					</IconContainer>
					<IconContainer>
						<Icon
							src={require("./content/images/wind.png").default}
							onClick={() => setVideo("wind")}
						/>
					</IconContainer>
					<IconContainer>
						<Icon
							src={require("./content/images/beach.png").default}
							onClick={() => setVideo("beach")}
						/>
					</IconContainer>
					<IconContainer>
						<Icon
							src={require("./content/images/fire.png").default}
							onClick={() => setVideo("fire")}
						/>
					</IconContainer>
				</RightContainer>
			</Containers>
		</>
	);
};

export default Meditation;
