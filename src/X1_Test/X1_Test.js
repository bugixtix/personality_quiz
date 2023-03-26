import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './X1.css'
import { Data } from "../Questions";

export function X1_Test({quesNr_$, setNr_$, clicked_$, setClicked_$, curquesNr_$, setcurNr_$}){
    
    let question_ = 'What is your favorite type of music?'
    let answers = ['rock','pop','classic','jazz','country','hip hop','idk']

    useEffect(()=>{
        document.querySelectorAll('.X1_li').forEach(li=>{
            li.addEventListener('click',(e)=>{
                e.currentTarget.parentNode.childNodes.forEach(item=>{
                    item.classList.remove('selected')
                })
                e.currentTarget.classList.add('selected')
                setClicked_$(true)
            })
        })

        // document.querySelectorAll('.X1_img')[0].decode().then(()=>{console.log('loaded')})
    },[])
    useEffect(()=>{
        if(quesNr_$!=0){
            let outer_ = document.querySelector('.X1_outer')
            outer_.classList.remove('animation-in')
            outer_.classList.add('animation-out')
            outer_.addEventListener('animationend',handleAnimation)
        }
    },[quesNr_$])
    function handleAnimation (){
        setcurNr_$(prev=>prev+=1)
        var element = document.querySelector('.X1_outer')
        element.classList.remove('animation-out')
        element.classList.add('animation-in')
        element.removeEventListener('animationend',handleAnimation)
    }
    function btnHandler (){
        setNr_$(prev=>prev+=1)
        setClicked_$(false)
    }
    
    return(
        <div className="X1_Test">
            <div className="X1_outer" >
                <h3 className="X1_Question">
                    {Data[curquesNr_$].Question}
                </h3> 

                <ul className="X1_Answers">
                    <li className="X1_li">
                            <img className="X1_img" loading="lazy" src={require(`../Images/${Data[curquesNr_$].Images.a}`)}/>
                            <h4 className="X1_Answer">{Data[curquesNr_$].Answers.a}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" loading="lazy" src={require(`../Images/${Data[curquesNr_$].Images.b}`)}/>
                            <h4 className="X1_Answer">{Data[curquesNr_$].Answers.b}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" loading="lazy" src={require(`../Images/${Data[curquesNr_$].Images.c}`)}/>
                            <h4 className="X1_Answer">{Data[curquesNr_$].Answers.c}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" onLoad={()=>{console.log('loading-...')}} loading="lazy" src={require(`../Images/${Data[curquesNr_$].Images.d}`)}/>
                            <h4 className="X1_Answer">{Data[curquesNr_$].Answers.d}</h4>
                        </li>
                    {/* <li className="X1_li">
                            <img className="X1_img" src={require('../Images/idk_.jpg')}/>
                            <h4 className="X1_Answer">{answers[6]}</h4>
                        </li> */}
                </ul>
                {/* make it clickable once any answer was selected */}
                        <Link path={'/'} className={`link ${!clicked_$&&'clickable'}`}><button className="X1_btn" onClick={btnHandler}> click me</button>  </Link>
                
            </div>
        </div>
    )
}