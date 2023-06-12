import React from "react";

const Spinner = () => {
  return (
    <div className="h-[100vh] w-full bg-slate-300">
      <button className="absolute w-full h-full">
        <span className="loading loading-spinner"></span>
      </button>
    </div>
  );
};

export default Spinner;
