import React from "react";

interface ReasonObj {
  title: string;
  subtitle: string;
  body: string;
  background_color: string;
  photos: Array<string>;
}

interface ReasonProps {
  data: ReasonObj;
}

export default function Reason(props: ReasonProps) {
  return (
    <section
      className="reason"
      style={{ background: props.data.background_color }}
    >
      <h1>{props.data.title}</h1>
      <h2>{props.data.subtitle}</h2>
      <div className="h-stack">
        <p>{props.data.body}</p>
        <div
          className="photo-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
            margin: 0,

            gap: 0,
          }}
        >
          <div
            style={{
              width: "50em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <img src={`/images/${props.data.photos[0]}`} />
            <img src={`/images/${props.data.photos[1]}`} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50em",
              marginTop: -120,
              zIndex: 0,
            }}
          >
            <img src={`/images/${props.data.photos[2]}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
