import React, { useState } from "react";
import Layout from "../shared/Layout";
import { Button } from "../components/Button";
import { toast } from "react-toastify";

import FadeLoader from "../shared/animations/loader/FadeLoader.tsx";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {
  const notify = () => {
    const theme = localStorage.getItem("theme");

    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      theme: theme === "light" ? "colored" : "dark",
      className: "text-success",
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT,
      theme: theme === "light" ? "colored" : "dark",
      className: "text-danger",
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT,
      theme: theme === "light" ? "colored" : "dark",
      className: "text-warning",
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: theme === "light" ? "colored" : "dark",

      className: "text-info",
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: theme === "light" ? "colored" : "dark",
      className: "foo-bar",
    });
  };
  return (
    <Layout>
      <h1>Test Page</h1>
      <div className="flex justify-center items-center gap-5 mt-5 w-full h-full">
        <Button variant={"success"} onClick={notify}>
          Notify
        </Button>

        <FadeLoader
          color={"#a12219"}
          loading={true}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Layout>
  );
};

export default Test;
