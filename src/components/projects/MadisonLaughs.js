import home from "../../images/dev/madisonlaughs/home.png";
import upcoming from "../../images/dev/madisonlaughs/upcoming.png";
import comics from "../../images/dev/madisonlaughs/comics.png";

export default function NoahMailloux() {
  return (
    <article className="margin-top-med fade-in">
      <h1 className="margin-bottom-zero">Madison Laughs</h1>
      <h3 className="margin-bottom-zero">Svelte | CSS</h3>
      <a href="https://madisonlaughs.com/" target="_blank" rel="noreferrer">
        <h3 className="margin-bottom-small">Full site here</h3>
      </a>
      <div className="dev-text margin-bottom-small">
        <p>
          Madison Laughs is a website created by me and one other partner that
          exists to showcase the comedy scene in Madison, WI. There was a
          previous iteration of this site that had to be manually updated which
          was very tedious and error-prone, so we decided to remake the site
          from the ground up to automate aspects of the site to keep it always
          up-to-date.
        </p>
        <p>
          My partner in this project contributed aspects of design and CSS
          styling. I am responsible for 100% of the API implementation as well
          as a large portion of the design and CSS styling.
        </p>
      </div>

      <img
        src={home}
        alt="Home page of Madison Laughs website"
        className="img-border margin-bottom-med"
        width="1493"
        height="1268"
      />
      <h2>Features & Design Considerations</h2>
      <h3>Google Sheets API</h3>
      <p className="margin-bottom-small">
        This site features a Comic Directory showcasing all the stand-up
        comedians in Madison, including their headshot, name, bio, and links to
        their social media pages. I first gathered this data by posting a Google
        Form to the private Facebook page for the Madison comedy scene. All the
        data from the form gets sent to a Google Sheets spreadsheet. I was then
        able to implement the Google Sheets API to fetch the data from the
        spreadsheet and display the info for each comedian.
      </p>
      <img
        src={comics}
        alt="Comic Directory"
        className="img-border margin-bottom-med"
        width="1512"
        height="1200"
      />

      <h3>Eventbrite API</h3>
      <p className="margin-bottom-small">
        On the previous version of this site, it was one person's responsibility
        to manually add all of the upcoming Madison comedy shows on the site
        each month. This was very time consuming and error-prone. Since most of
        the show producers sell their tickets through Eventbrite, I was able to
        use the Eventbrite API for each producer's account to have all of their
        upcoming shows displayed on the front page of the website. This is
        admittedly not a perfect solution as not every single show producer
        sells their tickets through Eventbrite; however we felt that this was
        the best compromise to avoid any sort of manual entry, and we include a
        more comprehensive list of all the regularly occuring shows on the Shows
        page of the website.
      </p>
      <img
        src={upcoming}
        alt="Upcoming Shows section"
        className="img-border margin-bottom-med"
        width="1512"
        height="1200"
      />
      <hr />
    </article>
  );
}
