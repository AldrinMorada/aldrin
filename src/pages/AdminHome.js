import React from "react";
import Layout from "../shared/Layout";
import "../css/home-admin.css";

const AdminHome = () => {
  return (
    <Layout>
      <h1>Home Page</h1>

      <div className="adminhome space-y-4">
        <section>
          <h2>Main Banner</h2>
          <div className="shadowed-box component"></div>
        </section>
        <section>
          <h2>Mission, Vision, Values</h2>

          <div className="shadowed-box component"></div>
        </section>
        <section>
          <h2>Courses</h2>

          <div className="shadowed-box component"></div>
        </section>
        <section>
          <h2>Training Leaders</h2>
          <div className="shadowed-box component"></div>
        </section>
        <section>
          <h2>Testimonials</h2>
          <div className="shadowed-box component"></div>
        </section>
      </div>
    </Layout>
  );
};

export default AdminHome;
