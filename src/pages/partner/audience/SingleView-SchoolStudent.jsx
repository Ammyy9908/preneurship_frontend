import React from "react";
import "./school.css";
import { Link } from "react-router-dom";
import saveSchool from "../../../utils/saveSchool";
function SchoolStudent() {
  const [current_qualification, setCurrentQualification] = React.useState("");
  const [qualification_status, setQualificationStatus] = React.useState("");
  const [InstituteName, setInstituteName] = React.useState("");

  console.log(current_qualification);

  const handleSubmission = () => {
    if (current_qualification && qualification_status && InstituteName) {
      saveSchool(
        current_qualification,
        qualification_status,
        InstituteName
      ).then((res) => {
        console.log(res);
        if (res) {
          window.location.href = "/app/partner/dashboard";
        }
      });
    }
  };

  const back = () => {
    window.location.href = "/app/single/selection";
  };

  return (
    <>
      {/* DESKTOP VIEW  */}

      <div className="quarterC"></div>
      <div className="smallC1"></div>
      <div className="smallC2"></div>

      <div className="bixBox">
        <div className="SchoolStudentFrom">
          <h3>Almost Done! ✅</h3>
          <div className="StFrom">
            <select
              name="qualification"
              defaultValue={current_qualification}
              onChange={(e) => {
                setCurrentQualification(e.target.value);
              }}
            >
              <option value="null">📕 Current Qualification</option>
              <option value="SSLC">SSLC</option>
              <option value="PUC">PUC</option>
            </select>
            <select
              name="current-status"
              defaultValue={qualification_status}
              onChange={(e) => {
                setQualificationStatus(e.target.value);
              }}
            >
              <option value="null">📖Qualification Status </option>
              <option value="purs">Persuing</option>
              <option value="completed">Completed</option>
            </select>
            <select
              name="institution-name"
              defaultValue={InstituteName}
              onChange={(e) => {
                setInstituteName(e.target.value);
              }}
            >
              <option value="null">🎓Academy</option>
              <option value="institution">KVS,Karnal</option>
              <option value="institution">MVIT Bangalore</option>
              <option value="institution">Reva School</option>
            </select>
            {/* <Link to="/app/partner/single-view-DashBoard" id="Stnext">
              Next&#62;
            </Link> */}
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
                  !current_qualification ||
                  !qualification_status ||
                  !InstituteName
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
                disbaled={
                  !current_qualification ||
                  !qualification_status ||
                  !InstituteName
                }
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
        <div className="StudentPoster"></div>
      </div>
      <div className="bigC"></div>
    </>
  );
}
export default SchoolStudent;
