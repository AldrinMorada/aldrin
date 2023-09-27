import React from "react";
import "../css/home-admin.css";
import Layout from "../shared/Layout";

const AdminHome = () => {
  return (
    <Layout>
      <div className="bg-gray-200 mt-4">
        <div className="h-[520px] w-full overflow-hidden relative">
          <section className="px-20 py-12 z-[20] relative">
            <h1 className="text-white tracking-wider">Home</h1>
          </section>
          <section className="flex flex-col gap-3 absolute bg-white w-[2500px] rotate-[11deg] -ml-40 -mt-[22rem] pt-40">
            <div className="flex gap-3 -mt-[6rem]">
              <div className="w-[30%] bg-rose-800 h-60"></div>
              <div className="w-[15%] bg-pink-800 h-60"></div>
              <div className="w-[35%] bg-pink-900 h-60"></div>
              <div className="w-[25%] bg-pink-800 h-60"></div>
            </div>

            <div className="flex gap-3">
              <div className="w-[12%] bg-rose-800 h-60"></div>
              <div className="w-[36%] bg-pink-900 h-60"></div>
              <div className="w-[16%] bg-rose-800 h-60"></div>
              <div className="w-[23%] bg-pink-900 h-60"></div>
              <div className="w-[13%] bg-rose-800 h-60"></div>
            </div>

            <div className="flex gap-3">
              <div className="w-[30%] bg-pink-800 h-60"></div>
              <div className="w-[15%] bg-rose-800 h-60"></div>
              <div className="w-[35%] bg-pink-900 h-60"></div>
              <div className="w-[25%] bg-rose-800 h-60"></div>
            </div>

            <div className="flex gap-3">
              <div className="w-[12%] bg-pink-900 h-60"></div>
              <div className="w-[36%] bg-rose-800 h-60"></div>
              <div className="w-[16%] bg-pink-800 h-60"></div>
              <div className="w-[23%] bg-rose-800 h-60"></div>
              <div className="w-[13%] bg-pink-900 h-60"></div>
            </div>
          </section>
        </div>

        <div className="absolute h-[520px] bg-primary/40"></div>
      </div>
    </Layout>
  );
};

export default AdminHome;
