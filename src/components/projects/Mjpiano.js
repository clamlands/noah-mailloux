import site from "../../images/dev/mjpiano/site.png";
import { useEffect } from "react";

export default function CCC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="dev-info-top">
        <h1 className="green">Matt Jordan's Piano Studio</h1>
        <a
          href="https://clamlands.github.io/mjpiano"
          target="_blank"
          rel="noreferrer"
          className="smaller-text"
        >
          Go to live site
        </a>
      </div>
      <img
        src={site}
        alt=""
        className="margin-bottom-med"
        width="1000"
        height="667"
      />
      <h2 className="green">About</h2>
      <div className="dev-info-text">
        <p>
          I redesigned this website for a piano teacher who had been previously
          paying monthly for Squarespace. After being hand-coded, the website is
          now hosted for free on Netlify.
        </p>
        <p>
          It's a very simple website that gives information about the teacher,
          his teaching style & perspectives, and his studio policies. The site
          also showcases examples of his piano playing in the form of audio
          clips and an embedded YouTube video.
        </p>
      </div>
    </main>
  );
}
