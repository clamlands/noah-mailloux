import noah4 from "../images/final/noah4-800.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="about margin-bottom-small">
        <img
          src={noah4}
          alt="Noah"
          className="home-pic mobile-full-width margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
        <div className="about-text">
          <p>Howdy!</p>
          <p>
            My name is Noah and I am a{" "}
            <Link to="/comedy" className="blue">
              stand-up comedian
            </Link>
            ,{" "}
            <Link to="/music" className="purple">
              musician
            </Link>
            , and{" "}
            <Link to="/dev" className="green">
              web developer/designer{" "}
            </Link>
            based in Madison, WI.
          </p>
          <p>
            If I'm not doing any of the things above, I'm probably rock climbing
            or playing Runescape.
          </p>
        </div>
      </div>
      {/* <div className="home-cards">
        <Link to="/comedy" className="home-card">
          Comedy
        </Link>
        <Link to="/music" className="home-card">
          Music
        </Link>
        <Link to="/dev" className="home-card">
          Development
        </Link>
      </div>
      <div className="single-background">
        <div className="single"></div>
      </div> */}
    </main>
  );
}
