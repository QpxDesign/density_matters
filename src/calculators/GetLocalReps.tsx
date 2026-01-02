import React, { useState, useEffect } from "react";
import { BsLink45Deg } from "react-icons/bs";

export default function GetLocalReps() {
  const [zipcode, setZipcode]: any = useState("20016");
  const [repData, setRepData]: any = useState([]);
  function fetchReps() {
    fetch(
      `https://densitymattersapi.quinnpatwardhan.com/reps?zipcode=${zipcode}`,
    )
      .then((r) => r.json())
      .then((r) => setRepData(r.representatives));
  }
  useEffect(() => {
    fetchReps();
  }, []);
  useEffect(() => {
    if (zipcode.length === 5) {
      fetchReps();
    }
  }, [zipcode]);
  function getOfficeFromRepName(name: string): any {
    // get index of rep
    var ans = "error";
    repData.officials.forEach((rep: any, index: any) => {
      if (rep.name === name) {
        repData.offices.forEach((office: any) => {
          if (office.officialIndices.includes(index)) {
            ans = office.name;
          }
        });
      }
    });
    return ans;
  }
  return (
    <div
      style={{
        width: "min(50em,90%)",
        background: "#a5b4fc",
        margin: "1em auto",
        fontSize: "1.2em",
      }}
    >
      <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
        <div className="h-stack-around">
          <label style={{ padding: ".65em" }}>
            <h3>Enter your zipcode:</h3>
          </label>
          <input
            style={{
              width: "30%",
              border: "none",
              fontSize: "1.5em",
              padding: ".25em .5em",
              fontFamily: "pt-mono",
              marginRight: ".5em",
            }}
            type="number"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
          />
        </div>
        {zipcode.length === 5
          ? repData?.map((item: any, index: any) => {
              return (
                <div
                  className="v-stack"
                  style={{
                    width: "100%",
                    background: "#818cf8",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: ".5em",
                  }}
                >
                  <h3 className="h-stack list-item">{item?.name}</h3>
                  <h4 className="h-stack list-item">{item?.area}</h4>
                  <h4 className="h-stack list-item">
                    {item?.phone !== undefined ? item?.phone : ""}
                  </h4>
                </div>
              );
            })
          : ""}
      </div>
      <div className="h-stack-around">
        <label
          style={{ padding: ".35em", fontSize: ".85em", marginLeft: "auto" }}
        >
          <h3>Data Courtesy of Google</h3>
        </label>
      </div>
    </div>
  );
}
