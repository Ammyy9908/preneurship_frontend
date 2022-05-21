import React from "react";
import "./college.css";
import { Link } from "react-router-dom";
function College() {
  return (
    <>
      {/* MOBILE VIEW  */}
      <div className="ClgStMobile">
        <h2 className="ClgStMobHead">You are almost there!</h2>

        <div className="ClgMobForm">
          <select name="edu">
            <option value="">Course Name</option>
            <option value="Matric">Matric</option>
            <option value="Matric">Matric</option>
          </select>
          <select name="CurrQuq">
            <option value="">Specification In </option>
            <option value="purs">Persuing</option>
          </select>
          <select name="Acad">
            <option value="Academy">College Name</option>
            <option value="year">2024</option>
          </select>
        </div>

        <Link to="/single-view-DashBoard" id="ClgStMobNext">
          Next &#62;
        </Link>
      </div>

      {/* DESKTOP VIEW */}

      <div className="ClgquarterC"></div>
      <div className="ClgsmallC1"></div>
      <div className="ClgsmallC2"></div>

      <div className="ClgbixBox">
        <div className="ClgSchoolStudentFrom">
          <h3>Almost there ✅</h3>
          <div className="ClgStFrom">
            <select name="edu">
              <option value="">📕 Course</option>
              <option value="Matric">Matric</option>
              <option value="Matric">Matric</option>
            </select>
            <select name="CurrQuq">
              <option value="">Specification </option>
              <option value="purs">Persuing</option>
            </select>
            <select name="Acad">
              <option value="Academy">College</option>
              <option value="year">2024</option>
            </select>
            <select name="Acad">
              <option value="Academy">Add prior education</option>
              <option value="year">2024</option>
            </select>
            <Link to="/single-view-DashBoard" id="ClgStnext">
              Next &#62;
            </Link>
            <Link to="/single-view-Selection" id="ClgStBack">
              &#60;Back{" "}
            </Link>
          </div>
        </div>
        <div className="ClgStudentPoster"></div>
      </div>

      <div className="ClgbigC"></div>
    </>
  );
}
export default College;
