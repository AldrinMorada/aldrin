import React from "react";
import "../css/Animation/background-animation.css";

const Background = () => {
  return (
    <section className="h-[350px] w-full overflow-hidden relative rounded-t-md">
      <div className="flex flex-col gap-3 absolute bg-[#f5f7f9] dark:bg-[#161a1e] w-[2500px] rotate-[11deg] -ml-40 -mt-[22rem] pt-40">
        <div className="flex gap-3 -mt-[6rem] move-left">
          <div className="w-[30%] bg-rose-800 h-60"></div>
          <div className="w-[15%] bg-pink-800 h-60"></div>
          <div className="w-[35%] bg-pink-900 h-60"></div>
          <div className="w-[25%] bg-pink-800 h-60"></div>
        </div>

        <div className="flex gap-3 move-right">
          <div className="w-[12%] bg-rose-800 h-60"></div>
          <div className="w-[36%] bg-pink-900 h-60"></div>
          <div className="w-[16%] bg-rose-800 h-60"></div>
          <div className="w-[23%] bg-pink-900 h-60"></div>
          <div className="w-[13%] bg-rose-800 h-60"></div>
        </div>

        <div className="flex gap-3 move-left">
          <div className="w-[30%] bg-pink-800 h-60"></div>
          <div className="w-[15%] bg-rose-800 h-60"></div>
          <div className="w-[35%] bg-pink-900 h-60"></div>
          <div className="w-[25%] bg-rose-800 h-60"></div>
        </div>

        <div className="flex gap-3 move-right">
          <div className="w-[12%] bg-pink-900 h-60"></div>
          <div className="w-[36%] bg-rose-800 h-60"></div>
          <div className="w-[16%] bg-pink-800 h-60"></div>
          <div className="w-[23%] bg-rose-800 h-60"></div>
          <div className="w-[13%] bg-pink-900 h-60"></div>
        </div>
      </div>
      <div className="absolute h-[350px] bg-primary/40"></div>
    </section>
  );
};

export default Background;
