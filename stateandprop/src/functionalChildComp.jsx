import React, { useState } from 'react'

export const FunctionalChildComp = (props) => {//props - used to pass data from parent to child
    //read only , passed as attribute to child
    const [childCount,setChildCount] = useState(0)//state - used to store and manage data that can change
    const [childtoParentMessage, setChildtoParentMessage]=useState('childtoparent message')
    //use hook state is used in functional component
    const sendMessagetoParent=()=>{
        props.onMessage(childtoParentMessage);
    }
  return (
    <div>
        <h1>child functional component</h1>
        <h1>parentCount={props.parentCount}</h1>
        <h2>childCount= {childCount}</h2>
        <button onClick={()=>setChildCount(childCount+1)}>Increase Child Count</button>
        <button onClick={sendMessagetoParent}>send message to parent</button>
    </div>
  )
}
