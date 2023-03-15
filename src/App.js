import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Calculator from "./Calculator";
import Captcha from "./Captcha";
import Redirect  from "./component/Redirect";
import Agos from "./socialmediaAlgos/Agos";
import { Add,Subb } from "./Utils/action";
// import sass from "sass"
// const result = sass.compile(scssFilename);





function App() {
   const {qty}=useSelector((state)=>state.AddingSub)
   const disptach=useDispatch()

   const Addfun=()=>{
      Add(true,disptach)
      
   }
   const Subfun=()=>{
      Subb(true,disptach)

   }


      

   


   const Home=(()=>{
      const navigate=useNavigate()
      const Re=((loc)=>{
         Redirect({loc,navigate})

      })
      return(
         <div className="flex items-center flex-col">
            <h1 className="sm:text-blue-900 md:text-red-900" >{qty}</h1>
         <div>
            <button onClick={Addfun}><h1>+</h1></button>
            <button onClick={Subfun} disabled={qty<1}><h1>-</h1></button>
         </div>
            <button  className="bg-green-400	" onClick={()=>Re("/Calculator")}><h1> Move On Calculator project</h1></button>
         </div>
      )
   })
 

  return(
     <BrowserRouter>
    {/* <Layout> */}
   
   <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/Calculator" element={<Calculator/>}/>
  <Route path="/Captcha" element={<Captcha/>}/>
  <Route path="/Agos" element={<Agos/>}/>
 </Routes>
 
    {/* </Layout> */}
 
 </BrowserRouter>
)
}

export default App;
