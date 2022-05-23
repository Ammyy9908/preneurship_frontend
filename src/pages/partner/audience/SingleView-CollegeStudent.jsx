import React from "react";
import "./college.css";
import { Link } from "react-router-dom";
function College() {
  const [course, setCourse] = React.useState("");
  const [specification, setSpecification] = React.useState("");
  const [institute, setInstitute] = React.useState("");
  const [prior_edu, setPriorEdu] = React.useState("");

  const handleSubmission = () => {
    console.log("Submitting form");
  };

  const back = () => {
    window.location.href = "/app/single/selection";
  };
  return (
    <>
      {/* <div className="ClgquarterC"></div>
      <div className="ClgsmallC1"></div>
      <div className="ClgsmallC2"></div> */}

      <div className="ClgbixBox">
        <div className="ClgSchoolStudentFrom">
          <h3>Almost there ✅</h3>
          <div className="ClgStFrom">
            <select
              name="course"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            >
              <option value="null">📕 Course</option>
              <option value="be">B.E</option>
              <option value="bca">BCA</option>
            </select>
            <select
              name="spec"
              onChange={(e) => {
                setSpecification(e.target.value);
              }}
            >
              <option value="null">Specification </option>
              <option value="ise">Information Science</option>
              <option value="cse">Computer Science</option>
            </select>
            <select
              name="college"
              onChange={(e) => {
                setInstitute(e.target.value);
              }}
            >
              <option value="null">College</option>
              <option value="sirmvit">Sir MVIT</option>
              <option value="reva">Reva University</option>
            </select>
            <div className="form__control">
              <label htmlFor="prior_edu">Prior Education</label>
              <input
                type="text"
                name="prior_edu"
                id="prior_edu"
                value={prior_edu}
                onChange={(e) => {
                  setPriorEdu(e.target.value);
                }}
              />
            </div>
            <div
              className="form__submitter"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                flexDirection: "column",
              }}
            >
              <button
                className={`submit_btn ${
                  !course || !specification || !institute || !prior_edu
                    ? "disabled"
                    : ""
                }`}
                style={{
                  width: "100%",
                  height: 32,
                  border: 0,
                  color: "#fff",
                  cursor: "pointer",
                }}
                disbaled={!course || !specification || !institute || !prior_edu}
                onClick={handleSubmission}
              >
                Proceed
              </button>

              <button
                className="back_btn"
                style={{
                  width: "100%",
                  height: 32,
                  border: 0,
                  backgroundColor: "#000",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={back}
              >
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="ClgStudentPoster"></div>
      </div>

      <div className="ClgbigC"></div>
    </>
  );
}
export default College;
