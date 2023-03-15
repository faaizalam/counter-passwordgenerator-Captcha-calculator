import {configureStore} from "@reduxjs/toolkit"

import Addred from "./Reducer"


const StoreMain=configureStore({
     reducer:{
          AddingSub:Addred

     }

})
export default  StoreMain