import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [resume, setResume] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResumes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const resumes = await response.json();
      setIsLoading(false);
      setResume(resumes);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <main>
      <section>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
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
                <h4 className="name">Name Flair</h4>
                <h4 className="date">May 2015 - December 2015</h4>
                <div className="dutiesContainer">
                  <FaAngleDoubleRight size={48} style={{ fill: "#2caeba" }} />
                  <p className="duties">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed soluta itaque quaerat voluptate vitae quod natus
                    repudiandae in dignissimos error dolorem sit debitis,
                    officiis iste dolore ullam illum maiores obcaecati.
                  </p>
                </div>
              </div>
            </div>

            <div className="btnWrapper">
              <button className="infoBtn">More Info</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
