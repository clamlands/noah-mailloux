export default function ProjectCard({
  img,
  title,
  liveLink,
  text,
  infoPageArray,
  setInfoPageArray,
  index,
}) {
  if (!liveLink) {
    return (
      <div
        onClick={() => {
          updatePageInfoArray();
        }}
      >
        <div className="project-card">
          <img
            src={img}
            alt=""
            className="project-card-img"
            width="500"
            height="500"
          />
          <div>{title}</div>
        </div>
      </div>
    );
  } else {
    return (
      <a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        className="no-underline"
      >
        <div className="project-card">
          <img
            src={img}
            alt=""
            className="project-card-img"
            width="500"
            height="500"
          />
          <div>{title}</div>
          <div className="project-card-text">{text}</div>
        </div>
      </a>
    );
  }
}
