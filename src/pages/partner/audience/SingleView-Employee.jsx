import React from "react";
import "./employee.css";
import { Link } from "react-router-dom";
function Employee() {
  const [company, setCompany] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [prior_edu, setPriorEdu] = React.useState("");

  const handleSubmission = () => {
    console.log("Submitting form");
  };

  const back = () => {
    window.location.href = "/app/single/selection";
  };
  return (
    <>
      <div className="EMpyClgbixBox">
        <div className="EMpyClgSchoolStudentFrom">
          <h3>Almost there ✅</h3>
          <div className="EMpyClgStFrom">
            <select
              name="company"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            >
              <option value="">Company Name </option>
              <option value="purs">Persuing</option>
            </select>
            <select
              name="position"
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
            >
              <option value="">Position</option>
              <option value="Frontend_Dev">Frontend Developer</option>
              <option value="FullStack">Full Stack Developer</option>
            </select>
            <select
              name="prior_edu"
              onChange={(e) => {
                setPriorEdu(e.target.value);
              }}
            >
              <option value="">Add prior education</option>
              <option value="Bachelor Engineering">B.E</option>
              <option value="ms">MS</option>
            </select>
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
                  !company || !designation || !prior_edu ? "disabled" : ""
                }`}
                style={{
                  width: "100%",
                  height: 32,
                  border: 0,
                  color: "#fff",
                  cursor: "pointer",
                }}
                disbaled={!company || !designation || !prior_edu}
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
        <div className="EMpyClgStudentPoster"></div>
      </div>
      <div className="EMpyClgbigC"></div>
    </>
  );
}
export default Employee;
