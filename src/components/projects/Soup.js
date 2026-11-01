import home from "../../images/dev/cocknoodlesoup/home.png";
import heat from "../../images/dev/cocknoodlesoup/heat-square.png";
import base from "../../images/dev/cocknoodlesoup/clean-base-square.png";
import cockgif from "../../images/dev/cocknoodlesoup/cock-cropped-gif.gif";
import noise from "../../images/dev/cocknoodlesoup/noise.png";
import shows from "../../images/dev/cocknoodlesoup/shows.png";
import calendar from "../../images/dev/cocknoodlesoup/calendar.png";

export default function Soup() {
  return (
    <article className="margin-top-med fade-in">
      <h1 className="margin-bottom-zero">Cocknoodlesoup</h1>
      <h3 className="margin-bottom-zero">React.js | CSS</h3>
      <a
        href="https://clamlands.github.io/cocknoodlesoup/"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="margin-bottom-small">Full site here</h3>
      </a>
      <p className="margin-bottom-small">
        Cocknoodlesoup is the personal website for a stand-up comedian who
        wanted his own blog and a place to display his stand-up clips and
        upcoming shows. I designed this website to have the aesthetic of a
        literary website such as The Atlantic or The New Yorker, which offered
        an interesting opportunity to come up with some creative solutions.
      </p>
      <img
        src={home}
        alt=""
        width="1253"
        height="970"
        className="margin-bottom-med"
      />
      <h2>Features & Design Considerations</h2>
      <h3>Textured background</h3>
      <p className="margin-bottom-small">
        I wanted the website to give the feeling like it was printed on a
        newspaper, so I needed a way to make a gritty background. I achieved
        this by using a handy{" "}
        <a href="https://www.noisetexturegenerator.com/">noise generator</a>{" "}
        tool to create a 100 x 100 pixel square of white noise. I then used CSS
        background-image and background-repeat to have this small square
        repeated to make up the background for the entire website. Since the
        image is random, the effect is seamless—it's impossible to tell where
        the image stops and ends. This background coupled with an off-black
        hand-picked Serif font, "Crimson Text", was enough to achieve the style
        I was going for.
      </p>
      <img
        src={noise}
        alt=""
        width="891"
        height="506"
        className="img-border margin-bottom-med"
      />
      <h3>Logo Animation</h3>
      <p className="margin-bottom-small">
        The Contact page didn't require any information outside of just an email
        address, which left a lot of white space on the page. I decided to use
        this space to add a humorous Easter Egg animation. I took the original
        logo and used an image editor to parse the background and foreground
        into two separate images. Using CSS, I layered the two images on top of
        each other and then implemented React States such that, when clicked,
        the CSS Class of the background image updates to make it either visible
        or hidden. Finally, I added a transition time of 1.5s to make the
        animation look smooth.
      </p>
      <div className="vertical-images margin-bottom-med">
        <img
          src={base}
          alt="Base"
          width="1070"
          height="1070"
          className="img-border"
        />
        <img
          src={cockgif}
          alt="Gif"
          width="800"
          height="800"
          className="img-border"
        />
        <img
          src={heat}
          alt="Heat"
          width="1070"
          height="1070"
          className="img-border"
        />
      </div>
      <h3>Upcoming Shows</h3>
      <p className="margin-bottom-small">
        I was able to use the Google Calendar API to avoid the need for the
        comedian to manually update his upcoming shows on the website. On
        page-load the website calls the API and fetches the Date, Time,
        Location, and Show Name for each show directly from the comedian's
        personal Google Calendar.
      </p>
      <div className="vertical-images">
        <img src={shows} alt="" width="513" height="758" />
        <img src={calendar} alt="" width="1080" height="1595" />
      </div>

      {/* <div className="dev-info-top">
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
      </ul> */}
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
      <hr />
    </article>
  );
}
