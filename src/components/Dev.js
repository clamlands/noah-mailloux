import { useEffect, useState } from "react";
import ccc from "../images/dev/ccc/ccc-card.webp";
import cock from "../images/dev/cocknoodlesoup/cock-card.webp";
import piano from "../images/dev/mjpiano/piano2.jpg";
import etch from "../images/dev/mini-projects/etch2.png";
import tic from "../images/dev/mini-projects/tic2.png";
import memory from "../images/dev/mini-projects/memory2.png";
import ProjectCard from "./projects/ProjectCard";
import noah6 from "../images/final/noah6-800.webp";

export default function Shows() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [infoPageArray, setInfoPageArray] = useState([false, false, false]);
  function updatePageInfoArray(index) {
    const tempArray = infoPageArray;
    tempArray.fill(false);
    console.log(tempArray);
    tempArray[index] = true;
    console.log(tempArray);
    setInfoPageArray(tempArray);
    console.log(infoPageArray);
  }
  return (
    <main>
      <div className="about about-flip margin-bottom-med margin-top-small">
        <div className="about-text">
          <p>I design and develop hand-coded, responsive websites.</p>
          <p>
            I draw inspiration from many sources and incorporate the best
            aspects of what I see to give every website I build its own unique
            look and feel.
          </p>
          <p>
            My designs are optimized to function and look great on all devices.
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
        {!infoPageArray[0] && (
          <ProjectCard
            img={ccc}
            title="Cheshire Cat Comedy"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="0"
            onClose={() => updatePageInfoArray}
          ></ProjectCard>
        )}

        <ProjectCard img={cock} title="Cocknoodlesoup"></ProjectCard>
        <ProjectCard
          img={piano}
          title="Matt Jordan's Piano Studio"
        ></ProjectCard>
      </div>
      {/* <a href="https://github.com/clamlands" target="_blank" rel="noreferrer">
        My Github
      </a> */}
      <h2 className="green">Mini Projects</h2>
      <h3>Games</h3>
      <div className="project-cards margin-bottom-med">
        <ProjectCard
          img={etch}
          title="Virtual Etch-A-Sketch"
          liveLink="https://clamlands.github.io/etch-a-sketch/"
          text="Pick a color and draw on an adjustable sized grid, made with pure JavaScript and CSS"
        ></ProjectCard>
        <ProjectCard
          img={tic}
          title="Tic-Tac-Toe"
          liveLink="https://clamlands.github.io/tic-tac-toe/"
          text="Play the classic two-player game, made in JavaScript"
        ></ProjectCard>
        <ProjectCard
          img={memory}
          title="Memory Cards"
          liveLink="https://clamlands.github.io/memory-card/"
          text="Don't click the same card twice! Test your memory with this game made with React.js"
        ></ProjectCard>
      </div>
    </main>
  );
}
