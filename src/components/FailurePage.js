import React from "react";

export default () => {
  const params = new URLSearchParams(window.location.search);
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/cute-kitten-portrait-british-shorthair-cat-picture-id916159418?k=6&m=916159418&s=612x612&w=0&h=3wU_DQ35jXhHLPeHHfsITav-hSSxLLB49zUFS0LoLZs="
        alt="sad cat"
        style={{ height: "50vh" }}
      />
      <h2>{params.get("reason")}</h2>
    </div>
  );
};
