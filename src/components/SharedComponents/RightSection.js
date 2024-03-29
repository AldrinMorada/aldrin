import React from "react";
import "../../shared/css/rightsection.css";
import CurrentDate from "./CurrentDate";

const RightSection = () => {
  return (
    <div className="w-[min(calc(12vw+3rem),320px)] hidden lg:flex lg:flex-col">
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
          <button className="shadowed-box cursor-pointer rounded-full dark:text-white  hover:text-primary dark:hover:text-primary">
            <span className="material-icons-sharp font-black">add</span>
          </button>
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

        {/* <div className="shadowed-box notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
          </div>
          <h3>Add Reminder</h3>
        </div> */}
      </section>
    </div>
  );
};

export default RightSection;
