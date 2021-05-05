import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resume, setResume] = useState([]);
  const [value, setValue] = useState(0);

  const fetchResumes = async () => {
    try {
      const response = await fetch(url);
      const resumes = await response.json();
      console.log(`setResume runs and resumes is ${resumes}`);
      setResume(resumes);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("ERROR");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect runs");
    fetchResumes();
    return () => {
      setResume([]); // This worked for me
    };
  }, []);

  // const { id, order, title, dates, duties, company } = resume[0];
  console.log("TEST");

  if (isLoading) {
    return (
      <main>
        <section>
          <h2>Loading...</h2>
        </section>
      </main>
    );
  }

  const { id, order, title, dates, duties, company } = resume[value];

  return (
    <main>
      <section>
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
            <h3>{title}</h3>
            <h4 className="name">{company}</h4>
            <h4 className="date">{dates}</h4>
            <div className="dutiesContainer">
              {duties.map((duty) => {
                return (
                  <div className="dutiesWrapper">
                    <FaAngleDoubleRight size={48} style={{ fill: "#2caeba" }} />
                    <p className="duties">{duty}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="btnWrapper">
          <button className="infoBtn">More Info</button>
        </div>
      </section>
    </main>
  );
}

export default App;
