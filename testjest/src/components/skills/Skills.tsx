import { useState,useEffect } from "react";
import {SkillsProps} from "./Skills.types"
export const Skills = (props:SkillsProps)=>{
    const {skills} = props;
    const [isLoggedIn,setLoggedIn] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setLoggedIn(true)
        },500)
    })
    return(
        <>
        <ul>
            {skills.map((skill)=>{
                return<li key={skill}>skill</li>
            })}
        </ul>
        {isLoggedIn?(
            <button>Start learning</button>
        ) :(
            <button onClick={()=>setLoggedIn(true)}
>Login</button>        )}
        </>
    )
}