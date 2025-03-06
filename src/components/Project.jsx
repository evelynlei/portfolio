import React from "react";

const Project = ({
  title,
  imageSrc,
  description,
  techstack,
  githubLink,
  websiteLink,
}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        {imageSrc !== "" && <img src={imageSrc} alt={`${title}-img`} />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <br />
      <small className="text-light"> {techstack} </small>

      <div className="portfolio__item-cta">
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Website
          </a>
        )}
      </div>

      <div className="portfolio__item-cta">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
