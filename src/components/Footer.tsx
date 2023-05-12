import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1em 0",
        background: "#3b0764",
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        fontSize: ".65em",
        marginTop: "auto",
        paddingBottom: "8em",
        textAlign:"center"
      }}
    >
      <h1>made with ❤️ love for the planet 🌎 in washington, dc</h1>
      <h1 style={{marginTop:".25em"}}>
        made by{" "}
        <a href="https://quinnpatwardhan.com" style={{ fontStyle: "italic" }}>
          quinnpatwardhan.com
        </a>{" "}
      </h1>
      <h1
        style={{
          fontFamily: "pt-mono",
          marginTop: "1em",
          fontSize: "1.65em",
        }}
      >
        © copyright 2023{" "}
      </h1>
      <h1
        style={{
          fontFamily: "pt-mono",

          fontSize: "1.65em",
        }}
      >
        questions? email quinn@qpxdesign.com
      </h1>
    </footer>
  );
}
