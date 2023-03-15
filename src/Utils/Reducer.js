import { createSlice } from '@reduxjs/toolkit'


const initialState={
  qty:0,
}

const Musicslice=createSlice({
    name:"music",
    initialState,
    reducers:{
        increment:(state)=>{
            state.qty+=1

        },
        decrement:(state)=>{
            state.qty-=1

        },
    }
})

export default Musicslice.reducer
export const {increment,decrement}=Musicslice.actions