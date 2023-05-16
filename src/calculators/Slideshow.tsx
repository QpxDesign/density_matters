import React, { useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
interface SlideshowObj {
    imageNames: Array<string>;
    imageAlts: Array<string>;

}

interface SlideshowProps {
    data: SlideshowObj
}

export default function Slideshow(props: SlideshowProps) {
    const [activeImageIndex, setActiveIndexImage] = useState(0)
    return (
        <div style={{ margin: "0 auto", display: "flex", justifyContent: 'center', position: "relative" }} className="slideshow">
            <IoIosArrowDropleftCircle style={{ position: "absolute", left: -50, top: '50%', fontSize: "5em", color: "#ec4899", background: "white", padding: 0, borderRadius: "100em",cursor:"pointer"}} role="button" onClick={() => {
                if (activeImageIndex === 0) {
                    setActiveIndexImage(props.data.imageNames.length-1)
                } else {
                    setActiveIndexImage(activeImageIndex-1)
                }
            }} />
            <div className='v-stack'>

           
            <img  src={`/images/${props.data.imageNames[activeImageIndex]}`} alt={props.data.imageAlts[activeImageIndex]} style={{ border: "none", objectFit: "contain", borderRadius: "0", marginTop: "1em", height: "min(20em,60vh)", paddingBottom: "1em", }} />
            <IoIosArrowDroprightCircle style={{ position: "absolute", right: -50, top: '50%', fontSize: "5em", color: "#ec4899", background: "white", padding: 0, borderRadius: "100em",cursor:"pointer" }} role="button" onClick={() => {
                     if (activeImageIndex === props.data.imageNames.length-1) {
                        setActiveIndexImage(0)
                    } else {
                        setActiveIndexImage(activeImageIndex+1)
                    }
            }}/>
            <h3>From 50 Student Responses</h3></div>

        </div>
    )
}
