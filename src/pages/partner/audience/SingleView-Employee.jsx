import React from "react";
import "./employee.css";
import { Link } from "react-router-dom";
function Employee() {
  return (
    <>
      {/* MOBILE VIEW  */}

      <div className="EMpyClgStMobile">
        <h2 className="EMpyClgStMobHead">You are almost there!</h2>

        <div className="EMpyClgMobForm">
          <select name="edu">
            <option value="">Company Name</option>
            <option value="Matric">Matric</option>
            <option value="Matric">Matric</option>
          </select>
          <select name="CurrQuq">
            <option value="">Position in company </option>
            <option value="purs">Persuing</option>
          </select>
          <select name="Acad">
            <option value="Academy">Add prior education</option>
            <option value="year">2024</option>
          </select>
        </div>
        <Link to="/single-view-DashBoard" id="EMpyClgStMobNext">
          Next &#62;
        </Link>
      </div>

      {/* DESKTOP VIEW  */}

      <div className="EMpyClgquarterC"></div>
      <div className="EMpyClgsmallC1"></div>
      <div className="EMpyClgsmallC2"></div>

      <div className="EMpyClgbixBox">
        <div className="EMpyClgSchoolStudentFrom">
          <h3>Almost there ✅</h3>
          <div className="EMpyClgStFrom">
            <select name="CurrQuq">
              <option value="">Company Name </option>
              <option value="purs">Persuing</option>
            </select>
            <select name="Acad">
              <option value="Academy">Position</option>
              <option value="year">2024</option>
            </select>
            <select name="Acad">
              <option value="Academy">Add prior education</option>
              <option value="year">2024</option>
            </select>
            <Link to="/single-view-DashBoard" id="EMpyClgStnext">
              Next &#62;
            </Link>
            <Link to="/single-view-Selection" id="EMpyClgStBack">
              {" "}
              &#60; Back
            </Link>
          </div>
        </div>
        <div className="EMpyClgStudentPoster"></div>
      </div>
      <div className="EMpyClgbigC"></div>
    </>
  );
}
export default Employee;
