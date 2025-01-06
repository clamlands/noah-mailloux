import ccc from "../../images/dev/ccc/ccc-1000.webp";
import shows from "../../images/dev/ccc/shows-crop.png";
import home from "../../images/dev/ccc/home-crop.png";
import homesmall from "../../images/dev/ccc/home-small.png";
import gallery from "../../images/dev/ccc/gallery-crop.png";
import hover from "../../images/dev/ccc/hover-pointer-crop2.png";
import mobile from "../../images/dev/ccc/mobile-2.png";
import mobilenav from "../../images/dev/ccc/mobile-nav-2.png";
import mobileclip from "../../images/dev/ccc/mobile-clip.gif";
import { useEffect } from "react";

export default function CCC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="margin-top-med">
      <h1 className="margin-bottom-zero">Cheshire Cat Comedy</h1>
      <h3 className="margin-bottom-zero">React.js | CSS</h3>
      <a href="https://cheshirecatcomedy.com/" target="_blank" rel="noreferrer">
        <h3 className="margin-bottom-small">Full site here</h3>
      </a>
      <div className="dev-text margin-bottom-small">
        <p>
          Cheshire Cat Comedy is a production company I am a part of that
          produces comedy shows in the Madison, WI area and beyond. To a great
          boon to the company, I initiated and solely designed, developed, and
          actively maintain CheshireCatComedy.com
        </p>
        <p>
          Prior to the creation of this website, our online presence was broadly
          spread across various social media platforms. I made this website so
          that customers, performers, and venues could get an impression of the
          variety and quality of shows we produce and be able to purchase
          tickets and contact us.
        </p>
        <p>
          Since its inception we've seen an increase in communication from
          venues and the press who have found our contact information via the
          website. This includes, for example, the Wisconsin State Journal who
          interviewed us for{" "}
          <a
            href="https://madison.com/life-entertainment/local/art-theater/madison-comedy-scene/article_1f898a32-7422-11ee-9235-1b9c205f80d2.html"
            target="_blank"
            rel="noreferrer"
          >
            a piece on the comedy scene in Madison, WI
          </a>
          , and in turn featured our shows on their front page, resulting in a
          dramatic increase in ticket sales.
        </p>
      </div>
      <img
        src={home}
        alt="Home page of Cheshire Cat Comedy website"
        className="img-border margin-bottom-med"
        width="1629"
        height="1173"
      />
      <h2>Features & Design Considerations</h2>
      <h3>Upcoming Shows</h3>
      <div className="dev-text margin-bottom-small">
        <p>
          It was important for the front page to feature all of our upcoming
          shows, as this is the focal point of the business; however, with
          upwards of 10 shows per month, updating this manually would be
          massively time-consuming and error-prone. Fortunately, the ticketing
          service we use, Eventbrite, has an API that can be used to retrieve
          data for events. I was able to implement the Eventbrite API such that
          on page-load the website retrieves the Title, Date, Time, Location,
          Ticket Link, and Graphic for each upcoming show. The data is passed
          into a React component that creates a "card" for each show. Despite
          this being a static site, the API key is made private and secure
          through the use of Netlify's Environment Variables feature.
        </p>
        <p>
          For styling implementation, I am a big fan of using CSS Grid to
          display "cards" such as these. In this specific example, I use{" "}
          <b>grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))</b> so
          that cards will shrink and grow elegantly to always fit the screen
          size without falling below 350px wide.
        </p>
      </div>
      <img
        src={shows}
        alt="Upcoming Shows section"
        className="img-border margin-bottom-med"
        width="1597"
        height="914"
      />
      <h3>Gallery</h3>
      <div className="dev-text margin-bottom-small">
        <p>
          We've worked with great photographers to get professional quality
          photos for the website. In order to have a more aesthetically pleasing
          gallery page, I implemented a masonry layout, which displays the
          photos in a sort of asymmetrical grid resembling a brick wall. I also
          gave each photo a hover effect that displays a link to the respective
          photographer's portfolio.
        </p>
        <p>
          I initially standardized the photos strictly to two aspect ratios—3:2
          and 2:3; however, for multiple reasons, this did not achieve the
          desired effect. For one, despite having a mix of portrait and
          landscape photos, the corners would often connect, rendering the
          masonry layout useless. Secondly, in order to match the aspect ratios,
          many photos needed to be cropped, which would often ruin their
          composition, i.e., the space above, below, or to the side of the
          photo's subject would not be what the photographer initially captured.
          Finally, despite my intentions of achieving aesthetics through
          consistency, I discovered that having all the photos be the same
          aspect ratio gives an impression of sterility, which is entirely
          contradictory to what the gallery page is intended to convey.
        </p>
      </div>
      <img
        src={gallery}
        alt="Gallery"
        width="1583"
        height="1117"
        className="img-border margin-bottom-small"
      />
      <img
        src={hover}
        alt="Gallery Hover Effect"
        width="650"
        height="459"
        className="img-border margin-bottom-med"
      />
      <h3>Mobile Navigation</h3>
      <p className="margin-bottom-small">
        The mobile version of the website features a customized navigation menu.
        The menu is controlled via React States which are used to update the CSS
        class for relevant HTML elements. I wrote custom CSS to transform the
        hamburger menu to an "X" and back.
      </p>
      <div className="vertical-images margin-bottom-med">
        <img
          src={mobile}
          alt="Mobile"
          width="430"
          height="784"
          className="img-border"
        />
        <img
          src={mobileclip}
          alt=""
          className="img-border"
          width="800"
          height="1458"
        />
        <img
          src={mobilenav}
          alt="Mobile Nav"
          width="430"
          height="784"
          className="img-border"
        />
      </div>
      <h3>Responsiveness</h3>
      <p className="margin-bottom-small">
        In order to accommodate smaller desktop screens, the top section of the
        homepage has two versions. The full-width version can be seen at the top
        of this page. I designed the homepage such that when the screen width
        falls below 1350 pixels, the grayscale logos appear all the way under
        both the image and company description since there is otherwise not
        enough room to accommodate the text and logos all on the right side.
      </p>
      <img
        src={homesmall}
        alt="Responsive Homepage"
        width="1469"
        height="1058"
        className="img-border margin-bottom-med"
      />
    </main>
  );
}
