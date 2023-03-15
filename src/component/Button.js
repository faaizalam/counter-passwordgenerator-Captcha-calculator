import React from 'react'
import { ACTIONS_TYPE } from '../Calculator'

export const Button = ({digit,operand,dispatch}) => {
    // console.log(digit)
  return (
    <>
     {
         
        digit?(
            <button className="bg-purple-300 m-[5px] w-[50px]" onClick={()=>dispatch({type:ACTIONS_TYPE.Add_Digit,payload:digit})} >{digit}</button>):(
        <button className="bg-purple-300 m-[5px] w-[50px]" onClick={()=>dispatch({type:ACTIONS_TYPE.choose_operand,payload:operand})}>{operand}</button>)
        
    }
    </>
  )
}
