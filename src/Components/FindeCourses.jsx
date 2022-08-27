import React from "react";
import axios from "axios";
import { useState } from "react";

const FindeCourses = ({ setCourseId, setStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const searchCourses = async (e) => {
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_API_BASE_URL}/api/findCourses?courseName=${e.target.value}`,
    };
    if (e.target.value.length > 2) {
      await axios(config)
        .then((response) => {
          setIsLoading(true);
          setCourses(response.data.courses.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <React.Fragment>
      <label htmlFor="searchinput" className="searchinputlabel">
        لطفا نام درس مورد نظر خود را به جهت جست‌و‌جو وارد کنید:
      </label>
      <input
        type="text"
        id="searchinput"
        className="searchinput"
        placeholder="نام درس به فارسی"
        onChange={searchCourses}
      />
      {isLoading ? (
        <section className="serachresults">
          <ul>
            {courses.map((course) => {
              return (
                <li
                  key={course.Course_Id}
                  onClick={(e) => {
                    e.preventDefault();
                    setCourseId(course.Course_Id);
                    setStep(2);
                  }}
                >
                  {course.Course_Name}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </React.Fragment>
  );
};

export default FindeCourses;
