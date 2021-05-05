import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resume, setResume] = useState([]);
  const [value, setValue] = useState(0);

  const fetchResumes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const resumes = await response.json();
      setResume(resumes);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect runs");
    fetchResumes();
  }, []);

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
            {resume.map((person, index) => {
              return (
                <button className="tabsNameButton">
                  <h3
                    className="tabsName"
                    onClick={() => {
                      setValue(index);
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
              {duties.map((duty, index) => {
                return (
                  <div className="dutiesWrapper" key={index}>
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
