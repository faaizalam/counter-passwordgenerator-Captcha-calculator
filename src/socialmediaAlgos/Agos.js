import React, { useEffect, useState } from 'react'
import classS from "./Agos.module.scss"

const Agos = () => {

//   let fivedays= Date.now() - (1000 * 60 * 60 * 24 * 5)-2*1000*60*60 for minu back
//   fivedays=fivedays-5*1000*60  for sec back

  let fivedays= Date.now() - (1000 * 60 * 60 * 24 * 5)
  const fivedaysTime=new Date(fivedays)
  const [rendertime,setrendertime]=useState("")

    const nowtime=new Date()
    // const fivedaysTime=new Date(fivedays)
    const diffrence=nowtime.getTime() - fivedaysTime.getTime()
    const seconds=Math.floor(diffrence/1000)
    const mins=Math.floor(seconds/60)
    const hours=Math.floor(mins/60)
    const days=Math.floor(hours/24)
    console.log(seconds)
    // if (seconds < 60) {
    //     console.log('Just now');
    //   } else if (mins < 60) {
    //     console.log(`${mins} minute${mins > 1 ? 's' : ''} ago`);
    //   } else if (hours < 24) {
    //     console.log(`${hours} hour${hours > 1 ? 's' : ''} ago`);
    //   } else if (days < 365) {
    //     console.log(`${days} day${days > 1 ? 's' : ''} ago`);
    //   } else if (nowtime.getFullYear() === fivedaysTime.getFullYear()) {
    //     console.log(`${fivedaysTime.toLocaleString('default', { month: 'short', day: 'numeric' })} at ${fivedaysTime.toLocaleString('default', { hour: 'numeric', minute: 'numeric' })}`);
    //   } else {
    //     console.log(`${fivedaysTime.toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' })}`);
    //   }
   useEffect(()=>{

       if (seconds<60) {
           setrendertime("Just now")
           
        }else if(mins<60){
            setrendertime(`${mins} minute${mins > 1 ? 's' : ''} ago`)
    }else if (hours<24) {
        setrendertime(`${hours} hour${hours > 1 ? 's' : ''} ago`)
        
    }else if(days>365){
        let chechhour
        
        console.log(7322%60)
        setrendertime(`${days} day${days > 1 ? 's' : ''} ${hours%24===0?"":hours%24>1?hours %24 +" hours ago ":hours%24+" hour ago"} ${(mins)%60===0?"":mins%60>1?mins%24 +" mins ago ":mins%24+" min ago"}`)
    } 
    else if (nowtime.getFullYear()===fivedaysTime.getFullYear()) {
       
        setrendertime(`${fivedaysTime.toLocaleString('default', { month: 'short', day: 'numeric', })} at ${fivedaysTime.toLocaleString('default', { hour: 'numeric', minute: 'numeric' })}`)
    }else{
        setrendertime(`${fivedaysTime.toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric'})} at ${fivedaysTime.toLocaleString('default', { hour: 'numeric', minute: 'numeric' })}`)
    }
    
    
},[days, fivedaysTime, hours, mins, nowtime, seconds])
    
    


  return (
    <>
    <div className={classS.b}>{fivedaysTime.toLocaleString()}</div>
    <div>{rendertime}</div>
    {/* <div>{diffrence.toLocaleString()}</div> */}
    </>
  )
}

export default Agos