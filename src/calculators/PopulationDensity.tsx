import React, { useState } from 'react'
import {BsHouseFill,BsFillBuildingFill,BsBuildingsFill} from "react-icons/bs"
import {GiModernCity} from "react-icons/gi"

export default function PopulationDensity() {

    const HOUSTON_POP_DENSITY = 3160 // PEOPLE PER MILE (https://www.houstontx.gov/planning/Neighborhood/docs_pdfs/How_density.pdf)
    const GEORGETOWN_POP_DENSITY = 13_083.40  // PEOPLE PER MILE (http://www.city-data.com/neighborhood/Midtown-New-York-NY.html)
    const SAN_FRANCISCO_POP_DENSITY = 18_634.65 // PEOPLE PER MILE (https://www.census.gov/quickfacts/fact/table/sanfranciscocitycalifornia/POP010220)
    const MIDTOWN_MANHATTAN_POP_DENSITY = 46_000 // PEOPLE PER MILE (https://www.nyc.gov/site/planning/planning-level/nyc-population/current-future-populations.page)

    const ACRES_TO_SQUARE_MILES = 640;

    const [yardSize, setYardSize]: any = useState(0)
    return (
        <div style={{ width: "min(30em,90%)", background: "#a5b4fc", margin: "1em auto", }}>
            <div className="h-stack-around">
                <label style={{ padding: '.65em' }}><h3>Enter the size of your yard (in acres):</h3></label>
                <input style={{ width: "30%", border: "none", fontSize: "1.5em", padding: ".25em .5em", fontFamily: "pt-mono", marginRight: ".5em" }} type="number" onChange={(e) => setYardSize(e.target.value)} />
            </div>
            <div className="h-stack-around" style={{ background: "#818cf8", width: "100%"}}><h3 style={{ padding: '.65em',gap:'.5em',alignItems:"center"}} className='h-stack'>
                <BsHouseFill className='icon'/>Density of Houston⁶</h3>
                <h3 style={{marginRight:".75em",fontWeight:100}}>{Math.floor(yardSize/ACRES_TO_SQUARE_MILES * HOUSTON_POP_DENSITY)} people</h3>
            </div>
            <div className="h-stack-around" style={{ background: "#818cf8", width: "100%"}}><h3 style={{ padding: '.65em',gap:'.5em',alignItems:"center"}} className='h-stack'>
                <BsFillBuildingFill className='icon'/>Density of Georgetown⁷</h3>
                <h3 style={{marginRight:".75em",fontWeight:100}}>{Math.floor(yardSize/ACRES_TO_SQUARE_MILES * GEORGETOWN_POP_DENSITY)} people</h3>
            </div>
            <div className="h-stack-around" style={{ background: "#818cf8", width: "100%"}}><h3 style={{ padding: '.65em',gap:'.5em',alignItems:"center"}} className='h-stack'>
                <BsBuildingsFill className='icon'/>Density of San Francisco⁶</h3>
                <h3 style={{marginRight:".75em",fontWeight:100}}>{Math.floor(yardSize/ACRES_TO_SQUARE_MILES * SAN_FRANCISCO_POP_DENSITY)} people</h3>
            </div>
            <div className="h-stack-around" style={{ background: "#818cf8", width: "100%"}}><h3 style={{ padding: '.65em',gap:'.5em',alignItems:"center"}} className='h-stack'>
                <GiModernCity className='icon'/>Density of Manhattan⁶</h3>
                <h3 style={{marginRight:".75em",fontWeight:100}}>{Math.floor(yardSize/ACRES_TO_SQUARE_MILES * MIDTOWN_MANHATTAN_POP_DENSITY)} people</h3>
            </div>
        </div>
    )
}
