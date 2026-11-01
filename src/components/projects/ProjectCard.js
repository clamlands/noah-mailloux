export default function ProjectCard({
  img,
  title,
  liveLink,
  text,
  infoPageArray,
  setInfoPageArray,
  index,
  refProp,
}) {
  function updatePageInfoArray() {
    const tempArray = [...infoPageArray];
    tempArray.fill(false);
    tempArray[index] = true;
    setInfoPageArray(tempArray);
    refProp.current.scrollIntoView({ alignToTop: "true", behavior: "smooth" });
  }
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
            alt={title}
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
            alt={title}
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
