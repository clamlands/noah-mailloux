import home from "../../images/dev/noahmailloux/noah-home.webp";
import devgif from "../../images/dev/noahmailloux/devgif.gif";

export default function NoahMailloux() {
  return (
    <article className="margin-top-med fade-in">
      <h1 className="margin-bottom-zero">Noah Mailloux</h1>
      <h3 className="margin-bottom-small">React.js | CSS</h3>
      <p className="margin-bottom-small">
        You're on this website right now, which, as you've seen, is my hub for
        my comedy, music, and development portfolio. The desire to have my own
        website was what started my interest in web development. I was inspired
        by Bill Wurtz, a video creator/musician, who puts all of his music and
        other niche interests on his unorthodox-looking website. I love having a
        place for my creative projects that is independent from social media.
        When I first tried to make my own website, I took the "easier" route of
        using WordPress, but was immediately frustrated by how reliant I would
        be on templates and thus my lack of freedom to design the site how I
        really wanted—so I learned how to do it from the ground up.
      </p>
      <img
        src={home}
        alt="Home page of Noah Mailloux website"
        className="img-border margin-bottom-med"
        width="1284"
        height="1102"
      />
      <h2>Features & Design Considerations</h2>
      <h3>React States and Conditional Rendering</h3>
      <div className="dev-text margin-bottom-med">
        <img
          src={devgif}
          alt="GIF of dev page functionality"
          className="img-border floated"
          width="800"
          height="791"
        />
        <p>
          As you have seen, each project card on the development page can be
          clicked to display a full summary detailing aspects of the design, why
          I made the decisions I did, and how I implemented them. I initially
          gave each project page its own URL, but realized that it felt clunky
          needing to return to the previous page to view the rest of the
          projects. Now, after scrolling through the info of one project, the
          rest of the project cards are all still at the bottom. This is a much
          nicer effect, but it did take some extra development work to set up.
        </p>
        <p>
          I used React States to keep track of which project is currently active
          and to conditionally render the project info pages and the project
          cards. When a card is clicked, the State is changed and the page
          re-renders. The respective info page renders, and the card is
          unmounted.
        </p>
        <p>
          Once the info page renders, it is necessary to automatically scroll to
          the top of the section; otherwise the user would be left confused at
          what they clicked on. I made use of the React useRef hook and the
          scrollIntoView() method such that when any of the project cards are
          clicked, the page automatically scrolls to just after the H2
          "Projects" element. Finally, I added a CSS animation that changes the
          opacity from 0 to 100 over the course of 1 second when the component
          renders to give the functionality a natural feel.
        </p>
      </div>
      {/* <h3>Google Calendar API</h3> */}
      <hr />
    </article>
  );
}
