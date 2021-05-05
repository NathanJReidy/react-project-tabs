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
      console.log(`setResume runs and resumes is ${resumes}`);
      setIsLoading(false);
      setResume(resumes);
    } catch (error) {
      setIsLoading(false);
      console.log("ERROR");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect runs");
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
                {resume.map((person) => {
                  return (
                    <button className="tabsNameButton">
                      <h3
                        className="tabsName"
                        onClick={() => {
                          const newResume = resume.filter(
                            (item) => item.company === person.company
                          );
                          setResume(newResume);
                        }}
                      >
                        {person.company}
                      </h3>
                    </button>
                  );
                })}
              </div>

              <div className="resume">
                <h3>{resume[0].title}</h3>
                <h4 className="name">{resume[0].company}</h4>
                <h4 className="date">{resume[0].dates}</h4>
                <div className="dutiesContainer">
                  <FaAngleDoubleRight size={48} style={{ fill: "#2caeba" }} />
                  {resume[0].duties.map((duty) => {
                    return <p className="duties">{duty}</p>;
                  })}
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
