import cock from "../../images/dev/cocknoodlesoup/cock2-1000.webp";
import { useEffect } from "react";

export default function CCC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="dev-info-top">
        <h1 className="green">Cocknoodlesoup</h1>
        <a
          href="https://clamlands.github.io/cocknoodlesoup/"
          target="_blank"
          rel="noreferrer"
          className="smaller-text"
        >
          Go to live site
        </a>
      </div>
      <img
        src={cock}
        alt=""
        className="margin-bottom-med"
        width="1000"
        height="667"
      />
      <h2 className="green">About</h2>
      <div className="dev-info-text">
        <p>
          Cocknoodlesoup is the personal website for a stand-up comedian. I
          designed this website to have the aesthetic of a literary website such
          as The Atlantic or The New Yorker. This site features a blog, displays
          upcoming shows, and has clips of the comedian's stand-up.
        </p>
      </div>
      <h2 className="margin-top-med green">
        Interesting features & design considerations
      </h2>
      <ul className="dev-features">
        <li>
          The "Upcoming Shows" section on the homepage is populated through the
          use of the Google Calendar API. It grabs the Title, Date, Time, and
          Location from each event on the comedian's Google Calendar. This means
          the upcoming shows are automatically updated on the website as soon as
          any changes are made on the comedian's calendar.
        </li>
        <li>
          The background is made to mimic textured canvas. This was achieved by
          generating a small square of white noise and using it as a repeated
          background along with a combination of css styles.
        </li>
        <li>
          The "Click to Cook Cock" image on the Contact page fades in the steam
          background. I did this by first editing a version of the image to
          remove the background and then saving the background as its own image.
          Now that I had two images, one which is the original with the
          background removed and then one which is the background itself, I used
          Reacts States to keep track of whether the image has been clicked to
          be "cooked" or not. The background image is overlayed on the
          removed-background image and then fades in and out along with the
          instructional text.
        </li>
        <li>
          This website contains a blog that is displayed from hard-coded text.
          Each blog post is an object within an array. The blog "cards" on the
          homepage and the blog page are generated from this array. I used React
          Router to automatically generate individual blog pages based on each
          entry. For example cocknoodlesoup.com/blog/0 is the URL for the very
          first blog post, and so on.
        </li>
      </ul>
      {/* 
      <h2 className="margin-top-med">
        Interesting features & design considerations
      </h2>

      <h3>Features:</h3>
      <ul className="dev-features">
        <li>"Upcoming Shows" uses Google Calendar API</li>
        <li>"click to cook cock"</li>
        <li>making the blog</li>
        <li>Paper background made with static generator</li>
      </ul> */}
    </main>
  );
}
