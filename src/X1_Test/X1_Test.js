import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './X1.css'
import { Data } from "../Questions";

export function X1_Test({}){
    
    let question_ = 'What is your favorite type of music?'
    let answers = ['rock','pop','classic','jazz','country','hip hop','idk']

    useEffect(()=>{
        document.querySelectorAll('.X1_li').forEach(li=>{
            li.addEventListener('click',(e)=>{
                e.currentTarget.parentNode.childNodes.forEach(item=>{
                    item.classList.remove('selected')
                })
                e.currentTarget.classList.add('selected')
                // add state mentiones it is selected
            })
        })
    },[])
    return(
        <div className="X1_Test">
            <div className="X1_outer">
                <h3 className="X1_Question">
                    {Data[0].Question}
                </h3> 

                <ul className="X1_Answers">
                    <li className="X1_li">
                            <img className="X1_img" src={require(`../Images/${Data[4].Images.a}`)}/>
                            <h4 className="X1_Answer">{Data[4].Answers.a}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" src={require(`../Images/${Data[4].Images.b}`)}/>
                            <h4 className="X1_Answer">{Data[4].Answers.b}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" src={require(`../Images/${Data[4].Images.c}`)}/>
                            <h4 className="X1_Answer">{Data[4].Answers.c}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" src={require(`../Images/${Data[4].Images.d}`)}/>
                            <h4 className="X1_Answer">{Data[4].Answers.d}</h4>
                        </li>
                    <li className="X1_li">
                            <img className="X1_img" src={require('../Images/idk_.jpg')}/>
                            <h4 className="X1_Answer">{answers[6]}</h4>
                        </li>
                </ul>
                {/* make it clickable once any answer was selected */}
                        <Link path={'/'} className={`link ${'clickable'}`}><button className="X1_btn" disabled> click me</button>  </Link>
                
            </div>
        </div>
    )
}