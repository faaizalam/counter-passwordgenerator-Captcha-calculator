import React from 'react'
import { useNavigate } from 'react-router-dom'



function Redirect(props) {
   props.navigate(props.loc)
    
    
    
}

export default Redirect