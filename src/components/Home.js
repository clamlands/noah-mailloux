import noah1 from "../images/final/noah1-800.webp";
import noah2 from "../images/me.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home">
      <div className="about">
        <img
          src={noah2}
          alt="Noah"
          className="home-pic mobile-full-width margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
        <div className="about-text">
          <p>Howdy!</p>
          <p>
            My name is Noah Mailloux and I am a{" "}
            <Link to="/comedy" className="blue home-link-blue">
              stand-up comedian
            </Link>
            ,{" "}
            <Link to="/music" className="purple home-link-purple">
              piano player
            </Link>
            {/* <Link to="/dev" className="green home-link-green">
              web developer/designer
            </Link>{" "} */}
            , and electrical engineer based in Minneapolis, MN.
          </p>
          <p>Sometimes I rock climb or play Runescape.</p>
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
