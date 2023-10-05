import React from "react";
import Layout from "../shared/components/Layout2";
import "../shared/css/Animation/hover-effect.css";

const Leaderboards = () => {
  return (
    <Layout>
      <div className="text-center w-full">
        <div className="relative"></div>
        <h1 className="tracking-wider font-semibold uppercase">
          ~ Leaderboards ~
        </h1>

        <div className="w-full h-full grid gap-y-4 mt-6 p-2">
          <div className="hover-moving__border h-20"></div>
          <div className="hover-moving__border h-20"></div>
          <div className="hover-moving__border h-20"></div>
          <div className="hover-moving__border h-20"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboards;
