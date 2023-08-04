import React from "react";
import Layout from "../shared/Layout";
import { Button } from "../components/Button";

const Test = () => {
  return (
    <Layout>
      <h1>Test Page</h1>
      <div className="flex justify-center items-center gap-5 mt-5 w-full h-full">
        <Button variant={"info"}>Aldrin</Button>
        <Button variant={"success"}>Aldrin</Button>
        <Button variant={"warning"}>Aldrin</Button>
        <Button variant={"danger"}>Aldrin</Button>
        <Button variant={"muted"} disabled>
          Aldrin
        </Button>
      </div>
    </Layout>
  );
};

export default Test;
