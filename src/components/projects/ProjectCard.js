import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ img, title, localLink, liveLink }) {
  const local = `/dev/${localLink}`;
  return (
    <div>
      <div className="project-card">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt=""
            className="project-card-img"
            width="750"
            height="500"
          />
        </a>
        <a
          href={liveLink}
          className="no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <h3>{title}</h3>
        </a>

        <div className="project-card-text">
          <Link to={local}>
            <div>Read about</div>
          </Link>

          <a href={liveLink} target="_blank" rel="noreferrer">
            Go to live site
          </a>
        </div>
      </div>
    </div>
  );
}
