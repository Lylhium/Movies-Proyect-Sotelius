import React from "react";

const loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        className='loading loading-spinner loading-lg'
        style={{ transition: "opacity 2s" }}
      ></span>
    </div>
  );
};

export default loading;
