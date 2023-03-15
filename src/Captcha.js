import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function Captcha() {
 const [captcah,Setcaptcha]=useState("")

 // eslint-disable-next-line react-hooks/exhaustive-deps
 const ArrrForRandom=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P",1,2,3,4,5,6,7,8,9,0]

//  const


const g=useMemo(()=>{

  return (()=>{
    let ele
  for (let i=0;i<6; i++) {
    ele = ` ${ArrrForRandom[Math.floor(Math.random()*ArrrForRandom.length)]}${ele||""}`;
    
  }
  Setcaptcha(ele)
  console.log(ele)
  
  
})
},[ArrrForRandom])

useEffect(()=>{
  if (!captcah.trim()) {
    g()
    
    
  }
},[captcah, g])

const myvalue=useRef() 
const mycode=useRef() 
const MatchtheCode=((e)=>{
  e.preventDefault()
  let mycodecheck=mycode.current.innerText.split(" ").join("")
  
  if (mycodecheck===myvalue.current.value) {
    alert("yes its")
    
  }else{
    alert("no")
    g()
  }
  
  

   


 

  

     
})


  return (
    <div className='Contanier bg-purple-500 h-[100vh] w-[100%]'>

          <div className='pt-10 flex  justify-center flex-col items-center w[400px] h-[500px] bg-purple-300'>

            <div className=' flex  justify-center flex-col items-center   text-black '>
                <img className='text-black w-[600px] h-[230px] relative'  src="./images/download (3).jpg" alt="captcha"></img>
                <div className='absolute text-black font-extrabold blur-sm  text-[100px]' ref={mycode}>{captcah}</div>
                
                </div>
                <div>
                <button className='rounded-full w-20 bg-cyan-500 hover:bg-cyan-600' onClick={g}> new?</button>
                <form onSubmit={MatchtheCode}>

                 <input type="text" ref={myvalue} className='p-10 rounded-full w-[400px] h-[30px]' placeholder='write the captcha'></input>
                <button className='rounded-full w-20 bg-cyan-500 hover:bg-cyan-600 '> submit</button>
                </form>
                </div>
          </div>



    </div>
  )
}
