import React from "react";
import "../css/home-admin.css";
import Layout from "../shared/Layout3";
import Aldrin from "../shared/images/users/aldrin.jpg";
import Background from "../shared/Background";

const Profile = () => {
  return (
    <Layout>
      <div className="mt-[56px] overflow-y-auto shadowed-box rounded-md pb-5">
        <Background />
        <section className="absolute">
          <div className="pl-[3.5rem] flex">
            <div className="w-48 h-48 rounded-full overflow-hidden border-solid border-[6px] border-[#f5f7f9] dark:border-[#161a1e] -mt-24">
              <img src={Aldrin} alt="p" className="h-full w-full" />

              <div className="flex justify-center items-center absolute w-12 h-12 z-[5] -mt-16 ml-[8.5rem] rounded-full bg-[#f5f7f9] dark:bg-[#161a1e] ">
                <span class="material-icons-sharp">photo_camera</span>
              </div>
            </div>

            <div className="pl-4 pt-4">
              <span className="font-bold text-2xl">Aldrin Morada</span>
              <h3 className="text-gray-600">Admin / Learner</h3>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="flex gap-5 px-12">
            <div className="cursor-pointer hover:underline hover:text-primary text-lg font-semibold tracking-wide text-primary underline underline-offset-4">
              About
            </div>
            <div className="cursor-pointer hover:underline hover:text-primary text-lg font-semibold tracking-wide">
              Posts
            </div>
            <div className="cursor-pointer hover:underline hover:text-primary text-lg font-semibold tracking-wide">
              Courses
            </div>
            <div className="cursor-pointer hover:underline hover:text-primary text-lg font-semibold tracking-wide">
              Certificates
            </div>
          </div>
        </section>
      </div>
      <section className="mt-4 p-6 shadowed-box">
        <div className="font-bold uppercase text-xl tracking-widest">about</div>
      </section>
    </Layout>
  );
};

export default Profile;
