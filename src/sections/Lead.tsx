import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function Lead() {
  return (
    <section className="lead">
      <h1>density matters</h1>
      <h2>
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
        Explore Data <BsArrowDownCircleFill className="icon" />{" "}
      </button>
    </section>
  );
}
