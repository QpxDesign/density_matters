import React from 'react'
import Sources from "../assets/Sources.json"
import {AiFillHome} from "react-icons/ai"
export default function SourcePage() {
  return (
    <div style={{background:"#a78bfa",minHeight:"100vh",paddingBottom:"2em"}}>
        <a href="/"><AiFillHome style={{fontSize:"2.5em",position:"absolute",left:10,top:10,color:"white"}} className='icon'/></a>
        <h1 style={{margin:"0 auto",fontSize:"3em",color:"white",width:"100%",textAlign:'center',padding:".5em 0"}}>Sources</h1>
        <ol style={{fontFamily:"pt-mono",width:"min(35em,90%)",margin:"0 auto",fontSize:"1.25em",color:"white",marginBottom:"2em"}}>
           {Sources.map((item : any, index: any) => {
            return <><li style={{maxWidth:"110%",overflowX:"scroll"}} dangerouslySetInnerHTML={{
              __html: index+1+". "+item,
            }} id={index+1}></li></>
           })}

        </ol>

    </div>
  )
}
