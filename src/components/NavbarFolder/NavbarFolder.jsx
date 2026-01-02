import React from 'react'
import "./NavbarFolder.css"
import { useNavigate } from 'react-router-dom'
import { getUserRole } from '../../auth';
function NavbarFolder() {
    const navigate=useNavigate();
    const role=getUserRole();
    console.log("role---",role)
  return (
    <div className='navbar-container'>
        <button onClick={()=>navigate('/userprofile')} className='btn-clss'>Profile</button>
        <button onClick={()=>navigate('/addPaymentDetails')} className='btn-clss'>Add CardDetails</button>
        <button onClick={()=>navigate('/masterList')} className='btn-clss'>MasterList</button>
        <button onClick={()=>navigate('/trains')} className='btn-clss'>Trains</button>
        {role =='admin' &&<button onClick={()=>navigate('/admin/upload-trains')} className='btn-clss'>Upload Train</button>}
    </div>
  )
}

export default NavbarFolder