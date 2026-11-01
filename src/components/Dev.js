import { useEffect, useState, useRef } from "react";
import CCCPage from "../components/projects/CCC";
import CockPage from "../components/projects/Soup";
import MjPianoPage from "../components/projects/Mjpiano";
import NoahPage from "../components/projects/NoahMailloux";
import MadisonLaughsPage from "../components/projects/MadisonLaughs";
import ccc from "../images/dev/ccc/ccc-card.webp";
import cock from "../images/dev/cocknoodlesoup/cock-card.webp";
import piano from "../images/dev/mjpiano/piano2.jpg";
import madisonCard from "../images/dev/madisonlaughs/madison-card.png";
import noahCard from "../images/dev/noahmailloux/noah-500.webp";
import etch from "../images/dev/mini-projects/etch2.png";
import tic from "../images/dev/mini-projects/tic2.png";
import memory from "../images/dev/mini-projects/memory2.png";
import ProjectCard from "./projects/ProjectCard";
import noah6 from "../images/final/noah6-800.webp";
import gitText from "../images/dev/githubtext.png";
import gitCat from "../images/dev/githubcat.png";

export default function Shows() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  const [infoPageArray, setInfoPageArray] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <main>
      <div className="about about-flip margin-bottom-med margin-top-small">
        <div className="about-text">
          <p>I am a front-end web developer and designer.</p>
          <p>
            I design and develop hand-coded, responsive websites. I draw
            inspiration from many sources and incorporate the best aspects of
            what I see to give every website I build its own unique look and
            feel.
          </p>
          <p>
            My designs are optimized to function and look great on all devices.
          </p>
          <p>
            Click on the project cards below to read an overview of each,
            detailing aspects of the design, why I made the decisions I did, and
            how I implemented them.
          </p>
          <a
            href="https://github.com/clamlands?tab=overview&from=2025-01-01&to=2025-01-09"
            target="_blank"
            rel="noreferrer"
          >
            <div className="github">
              <img
                src={gitText}
                alt=""
                className="gittext"
                width="1000"
                height="410"
              />
              <img
                src={gitCat}
                alt=""
                className="gitcat"
                width="230"
                height="225"
              />
            </div>
          </a>
        </div>
        <img
          src={noah6}
          alt="Noah"
          className="mobile-full-width music-pic margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
      </div>
      <h2 className="green" ref={ref}>
        Projects
      </h2>
      {infoPageArray[0] && <CCCPage></CCCPage>}
      {infoPageArray[1] && <MadisonLaughsPage></MadisonLaughsPage>}
      {infoPageArray[2] && <CockPage></CockPage>}
      {infoPageArray[3] && <NoahPage></NoahPage>}
      {infoPageArray[4] && <MjPianoPage></MjPianoPage>}

      <div className="project-cards margin-bottom-small">
        {!infoPageArray[0] && (
          <ProjectCard
            img={ccc}
            title="Cheshire Cat Comedy"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="0"
            refProp={ref}
          ></ProjectCard>
        )}
        {!infoPageArray[1] && (
          <ProjectCard
            img={madisonCard}
            title="Madison Laughs"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="1"
            refProp={ref}
          ></ProjectCard>
        )}
        {!infoPageArray[2] && (
          <ProjectCard
            img={cock}
            title="Cocknoodlesoup"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="2"
            refProp={ref}
          ></ProjectCard>
        )}
        {!infoPageArray[3] && (
          <ProjectCard
            img={noahCard}
            title="Noah Mailloux"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="3"
            refProp={ref}
          ></ProjectCard>
        )}
        {!infoPageArray[4] && (
          <ProjectCard
            img={piano}
            title="Matt Jordan's Piano Studio"
            infoPageArray={infoPageArray}
            setInfoPageArray={setInfoPageArray}
            index="4"
            refProp={ref}
          ></ProjectCard>
        )}
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
