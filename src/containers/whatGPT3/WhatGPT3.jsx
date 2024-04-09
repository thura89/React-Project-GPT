import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is YZK"
          text="In the vast expanse of the world, love knows no boundaries, 
          and often, it finds its most enchanting expression on the open road. 'A Journey of the Heart: Love Stories Found on the Road'
           delves into the captivating narratives of couples whose paths intertwined amidst the landscapes of adventure. From chance encounters in bustling cities to serendipitous meetings in remote corners of the globe, these love stories transcend mere travel anecdotes—they are profound reflections of the transformative power of love. Each tale is a testament to the serendipity of fate and the enduring magic of human connection, reminding us that sometimes, the most remarkable journeys are the ones that lead us to the heart truest desires."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          A Journey of the Heart: Love Stories Found on the Road
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
