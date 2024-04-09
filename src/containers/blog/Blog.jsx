import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import Article from "../../components/article/Article";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="Wanderlust Romance: Exploring Love Across Continents"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="A Journey of the Heart: Love Stories Found on the Road"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="Passport to Passion: Love's Adventures in Foreign Lands"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text=" Romance: Finding Love in Unlikely Places"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="Love's Odyssey: Travelling Together, Falling Forever"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
