import React from "react";
import { useState } from "react";
import Findecourses from "./Components/FindeCourses";
import FindCourseTeachers from "./Components/FindCourseTeachers";
import FindCourseBooklets from "./Components/FindCourseBooklets";
import "./Assets/style.css";
function App() {
  const [step, setStep] = useState(1);
  const [courseId, setCourseId] = useState();
  const [teacherId, setTeacherId] = useState();
  return (
    <React.Fragment>
      <div className="App">
        <header className="header">
          <h1>راهنمای درسی ماتادورز</h1>
        </header>
        <main className="main">
          {step === 1 ? (
            <Findecourses setCourseId={setCourseId} setStep={setStep} />
          ) : step === 2 ? (
            <FindCourseTeachers
              courseId={courseId}
              setStep={setStep}
              setTeacherId={setTeacherId}
            />
          ) : step === 3 ? (
            <FindCourseBooklets courseId={courseId} teacherId={teacherId} />
          ) : null}
          {step !== 1 ? (
            <button
              className="backbtn"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              برگشت به مرحله قبل
            </button>
          ) : null}
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
