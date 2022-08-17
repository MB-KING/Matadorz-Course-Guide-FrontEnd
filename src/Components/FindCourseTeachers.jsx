import React, { useEffect, useState } from "react";
import axios from "axios";

const FindCourseTeachers = ({ courseId, setStep, setTeacherId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_API_BASE_URL}/api/findCourseTeachers?courseId=${courseId}`,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsLoading(true);
        setTeachers(response.data.teachers.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <p className="stepstitle">لیست اساتید ارائه دهنده این درس:</p>
      <p>لطفا به جهت دسترسی به منابع مربوط به هر استاد روی نام آن کلیک کنید</p>
      {isLoading ? (
        <section className="teacherfindresults">
          <ul>
            {teachers.map((teacher) => {
              return (
                <li
                  key={teacher.Teacher_Id}
                  onClick={(e) => {
                    e.preventDefault();
                    setTeacherId(teacher.Teacher_Id);
                    setStep(3);
                  }}
                >
                  {teacher.Teacher_Name}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </React.Fragment>
  );
};

export default FindCourseTeachers;
