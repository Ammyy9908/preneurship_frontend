import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function DashBoard() {
  return (
    <>
      <div className="dash">
        <div className="nav">
          <div className="quarter"> </div>

          <button
            type="file"
            className="profilePic"
            placeholder="Profile Pic Upload"
          >
            Profile Pic <br />
            Upload
            <br />+
          </button>
        </div>
        <br />
        <div className="mobile_info">
          <div className="mobile_profile">
            <button className="adddpic">
              {" "}
              <img
                height="40px"
                src="https://img.icons8.com/ios-filled/344/apple-camera.png"
                alt=""
              />
            </button>
            <p className="name">Neil Jain</p>
          </div>
          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />
          <p className="mob_Bio"></p>
          <input
            className="paragraph"
            type="text"
            placeholder="Add your Bio..."
          />
          <Link to="/single-view-Success" id="mobile_button">
            Let's Go
          </Link>
        </div>

        <div className="info">
          <input className="skills" placeholder=" + Add Skills" />

          <input className="bio" placeholder=" + Add Bio" title="ADD" />

          <Link to="/single-view-Success" className="confirm">
            Confirm &#62;
          </Link>
          <br />
          {/* <Link to='' className='back'> &#60;Back  </Link> */}
          {/* <div className='dot_side'> </div>
                    <div className='quarter_side'></div> */}
        </div>
        <div className="dot_side"> </div>
        <div className="quarter_side"></div>
      </div>
    </>
  );
}
export default DashBoard;
