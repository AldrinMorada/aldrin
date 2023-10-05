import React from "react";
import Layout from "../shared/components/Layout2";
import "../shared/css/leaderboards.css";

const Leaderboards = () => {
  return (
    <Layout>
      <div className="text-center w-full">
        <div className="relative"></div>
        <h1 className="tracking-wider font-semibold uppercase">
          ~ Leaderboards ~
        </h1>

        <div className="w-full h-full grid gap-y-4 mt-6">
          <div className="h-20 rounded-sm moving__border"></div>
          <div className="rank__container"></div>
          <div className="rank__container"></div>
          <div className="rank__container"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboards;
