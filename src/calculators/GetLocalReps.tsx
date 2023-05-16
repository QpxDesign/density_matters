import React, { useState, useEffect } from 'react'
import { BsLink45Deg } from "react-icons/bs"

export default function GetLocalReps() {
  const [zipcode, setZipcode]: any = useState("20016")
  const [repData, setRepData]: any = useState([])
  function fetchReps() {
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=${zipcode}&key=AIzaSyBaV7HmsR_6pO_rTj5hqcpUFHc1c-YVYxk`).then((r) => r.json()).then((r) => setRepData(r))
  }
  useEffect(() => {
    fetchReps()
    console.log(zipcode.length)
    console.log(zipcode)

  }, [])
  useEffect(() => {
    if (zipcode.length === 5) {
      fetchReps()
    }
  }, [zipcode])
  return (
    //https://developers.google.com/civic-information/docs/v2 (DOCS FOR GOOGLE CIVIC INFORMATION API)
    // API KEY for GOOGLE API: AIzaSyBaV7HmsR_6pO_rTj5hqcpUFHc1c-YVYxk

    //EXAMPLE REPERSENTAITVES CALL:
    // https://www.googleapis.com/civicinfo/v2/representatives?address=20895&key=AIzaSyBaV7HmsR_6pO_rTj5hqcpUFHc1c-YVYxk
    <div style={{ width: "min(50em,90%)", background: "#a5b4fc", margin: "1em auto", fontSize: "1.2em" }}>
      <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
        <div className="h-stack-around" >
          <label style={{ padding: '.65em' }}><h3>Enter your zipcode:</h3></label>
          <input style={{ width: "30%", border: "none", fontSize: "1.5em", padding: ".25em .5em", fontFamily: "pt-mono", marginRight: ".5em" }} type="number" onChange={(e) => setZipcode(e.target.value)} value={zipcode} />
        </div>
        {zipcode.length === 5 ? repData?.officials?.map((item: any, index: any) => {
          return <div className='v-stack' style={{ width: "100%", background: "#818cf8", justifyContent: "flex-start", alignItems: "flex-start", paddingBottom: ".5em" }}>
            <h3 className='h-stack list-item'>{item?.name}</h3>
            <h4 className='h-stack list-item'>{repData.offices[index]?.name}</h4>
            <h4 className='h-stack list-item'>{item?.phones !== undefined ? item?.phones[0] : ""} · <a href={item?.urls !== undefined ? item?.urls[0] : ""} target="_blank" style={{ justifyContent: 'center', alignItems: "center" }} className='h-stack'>Website <BsLink45Deg style={{ marginLeft: ".25em" }} /></a></h4>
          </div>
        }) : ""}</div>
      <div className="h-stack-around" >
        <label style={{ padding: '.35em', fontSize: ".85em", marginLeft: "auto" }}><h3>Data Courtesy of Google</h3></label>
      </div>
    </div>
  )
}
