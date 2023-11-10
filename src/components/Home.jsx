import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./Home.css";
import backgroundVideo from "../videos/VAL_Ep6_Homepage-CG-Video_V5.mp4";
import { useNavigate } from "react-router-dom";

// Video Section Component
const VideoSection = (props) => (
  <div className="video-container">
    <video className="background-video" autoPlay loop muted>
      <source src={props.videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay">
      <h1>{props.title}</h1>
    </div>
  </div>
);

// Introduction Section Component
const IntroductionSection = ({ textBlocks }) => (
  <section className="introduction">
    <br />
    <h1 className="about">About</h1>
    {textBlocks.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </section>
);

// View Agents Button Component
const ViewAgentsButton = ({ onClick }) => (
  <div className="button-container">
    <div className="white" onClick={onClick}>
      <p>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">VIEW ALL AGENTS</span>
      </p>
    </div>
  </div>
);

// Home Component
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        setAgents(
          response.data.data.filter((agent) => agent.isPlayableCharacter)
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleViewAgentsClick = () => {
    navigate("/agents");
  };

  const introductionText = [
    "Step into the realm of heroes and their arsenals at Valorant Unleashed! Here, the pulse of every ability thrums and the lore of every character unfolds. Ever wondered how Phoenix’s flames burn so bright or what secrets Cypher’s gadgets conceal? You're about to find out!",
    "Unearth the backstories that set the stage for our beloved agents, from the futuristic streets that Jett zips through, to the shadows where Reyna preys. This is where powers are not just listed, but brought to life with insider insights that will change the way you play.",
    "Get ready to master the art of each agent's unique abilities, from Sova’s piercing arrows to Sage’s life-giving touch. Dive deep into the details that make each character a universe in their own right. Valorant Agents Unleashed is your codex to the extraordinary - the ultimate destination for every fan who wants to know their heroes inside and out. Let the abilities astound you, the stories captivate you, and your own legend begin!",
  ];

  return (
    <div>
      <NavBar />
      <VideoSection videoSource={backgroundVideo} title="Valorant Unleashed" />
      <IntroductionSection textBlocks={introductionText} />
      <ViewAgentsButton onClick={handleViewAgentsClick} />
    </div>
  );
};

export default Home;
