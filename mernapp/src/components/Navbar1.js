import React from 'react'
import {Link} from 'react-router-dom'
function Navbar1() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to ="/">Messeasy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to ="/login">Login1</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to ="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to ="/">Action</Link></li>
            <li><Link className="dropdown-item" to ="/">Another action</Link></li>
            <li><Link className="dropdown-item" to ="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar1;

