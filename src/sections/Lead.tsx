import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function Lead() {
  return (
    <section className="lead">
      <h1 style={{ maxWidth: "90%", margin: "0 auto" }}>density matters</h1>
      <h2 style={{ maxWidth: "90%", margin: "0 auto" }}>
        learn how changing the shape of your city can help change the course of
        climate change.
      </h2>

      <button
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Learn More <BsArrowDownCircleFill className="icon" />{" "}
      </button>
    </section>
  );
}
