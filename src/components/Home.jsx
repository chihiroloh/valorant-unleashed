import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./Home.css";
import backgroundVideo from "../videos/VAL_Ep6_Homepage-CG-Video_V5.mp4";

const Home = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        const playableAgents = response.data.data.filter(
          (agent) => agent.isPlayableCharacter
        );
        setAgents(playableAgents);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <header className="header-logo">{/* Header content */}</header>
      <NavBar />{" "}
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Valorant Unleashed</h1>
        </div>
      </div>
      <section className="introduction">
        <h1>About Me</h1>
        <p>
          Step into the realm of heroes and their arsenals at Valorant
          Unleashed! Here, the pulse of every ability thrums and the lore of
          every character unfolds. Ever wondered how Phoenix’s flames burn so
          bright or what secrets Cypher’s gadgets conceal? You're about to find
          out!
        </p>
        <p>
          Unearth the backstories that set the stage for our beloved agents,
          from the futuristic streets that Jett zips through, to the shadows
          where Reyna preys. This is where powers are not just listed, but
          brought to life with insider insights that will change the way you
          play.
        </p>
        <p>
          Get ready to master the art of each agent's unique abilities, from
          Sova’s piercing arrows to Sage’s life-giving touch. Dive deep into the
          details that make each character a universe in their own right.
          Valorant Agents Unleashed is your codex to the extraordinary - the
          ultimate destination for every fan who wants to know their heroes
          inside and out. Let the abilities astound you, the stories captivate
          you, and your own legend begin!
        </p>
      </section>
      <br />
      <div className="white">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">VIEW ALL AGENTS</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
