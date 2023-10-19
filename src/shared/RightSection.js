import React from "react";
import Trophy from "./images/icons/rewards/diamond-trophy.png";
import "./css/rightsection.css";
import CurrentDate from "./CurrentDate";

const RightSection = () => {
  return (
    <div className="w-[320px] hidden md:flex md:flex-col">
      {/* 
      <section className="shadowed-box rank">
        <div className="logo">
          <img src={Trophy} alt="" />
          <h1 className="tracking-wider">Diamond III</h1>
        </div>
      </section>
 */}
      <CurrentDate />

      <section className="reminders">
        <div className="header">
          <h2>Reminders</h2>
          <span className="shadowed-box material-icons-sharp">
            notifications_none
          </span>
        </div>

        <div className="shadowed-box notification">
          <div className="icon">
            <span className="material-icons-sharp">volume_up</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text-muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="shadowed-box notification deactive">
          <div className="icon">
            <span className="material-icons-sharp">edit</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text-muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="shadowed-box notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
          </div>
          <h3>Add Reminder</h3>
        </div>
      </section>
    </div>
  );
};

export default RightSection;
