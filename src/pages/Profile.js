import React from "react";
import "../shared/css/profile.css";
import Layout from "../components/SharedComponents/Layout2";
import Aldrin from "../shared/images/users/aldrin.jpg";
import { NavLink } from "react-router-dom";
import About from "../components/ProfilePage/About";
import Posts from "../components/ProfilePage/Posts";
import Courses from "../components/ProfilePage/Courses";
import Certificates from "../components/ProfilePage/Certificates";
import Background from "../components/SharedComponents/Background";

const Profile = ({ subpage }) => {
  const subDisplay = () => {
    if (subpage === "about") {
      return <About />;
    } else if (subpage === "posts") {
      return <Posts />;
    } else if (subpage === "courses") {
      return <Courses />;
    } else {
      return <Certificates />;
    }
  };

  return (
    <Layout>
      <div className="relative shadowed-box rounded-md pb-5">
        <Background />
        <section className="absolute">
          <div className="pl-[2.5rem] flex">
            <div className="w-48 h-48 rounded-full overflow-hidden border-solid border-[6px] border-[#f5f7f9] dark:border-[#161a1e] -mt-24">
              <img
                src={Aldrin}
                alt="p"
                className="h-full w-full object-cover"
              />

              <div className="flex justify-center items-center absolute w-12 h-12 z-[5] -mt-16 ml-[8.5rem] rounded-full bg-[#f5f7f9] dark:bg-[#161a1e] cursor-pointer">
                <span class="material-icons-sharp">photo_camera</span>
              </div>
            </div>

            <div className="pl-4 pt-4">
              <span className="font-bold text-2xl">Aldrin Morada</span>
              <h3 className="text-gray-600 dark:text-gray-200">
                Admin / Learner
              </h3>
            </div>
          </div>
        </section>

        <section className="profile-nav-links mt-28">
          <NavLink to="/profile/about">
            <h4>About</h4>
          </NavLink>
          <NavLink to="/profile/posts">
            <h4>Posts</h4>
          </NavLink>
          <NavLink to="/profile/courses">
            <h4>Courses</h4>
          </NavLink>
          <NavLink to="/profile/certificates">
            <h4>Certificates</h4>
          </NavLink>
        </section>
      </div>

      <div className="mt-4 p-6 shadowed-box min-h-[50vh] mb-20 rounded-md">
        <span className="font-bold uppercase text-xl tracking-wider">
          {subpage}
        </span>
        <div className="mt-2">{subDisplay()}</div>
      </div>
    </Layout>
  );
};

export default Profile;
