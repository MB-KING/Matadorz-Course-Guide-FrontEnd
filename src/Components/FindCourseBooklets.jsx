import React, { useEffect, useState } from "react";
import axios from "axios";

function FindCourseBooklets({ courseId, teacherId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [booklets, setBooklets] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_API_BASE_URL}/api/findCourseBooklets?courseId=${courseId}&teacherId=${teacherId}`,
    };
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsLoading(true);
        setBooklets(response.data.booklets.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <p className="stepstitle">لیست منابع مربوط به هر درس:</p>
      <p>لطفا به جهت دانلود هر کدام از منابع روی آن کلیک کنید </p>
      {isLoading ? (
        <section className="bookletfindresult">
          <ul>
            {booklets.map((booklet) => {
              return (
                <a
                  href={booklet.Booklet_Url}
                  key={booklet.Booklet_id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>{booklet.Booklet_Name}</li>
                </a>
              );
            })}
          </ul>
        </section>
      ) : null}
    </React.Fragment>
  );
}

export default FindCourseBooklets;
