import React, { useState, useEffect } from 'react'
import LocalPlanningMeetings from "../assets/LocalPlanningMeetings.json"
import { BsLink45Deg } from "react-icons/bs"

export default function LocalPlanningBoardMeetings() {
    const [zipcode, setZipcode]: any = useState("")
    const [city, setCity]: any = useState("")
    function getCityFromZipCode() {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=${zipcode}&key=AIzaSyBaV7HmsR_6pO_rTj5hqcpUFHc1c-YVYxk`)
            .then((r) => r.json())
            .then((r) => {
                if (r.divisions !== undefined && r.divisions !== null) {
                    Object.entries(r.divisions).forEach((element: any) => {
                        if (element[0].match("county") || r.normalizedInputssxsxsss === "Washington") {
                            setCity(element[1].name)
                        }
                    })
                }
           
            })

    }
    useEffect(() => {
        console.log(zipcode.length)

    }, [])
    useEffect(() => {
        if (zipcode.length === 5) {
            getCityFromZipCode()
        } else {
            setCity("")
        }
    }, [zipcode])
    return (
        <div style={{ width: "min(50em,90%)", background: "#a5b4fc", margin: "1em auto", fontSize: "1.2em" }}>
            <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
                <div className="h-stack-around" >
                    <label style={{ padding: '.65em' }}><h3>Enter your zipcode:</h3></label>
                    <input style={{ width: "30%", border: "none", fontSize: "1.5em", padding: ".25em .5em", fontFamily: "pt-mono", marginRight: ".5em" }} type="number" onChange={(e) => setZipcode(e.target.value)} value={zipcode} />
                </div>
                {LocalPlanningMeetings?.filter(i => i.county_name.match(city)).map((item: any, index: any) => {
                    return <div className='v-stack' style={{ width: "100%", background: "#818cf8", justifyContent: "flex-start", alignItems: "flex-start", paddingBottom: ".5em" }}>
                        <h3 className='h-stack list-item'>{item?.county_name}</h3>
                        <h4 className='h-stack list-item'>{item.planning_board_name}</h4>
                        <h4 className='h-stack list-item'><a href={item.schedule_link} target="_blank" style={{ justifyContent: 'center', alignItems: "center" }} className='h-stack'>Website <BsLink45Deg style={{ marginLeft: ".25em" }} /></a></h4>
                    </div> 
                })}</div>
            <div className="h-stack-around" >
                <label style={{ padding: '.35em', fontSize: ".85em", marginLeft: "auto" }}><h3>Data Courtesy of Google</h3></label>
            </div>
        </div>
    )
}
