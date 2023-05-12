import React from "react";

import Lead from "../sections/Lead";
import Reason from "../sections/Reason";
import ReasonsData from "../assets/ReasonsData.json";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div className="App">
      <Lead />
      {ReasonsData.map((item: any, index: any) => {
        return <Reason data={item} />;
      })}
      <a
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          margin: "2em",
          padding: ".5em 1em",
          background: "white",
          zIndex: 9,
          borderRadius: "2em",
          cursor: "pointer",
        }}
        href="/sources"
      >
        <h1 style={{ fontSize: "1.5em" }}>View Sources</h1>
      </a>
      <Footer />
    </div>
  );
}
