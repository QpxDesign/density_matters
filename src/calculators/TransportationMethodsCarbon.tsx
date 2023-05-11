import React, { useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi"

const CARBON_OUTPUT_DATA = [
    {
        id: "bus",
        CO2perKM: 105,  // grams
        toxinsReleased: true,
    },
    {
        id: "rail",
        CO2perKM: 6,  // grams
        toxinsReleased: false,
    },
    {
        id: "gascar",
        CO2perKM: 192, // grams
        toxinsReleased: true,
    },
    {
        id: "ev",
        CO2perKM: 53,  // grams
        toxinsReleased: false,
    }
]

export default function TransportationMethodsCarbon() {
    const [activeMethod, setActiveMethod] = useState('bus')
    return (
        <div style={{ margin: "1em auto", display: "flex" }} className='tmc-container'>
            <div className='v-stack tmc' style={{ justifyContent: "flex-start", alignItems: "flex-start", width: "fit-content", height: "fit-content" }}>
                <div className={activeMethod === 'bus' ? 'method active' : 'method'} onClick={() => { setActiveMethod('bus') }}><h3>Gas-Powered Bus</h3></div>
                <div className={activeMethod === 'rail' ? 'method active' : 'method'} onClick={() => { setActiveMethod('rail') }}><h3>Long Distance High Speed Rail</h3></div>
                <div className={activeMethod === 'gascar' ? 'method active' : 'method'} onClick={() => { setActiveMethod('gascar') }}><h3>Gas-Powered Midsize Car</h3></div>
                <div className={activeMethod === 'ev' ? 'method active' : 'method'} onClick={() => { setActiveMethod('ev') }}><h3>Electric Midsize Car</h3></div>
            </div>
            <div className='v-stack tmc' style={{ justifyContent: "flex-start", alignItems: "flex-start", width: "fit-content", height: "fit-content" }}>
                <div className='results'><h3>{CARBON_OUTPUT_DATA.find(i => i.id === activeMethod)?.CO2perKM}g CO2 per KM ²</h3></div>
                {CARBON_OUTPUT_DATA.find(i => i.id === activeMethod)?.toxinsReleased ? <div className={'results'}><h3>⚠️ Releases Toxins into Air</h3></div> : <div className={'results'}><h3>ㅤ</h3></div>}

                <div className='results'><h3></h3></div>
            </div>
        </div>
    )
}
