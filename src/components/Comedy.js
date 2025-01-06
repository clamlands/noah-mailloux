import UpcomingShows from "./UpcomingShows";
import YouTube from "react-youtube";
import noah2 from "../images/final/noah5-800.webp";
import { useEffect } from "react";

export default function Comedy({ shows, setShows }) {
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
      <div className="about about-flip margin-bottom-med margin-top-small">
        <div className="about-text">
          {/* <p>
            Noah Mailloux is a comic from Madison, Wisconsin known for his
            conversational approach to the absurdities of modern life and his
            awkward experiences with family and relationships.
          </p>
          <p>
            He hosts The Revolver Open Mic and produces several monthly
            showcases with{" "}
            <Link to="../dev/ccc" className="red">
              Cheshire Cat Comedy
            </Link>{" "}
            spanning stand-up, improv, and music.
          </p>
          <p>
            He was selected to perfom on the "Best of the Fest" showcase for
            Madison Comedy Week in 2024. A regular performer at Comedy on State
            and Comedy Cabin, Noah has opened for nationally recognized
            headliners including Kevin Bozeman, Chastity Washington, and Julio
            Diaz.
          </p> */}
          <p>
            Noah Mailloux is a Madison, WI based comedian who relates to crowds
            using his honest and conversational style, with topics ranging from
            substance abuse and relationships to totally absurd takes on
            toothbrushes or stacking chairs. He hosts The Revolver Open Mic and
            produces several monthly showcases with Cheshire Cat Comedy spanning
            stand-up, improv, and music. He was selected to perform on the "Best
            of the Fest" showcase during Madison Comedy Week in 2024. A regular
            performer at Comedy on State and Comedy Cabin, Noah has opened for
            nationally recognized headliners including Kevin Bozeman, Chastity
            Washington, and Julio Diaz.
          </p>
        </div>
        <img
          src={noah2}
          alt="Noah"
          className="mobile-full-width comedy-pic margin-bottom-small-mobile"
          width="795"
          height="1193"
        />
      </div>
      <YouTube
        videoId="FzSgMFVobT0"
        opts={opts}
        className="mobile-full-width youtube margin-bottom-med"
      />
      <YouTube
        videoId="ektxw1bIndA"
        opts={opts}
        className="mobile-full-width margin-bottom-small youtube"
      />
      <UpcomingShows shows={shows} setShows={setShows} />
    </main>
  );
}
