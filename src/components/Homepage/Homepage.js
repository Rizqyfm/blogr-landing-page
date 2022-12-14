import React from "react";
import "./Homepage.css";
import secondImage from "../images/illustration-editor-desktop.svg";
import thirdImage from "../images/illustration-phones.svg";
import fourthImage from "../images/illustration-laptop-desktop.svg";

function Homepage() {
  return (
    <main className="wrapper">
      <section className="firstSection bg-gdVeryLightRed">
        <section className="content">
          <section className="contentHeading flex flex-col gap-y-3.5">
            <h1 className="heading text-white font-Overpass text-6xl font-semibold text-center">
              A modern publishing platform
            </h1>
            <h2 className="headingDesc text-white font-Ubuntu text-xl text-center ">
              Grow your audience and build your online brand
            </h2>
          </section>
          <div className="buttons flex flex-row gap-x-10">
            <button
              type="button"
              className="start btn font-bold text-ctaText bg-white"
            >
              Start for Free
            </button>
            <button type="button" className="learn btn font-bold text-white">
              Learn More
            </button>
          </div>
        </section>
      </section>
      <section className="secondSection">
        <h2 className="subHeading text-center font-Overpass text-4xl font-bold">
          Designed for the future
        </h2>
        <section className="secondContent flex flex-row flex-nowrap justify-center">
          <section className="leftSecond flex flex-col flex-nowrap gap-y-5">
            <h3 className="smallHeading text-2xl font-Ubuntu">
              Introducing an extensible editor
            </h3>
            <p className="description font-Ubuntu text-bodyCopy">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="smallHeading text-2xl pt-10 font-Ubuntu">
              Robust content management
            </h3>
            <p className="description font-Ubuntu text-bodyCopy">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you???re in full control.
            </p>
          </section>
          <section className="rightSecond">
            <img src={secondImage} alt="Desktop editor" className="secondImg" />
          </section>
        </section>
      </section>
      <section className="thirdSection flex flex-row flex-nowrap justify-center bg-gdDarkGrayBlue gap-x-14">
        <section className="leftThird">
          <img src={thirdImage} alt="Desktop editor" className="thirdImg" />
        </section>
        <section className="rightThird flex flex-col gap-y-5">
          <h2 className="subHeading font-Overpass text-4xl font-bold text-white">
            State of the Art Infrastructure
          </h2>
          <p className="description font-Ubuntu text-white">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
      </section>

      <section className="secondContent fourthContent flex flex-row flex-nowrap justify-center gap-x-5 ">
        <section className="rightSecond">
          <img src={fourthImage} alt="Desktop editor" className="fourthImg" />
        </section>
        <section className="leftSecond flex flex-col flex-nowrap gap-y-5">
          <h3 className="smallHeading text-2xl font-Ubuntu">
            Free, open, simple
          </h3>
          <p className="description font-Ubuntu text-bodyCopy">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3 className="smallHeading text-2xl pt-10 font-Ubuntu">
            Powerful tooling
          </h3>
          <p className="description font-Ubuntu text-bodyCopy">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
      </section>
    </main>
  );
}

export default Homepage;
