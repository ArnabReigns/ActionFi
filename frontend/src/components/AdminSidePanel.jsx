import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/UserContext';

const AdminSidePane = () => {

  const [activeTab, setActiveTab] = useState(1);

  const ctx = useContext(UserContext);

  var options = [
    "Users",
    "Products"
  ];


  
  return (
    <div className='AdminSidePanel'>
      <h2>Admin.</h2>

      <div className="options">
        {options.map((option,idx)=> (<div key={idx} onClick={e=>ctx.setAdminActivePage(idx)}  className= {`option ${ctx.adminActivePage==idx ? "active"  : ""}`} >{option}</div>))}
      </div>
    
    </div>
  )
}

export default AdminSidePane