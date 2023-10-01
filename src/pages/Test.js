import React, { useState } from "react";
import Layout from "../shared/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "../components/Stepper";

import { Button } from "../components/Button";
import FadeLoader from "../shared/animations/loader/FadeLoader.tsx";
import HashLoader from "../shared/animations/loader/HashLoader.tsx";
import ClipLoader from "../shared/animations/loader/ClipLoader.tsx";

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
      {/* <h1>Test Page</h1> */}
      <div className={`flex flex-col items-center gap-10 mt-5 w-full h-full`}>
        {/* <Stepper /> */}
        {/* 
            ----- buttons -----
        <div className="flex justify-center items-center gap-5">
          <Button variant={"success"} onClick={notify}>
            Notify
          </Button>

          <Button variant={"danger"} onClick={notify}>
            Notify
          </Button>

          <Button variant={"warning"} onClick={notify}>
            Notify
          </Button>

          <Button variant={"muted"} className="cursor-not-allowed" disabled>
            Notify
          </Button>

          <Button variant={"outline"} onClick={notify}>
            Notify
          </Button>

          <Button variant={"subtle"} onClick={notify}>
            Notify
          </Button>

          <Button variant={"ghost"} onClick={notify}>
            Notify
          </Button>
        </div>
        */}
        <div className="flex justify-center items-center gap-5">
          {/*  fadeloader size not editable?
          <FadeLoader
            color={"#a12219"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> */}

          <ClipLoader
            color={"#a12219"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <HashLoader
            color={"#a12219"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Test;
