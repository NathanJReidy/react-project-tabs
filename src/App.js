import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  return (
    <main>
      <section>
        <h2 className="title">Experience</h2>
        <div className="container">
          <div className="tabsContainer">
            <h3 className="tabsName">Tommy</h3>
          </div>
          <div className="resume">
            <h3>Job Title</h3>
            <h4>Name Flair</h4>
            <h4>May 2015 - December 2015</h4>
            <div className="dutiesContainer">
              <FaAngleDoubleRight />
              <p>
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
