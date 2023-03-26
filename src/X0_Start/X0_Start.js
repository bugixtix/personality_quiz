import React, { useState } from "react";
import { Link } from "react-router-dom";
import './X0.css'
export function X0_Start({name_value_$, setName_value_$,}){
    let [clickable_$,setClick_$]=useState(false)
    function SETNAME_VALUE(e){setName_value_$(e.target.value)}

    function LINK_CLICK(bool = false){
        localStorage.setItem('_name_',JSON.stringify(name_value_$))
        if (bool) window.location.assign(window.location.href + 'X1_Test' )
    }
    
    function ENTER(e){if(e.key === 'Enter' && name_value_$.length > 3 )LINK_CLICK(true)}

    return(
        <div className="X0_Start">
            <div className="X0_outer">
                <h2 className="X0_h2">Gib bitte deinen Namen ein, und klicke auf 'Start' zu starten</h2>
                <input className="X0_input" type={'text'} placeholder={''} value={name_value_$} onChange={(e)=>SETNAME_VALUE(e)} onKeyDown={(e)=>{ENTER(e)}} ></input>
                <Link className={`X0_Link ${name_value_$.length < 3 && 'unclickable'}`} to={'/X1_Test'} onClick={LINK_CLICK(false)}> <h2> Start </h2></Link>
            </div>
        </div>
    )

}