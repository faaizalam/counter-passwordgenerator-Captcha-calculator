import {increment,decrement} from "./Reducer"

export const Add=((state,disptach)=>{
    disptach(increment())
    
})
export const Subb=((state,disptach)=>{
    disptach(decrement())
    

})