import noah5 from "../images/final/noah2-800.webp";
import YouTube from "react-youtube";
import { useEffect } from "react";

export default function Shows() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const opts = {
    height: "100%",
    width: "100%",
    // height: "559",
    // width: "994",
  };
  return (
    <main>
      <div className="about margin-bottom-med margin-top-small">
        <img
          src={noah5}
          alt="Noah"
          className="mobile-full-width music-pic margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
        <div className="about-text">
          <p>
            I've played piano for 17 years, and I perform for a variety of
            events ranging from small parties to weddings to corporate
            functions. I mainly play jazz and classical, but I'll learn anything
            I think sounds good.
          </p>
          <p>
            I also teach beginner-to-advance piano lessons to students of all
            ages.
          </p>
        </div>
      </div>
      <YouTube
        videoId="eb-XJIiS3OU"
        opts={opts}
        loading="lazy"
        className="mobile-full-width youtube "
      />
      <em className="smaller-text">
        30 minutes of improvisized jazz piano prior to a comedy show at Cafe
        Coda
      </em>
      <YouTube
        videoId="i0UJ2ZLiHzQ"
        opts={opts}
        loading="lazy"
        className="mobile-full-width youtube margin-top-med margin-bottom-med"
      />
      {/* <h2>Ideas</h2>
      <h2>Bits</h2>
      
      <h2>Compositions</h2>
      */}
    </main>
  );
}
