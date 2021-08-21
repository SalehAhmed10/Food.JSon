import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="bg-light header row">
            <div className="credits col-6"> 
                <span> <img src='/assets/github.png' alt="github"/> <small>  </small>  </span> 
                <a href="https://github.com/SalehAhmed10" target="_blank" rel="noopener noreferrer">  <small>Project of Saleh Ahmed </small> </a>
            </div>


            <div className="icons col-6">
            
            <a href="https://www.edamam.com/" target="_blank" rel="noopener noreferrer">    <span> <small>Api © edamam </small>  </span> </a>  <img src='/assets/api.png' alt="api credit"/> 
                
             </div> 
        </div>
    )
}

export default Header
