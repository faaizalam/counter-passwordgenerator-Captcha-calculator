import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './component/Button'
import OprendButton from './component/OprendButton'
import Redirect from './component/Redirect'


export const ACTIONS_TYPE={
  Add_Digit:'add',
  clear:'clear',
  deletes:"delete",
  EQaulbutt:"Eva",
  choose_operand:"choose_op"
}


function reducer(state,action) {
  switch (action.type) {
    case ACTIONS_TYPE.Add_Digit:
      let it=action.payload
      // console.log(state.currentoprand)
      // console.log(action.payload,state.currentoprand,"kkk")
      // if (state.overwrite) {
      //    return{
      //     overwrite:false,
      //     currentoprand:action.payload
      //    }
        
      // }
      if (action.payload==="0"&&state.currentoprand==="0") {
        return state
      }
      if (action.payload==="." && state.currentoprand.includes(".")) {
        console.log(state.currentoprand,"jj")
        return state
      }
 
        return{
          ...state,
         
          currentoprand:`${state.currentoprand==="0"?"":state.currentoprand}${action.payload}`
        }

     case ACTIONS_TYPE.choose_operand:
      if (state.currentoprand==="0" && state.previousop==null) {
        return state
        
      }
      if (state.currentoprand!=null && state.previousop!=null) {
        return{
          operation:action.payload,
          previousop:state.currentoprand,
          currentoprand:"0"
        }
        
      }
      if (state.previousop == null) {
        
        return{
          ...state,
          operation:action.payload,
          previousop:state.currentoprand,
          currentoprand:"0"
          
        }
      }
      console.log("meis",state.previousop)
      return{
      ...state,
        previousop:state.currentoprand,
        operation:action.payload,
        currentoprand:state.currentoprand
        

      }
      case ACTIONS_TYPE.EQaulbutt:
        if (state.currentoprand==null) {
          return state
          
        }
     
        return{
          overwrite:true,
          operation:null,
          previousop:state.currentoprand,
          currentoprand:Evaluate(state),
          
          
        }
        
        case ACTIONS_TYPE.deletes:
          if (state.currentoprand==null) {
            return state
            
          }
          // console.log(typeof state.currentoprand)
          return{
            
            currentoprand:state.currentoprand.slice(0,state.currentoprand.length-1)

          }


      case ACTIONS_TYPE.clear:
        return{
          currentoprand:"0"
        }

  
    default:
      return 0
  }
  
}
const Evaluate=((state)=>{
  const pre=parseFloat(state.previousop)
  console.log(pre)
  const curr=parseFloat(state.currentoprand)
  if (isNaN(pre) || isNaN(curr)) {
    return ""
    
  }
  let compi=""
  switch (state.operation) {
    case "+":
      compi=pre+curr
      break
    case "-":
      compi=pre-curr
      break
    case "*":
      compi=pre*curr
      break
      
      
     default:
      return ""
    }
    return compi.toString()


})
export default function Calculator() {
const Allbuttons=[
  {title:1},
  {title:2},
  {title:3},
  {opretor:"*"},
  {title:4},
  {title:5},
  {title:6},
  {opretor:"+"},
  {title:7},
  {title:8},
  {title:9},
  {opretor:"-"},
  {title:"."},
  {title:"0"},
]
const Integer_Formater=new Intl.NumberFormat("en-us",{
  maximumFractionDigits:0,
})

const Formater=((operand)=>{
  if(operand==null) return
  // console.log(operand.split('.'),"hh")
  const [integer,decimal]=operand.split('.')
       if (decimal==null) {
        return Integer_Formater.format(integer)
        
       }
       return `${Integer_Formater.format(integer)}.${decimal}`
    
})



  const [state,dispatch]=useReducer(reducer,{currentoprand:"0"})
  // console.log(state,"me")
  const navigate=useNavigate()
  const Re=((loc)=>{
     Redirect({loc,navigate})

  })


  return (
    <div className='maincalcu'>
      <header className='bg-green-400	' onClick={()=>Re("/Captcha")}  >Click me TO seee Captcha project And Random number generstor for verify code</header>
        <div className='call'>
        <div className='output calscreeen'>


        <div className='font-thin previosoperand'>
          {Formater(state.previousop)} {state.operation}
        </div>
        <div className='currentoperand'>
          {Formater(state.currentoprand)}
       
        </div>
        </div>

       
        <button className="bg-blue-500 spans hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>dispatch({type:ACTIONS_TYPE.clear})}>Ac</button>
        <button className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>dispatch({type:ACTIONS_TYPE.deletes})}>Del</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>dispatch({type:ACTIONS_TYPE.EQaulbutt})}>=</button>
       {
        Allbuttons.map((x)=>(
          <div>
          <Button digit={x.title} operand={x.opretor} dispatch={dispatch} />
         
          </div>

        ))
       }
        
      
        </div>
        <div>
          <footer>hh</footer>
        </div>
    </div>
  )
}
