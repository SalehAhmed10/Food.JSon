import React from 'react'
import './Footer.css'

function Footer() {
    return (
       
            <div className="bg-light footer row ">
                <div className="foot_credits col-6"> 
                    <span> <img src='/assets/github.png' alt="github"/> <small>  </small>  </span> 
                        <small>Project of Saleh Ahmed </small>
                </div>


            <div className="foot_icons col-6">
            
               <span><small>Credit to  edamam </small>  <img src='/assets/api.png' alt="api credit"/>  </span>  
                
            </div> 


            </div>

      
    )
}

export default Footer
