import React ,{useState} from 'react'
import { FunctionalChildComp } from './functionalChildComp';

export const FunctionalParentComp = () => {
    const [parentCount,setParentCount]=useState(0);
    const [childMessage, setChildMessage]= useState("");
    const handleChildMessage=(message)=>{
        setChildMessage(message);
    }
  return (
    <div>
        <h1>functional Parent component</h1>
        <h1>Parent Count:parentCount</h1>
        <button onClick={()=>setParentCount(parentCount+1)}>Increase Parent Count</button>
        <FunctionalChildComp parentCount = {parentCount} onMessage ={handleChildMessage}/> 
        <h1>childtoParentMessagetest:{childMessage}</h1>
    </div>
  )
}
/* onMessage callback to pass the messag from child to parent*/
