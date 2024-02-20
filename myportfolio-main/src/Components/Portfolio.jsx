/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
{
    title: "Managing Yeast Infection",
    description:
      "A collection of details about Yeast Infection",
    url: "https://hospitals.aku.edu/nairobi/AboutUs/News/Pages/Managing-yeast-infection.aspx",
  }, 
 {
    title: "Managing Yeast Infection",
    description:
      "A collection of details about Yeast Infection",
    url: "https://hospitals.aku.edu/nairobi/AboutUs/News/Pages/Managing-yeast-infection.aspx",
  },
  {
    title: "Online articles about sexual health",
    description:
      "These are some basic research articles I did on the comparison of different sexual infections.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10218719/",
  },
  {
    title: "Field study blogs ",
    description:
      "Studied  by Medrix ,modded  and deployed online. Includes  experiences and  abilities.",
    url: "https://www.medrxiv.org/content/10.1101/2022.10.25.22281521v1.full",
  },
  {
    title: "Script.org",
    description:
      "This is a learning space to share experiences",
    url: "https://www.scirp.org/journal/paperinformation.aspx?paperid=111014#:~:text=Results%3A%20The%20overall%20prevalence%20rate,than%20other%20sets%20of%20participants",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
