import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="container">
          <div className="tabsContainer">
            <button className="tabsNameButton">
              <h3 className="tabsName">Tommy</h3>
            </button>
          </div>
          <div className="resume">
            <h3>Job Title</h3>
            <h4>Name Flair</h4>
            <h4>May 2015 - December 2015</h4>
            <div className="dutiesContainer">
              <FaAngleDoubleRight size={48} style={{ fill: "#2caeba" }} />
              <p className="duties">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                soluta itaque quaerat voluptate vitae quod natus repudiandae in
                dignissimos error dolorem sit debitis, officiis iste dolore
                ullam illum maiores obcaecati.
              </p>
            </div>
            <button>More Info</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
