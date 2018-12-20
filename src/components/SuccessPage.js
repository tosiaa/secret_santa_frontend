import React from "react";

export default () => {
  const params = new URLSearchParams(window.location.search);
  return (
    <div>
      <img
        src="https://i.imgur.com/zY9gdHQ.jpg"
        alt="happy cat"
        style={{ height: "50vh" }}
      />
      <h2>Hello, {params.get("name")}</h2>
    </div>
  );
};
