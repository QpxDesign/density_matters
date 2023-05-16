import React from "react";
import TransportationMethodsCarbon from "../calculators/TransportationMethodsCarbon";
import PopulationDensity from "../calculators/PopulationDensity";
import Slideshow from "../calculators/Slideshow";
import GetLocalReps from "../calculators/GetLocalReps";
import LocalPlanningBoardMeetings from "../calculators/LocalPlanningBoardMeetings";
import LocalProjectsMap from "../calculators/LocalProjectsMap"

interface ReasonObj {
  title: string;
  subtitle: string;
  body: string;
  background_color: string;
  text_color: string;
  photos: Array<string>;
  features: Array<string>;
}

interface ReasonProps {
  data: ReasonObj;
}

export default function Reason(props: ReasonProps) {
  return (
    <section
      className="reason"
      style={{
        background: props.data.background_color,
        color: props.data.text_color,
      }}
    >
      <div style={{ maxWidth: "120em", margin: "0 auto", paddingBottom: "2em" }}>
        <h1>{props.data.title}</h1>
        <h2>{props.data.subtitle}</h2>
        {props.data.features.includes("LocalProjectsMap") ? <LocalProjectsMap /> : ""}
        <div className="h-stack" >
          {props.data.body.length !== 0 ? <p>{props.data.body}</p> : <></>}

          <div
            className="v-stack pw-c"
            style={{ justifyContent: "flex-start", margin: "0 auto" }}
          >
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
              {props.data.photos.length !== 0 ? <> <div
                className="photo-row"
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
                  className="bump-up-photo photo-row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "50em",
                    marginTop: -120,
                    zIndex: 0,
                  }}
                >
                  <img src={`/images/${props.data.photos[2]}`} />
                </div> </> : <></>}
              {props.data.features.map((item: any, index: any) => {
                if (item === "TransportationMethodsCarbon") {
                  return <TransportationMethodsCarbon />;
                }
                if (item === "PopulationDensity") {
                  return <PopulationDensity />;
                }
                if (item === "LocalPlanningBoardMeetings") {
                  return <LocalPlanningBoardMeetings/>
                }

                if (item === "Slideshow") {
                  return (
                    <Slideshow
                      data={{
                        imageNames: ["AverageMiddleClassLife.svg", "CommuteLength.svg", "DowngradeToWalkToGetFood.svg","TakePublicTransportation.svg","WalkToGetFood.svg"],
                        imageAlts: ["", "", ""],
                      }}
                    />
                  );
                } 
                if (item === "GetLocalReps") {
                  return <GetLocalReps/>
                }else {
                  return <></>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
