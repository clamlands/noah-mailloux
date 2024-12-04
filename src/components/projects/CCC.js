import ccc from "../../images/dev/ccc/ccc-1000.webp";
import { useEffect } from "react";

export default function CCC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="dev-info-top">
        <h1 className="green">Cheshire Cat Comedy</h1>
        <a
          href="https://cheshirecatcomedy.com"
          target="_blank"
          rel="noreferrer"
          className="smaller-text"
        >
          Go to live site
        </a>
      </div>
      <img
        src={ccc}
        alt=""
        className="margin-bottom-med"
        width="1000"
        height="667"
      />
      <h2 className="green">About</h2>
      <div className="dev-info-text">
        <p>
          Cheshire Cat Comedy is a production group I am a part of that produces
          comedy shows in the Madison, WI area and beyond.
        </p>
        <p>
          I made this website as a hub for ticket purchasers, performers, and
          venues to be able to see the variety of shows we produce and be able
          reach out to us. Prior to the creation of this website, our online
          presence was broadly spread across various social media platforms.
        </p>
        <p>
          Since its inception we've seen an increase in contacts from venues and
          press who've found our contact information via the website. This
          includes the Wisconsin State Journal (WSJ) who interviewed us for{" "}
          <a
            href="https://madison.com/life-entertainment/local/art-theater/madison-comedy-scene/article_1f898a32-7422-11ee-9235-1b9c205f80d2.html"
            target="_blank"
            rel="noreferrer"
          >
            a piece on the comedy scene in Madison, WI.
          </a>{" "}
          After the interview, WSJ featured a couple of our shows on the front
          page of their website resulting in extremely good ticket sales.
        </p>
      </div>

      <h2 className="margin-top-med green">
        Interesting features & design considerations
      </h2>
      <ul className="dev-features">
        <li>
          The "Upcoming Shows" section on the homepage is populated through the
          use of the Eventbrite API. It grabs the show Title, Date, Time, Venue,
          and even the Promo Graphic. This means the upcoming shows are
          automatically updated on the website as soon as any changes are made
          on the ticketing platform.
        </li>
        <li>
          The main photo at the top of the home page is randomly selected out of
          a group of 10+ photos every time the page loads.
        </li>
      </ul>
    </main>
  );
}
