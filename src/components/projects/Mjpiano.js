import site from "../../images/dev/mjpiano/site.png";
import space1 from "../../images/dev/mjpiano/space-1.png";
import space2 from "../../images/dev/mjpiano/space-2.png";

export default function MjPiano() {
  return (
    <article className="margin-top-med fade-in">
      <h1 className="margin-bottom-zero">Matt Jordan's Piano Studio</h1>
      <h3 className="margin-bottom-zero">React.js | CSS</h3>
      <a
        href="https://clamlands.github.io/mjpiano"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="margin-bottom-small">Full site here</h3>
      </a>
      <p className="margin-bottom-small">
        I redesigned and hand-coded this website for a piano teacher who had
        been previously paying monthly for a SaaS. It's a very simple website
        that gives information about the teacher, his teaching style &
        perspectives, and his studio policies.
      </p>
      <img
        src={site}
        alt="Home page"
        className="margin-bottom-med"
        width="1482"
        height="988"
      />

      <h2>Features & Design Considerations</h2>
      <h3>Spacing</h3>
      <p className="margin-bottom-small">
        Designing this website was a lesson in giving the content on the page
        space to breathe. When there is so much informational content, one can
        feel inclined to cram too much of it into the view window. It's
        important to remember that the end user is not afraid of scrolling. If
        the content they've seen so far looks inviting, they will scroll
        instinctively. Give them a chance to discover what's on the page
        themselves instead of trying to throw it in their face. To see a real
        example, compare the before and after screenshots of the My Studio page
        below. The first image feels claustrophobic, whereas the second image,
        by comparison, puts the eyes at ease.
      </p>
      <img
        src={space1}
        alt=""
        width="1344"
        height="1089"
        className="margin-bottom-small"
      />
      <img src={space2} alt="" width="1346" height="1090" />
      {/* <div className="dev-info-top">
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
      </div> */}
      <hr />
    </article>
  );
}
