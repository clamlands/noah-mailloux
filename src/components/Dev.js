import ccc from "../images/dev/ccc/ccc-card-750.webp";
import cock from "../images/dev/cocknoodlesoup/cock-card-750.webp";
import piano from "../images/dev/mjpiano/mjpiano-card-750.webp";
import etch from "../images/dev/mini-projects/etch.webp";
import tic from "../images/dev/mini-projects/tic.webp";
import memory from "../images/dev/mini-projects/memory.webp";
import ProjectCard from "./projects/ProjectCard";
import noah6 from "../images/final/noah6-800.webp";
import { useEffect } from "react";

export default function Shows() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <main>
      <h1 className="green">Development</h1>
      <div className="about about-flip margin-bottom-med">
        <div className="about-text">
          <p>I design and develop hand-coded responsive websites.</p>
          <p>
            I draw inspiration from many sources and incorporate the best
            aspects of what I see to give every website I build its own unique
            look and feel.
          </p>
          <p>
            Every website I build is optimized to function and look great on all
            devices.
          </p>
          <p>Scroll down to see examples of my completed projects.</p>
        </div>
        <img
          src={noah6}
          alt="Noah"
          className="mobile-full-width music-pic margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
      </div>
      <h2 className="green">Projects</h2>
      <div className="project-cards margin-bottom-small">
        <ProjectCard
          img={ccc}
          title="Cheshire Cat Comedy"
          localLink="ccc"
          liveLink="https://cheshirecatcomedy.com"
        ></ProjectCard>
        <ProjectCard
          img={cock}
          title="Cocknoodlesoup"
          localLink="soup"
          liveLink="https://clamlands.github.io/cocknoodlesoup/"
        ></ProjectCard>
        <ProjectCard
          img={piano}
          title="Matt Jordan's Piano Studio"
          localLink="mjpiano"
          liveLink="https://clamlands.github.io/mjpiano"
        ></ProjectCard>
        <div className="blank"></div>
      </div>
      {/* <a href="https://github.com/clamlands" target="_blank" rel="noreferrer">
        My Github
      </a> */}
      <h2 className="green">Mini Projects</h2>
      <h3>Games</h3>
      <div className="project-cards">
        <div>
          <a
            href="https://clamlands.github.io/etch-a-sketch/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={etch} alt="Etch-A-Sketch" />
          </a>

          <a
            href="https://clamlands.github.io/etch-a-sketch/"
            className="no-underline"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Virtual Etch-A-Sketch</h3>
          </a>
        </div>
        <div>
          <a
            href="https://clamlands.github.io/tic-tac-toe/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tic} alt="Tic-Tac-Toe" />
          </a>
          <a
            href="https://clamlands.github.io/tic-tac-toe/"
            className="no-underline"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Tic-Tac-Toe</h3>
          </a>
        </div>
        <div>
          <a
            href="https://clamlands.github.io/memory-card/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={memory} alt="Memory Cards" />
          </a>
          <a
            href="https://clamlands.github.io/memory-card/"
            className="no-underline"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Memory Cards</h3>
          </a>
        </div>
      </div>
    </main>
  );
}
