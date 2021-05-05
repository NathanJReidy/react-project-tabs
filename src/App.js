import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect runs");
    fetchJobs();
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

  const { id, order, title, dates, duties, company } = jobs[value];

  return (
    <main>
      <section>
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="container">
          <div className="tabsContainer">
            {jobs.map((job, index) => {
              return (
                <button className="tabsNameButton">
                  <h3
                    className="tabsName"
                    onClick={() => {
                      setValue(index);
                    }}
                  >
                    {job.company}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="jobs">
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
