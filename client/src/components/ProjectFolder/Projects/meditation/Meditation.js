import React, { useState, useEffect, useRef } from "react";
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
} from "./MeditationElements";
import "./meditate.css";

function msToTimeString(ms) {
	let seconds = Math.floor(ms / 1000) % 60;
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

		const vidRef = useRef(null);

	useEffect(() => {
		isPlaying && time > 0 && setTimeout(() => setTime(time - 100), 100);
	}, [time, isPlaying]);
	if (time === 0){
		setIsPlaying(isPlaying => !isPlaying)
	}
	const playPause = () => {
		if (time > 0) {
			setIsPlaying(!isPlaying);
			if (isPlaying && time > 0) {
				vidRef.current.pause();
			} else {
				vidRef.current.play();
			}
		}
	};

	return (
		<>
			<video ref={vidRef} id="video" key={video} playsInline loop>
				<source
					src={require(`./content/videos/${video}.mp4`).default}
					type="video/mp4"
				/>
			</video>
			<Header className={isPlaying ? "zen" : ""}>Meditate with Sash</Header>
			<Containers>
				<LeftContainer className={isPlaying ? "zen" : ""}>
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
								if (!isPlaying && e.target.value > 0) {
									setTime(Number(e.target.value) * 60 * 1000);
								}
								console.log(time);
							}}
							onBlur={(e) => (e.target.placeholder = "Custom")}
							onFocus={(e) => (e.target.placeholder = "")}
							onKeyUp={(e) => {
								if (time > 0 && e.key === "Enter") {
									setIsPlaying(true);
									setTime(e.target.value);
								}
							}}
						/>
					</BtnWrapper>
				</LeftContainer>
				<CenterContainer>
					<div>
						<PpImg
							onClick={playPause}
							src={
								isPlaying && time > 0
									? require("./content/images/pause.png").default
									: require("./content/images/play.png").default
							}
							alt="playpause"
						/>
					</div>
					<Timer>{console.log(isPlaying, time)}{msToTimeString(time)}</Timer>
				</CenterContainer>
				<RightContainer className={isPlaying ? "zen" : ""}>
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
