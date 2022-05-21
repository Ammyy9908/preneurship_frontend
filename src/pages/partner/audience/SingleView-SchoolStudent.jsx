import React from "react";
import "./school.css";
import { Link } from "react-router-dom";
function SchoolStudent() {
  return (
    <>
      {/* MOBILE VIEW  */}

      <div className="StMobile">
        <h2 className="StMobHead">You are almost there!</h2>

        <div className="MobForm">
          <select name="edu">
            <option value="">📕 Current Qualification</option>
            <option value="Matric">Matric</option>
            <option value="Matric">Matric</option>
          </select>
          <select name="CurrQuq">
            <option value="">📖Qualification Status </option>
            <option value="purs">Persuing</option>
          </select>
          <select name="Acad">
            <option value="Academy">🎓Academy</option>
            <option value="year">2024</option>
          </select>
        </div>
        <Link to="/single-view-DashBoard" id="StMobNext">
          Next &#62;
        </Link>
      </div>

      {/* DESKTOP VIEW  */}

      <div className="quarterC"></div>
      <div className="smallC1"></div>
      <div className="smallC2"></div>

      <div className="bixBox">
        <div className="SchoolStudentFrom">
          <h3>Almost Done! ✅</h3>
          <div className="StFrom">
            <select name="edu">
              <option value="">📕 Current Qualification</option>
              <option value="Matric">Matric</option>
              <option value="Matric">Matric</option>
            </select>
            <select name="CurrQuq">
              <option value="">📖Qualification Status </option>
              <option value="purs">Persuing</option>
            </select>
            <select name="Acad">
              <option value="Academy">🎓Academy</option>
              <option value="year">2024</option>
            </select>
            <Link to="/single-view-DashBoard" id="Stnext">
              Next&#62;
            </Link>
            <Link to="/single-view-Selecction" id="StBack">
              &#60;Back{" "}
            </Link>
          </div>
        </div>
        <div className="StudentPoster"></div>
      </div>
      <div className="bigC"></div>
    </>
  );
}
export default SchoolStudent;
