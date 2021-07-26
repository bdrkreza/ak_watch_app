import React from 'react';
import { Link } from 'react-router-dom';

export default function NavUser({logout}) {

    return (
        <div>
<div class="nav-user-info">
        <h5 class="mb-0 text-white nav-user-name"></h5>
        <span class="status"></span>
        <span class="ml-2">Available</span>
      </div>
      <div className="bg-dark ">
        <Link class="dropdown-item d-flex align-items-center" to="#">
          <i class="fas fa-user mr-2"></i>
          <h6 className="mt-2 ms-2">Account</h6>
        </Link>

        <Link class="dropdown-item d-flex align-items-center" to="#">
          <i class="fas fa-cog"></i>
          <h6 className=" mt-2 ms-2">Setting</h6>
        </Link>

        <Link onClick={()=>logout()} class="dropdown-item d-flex align-items-center " to="/">
          <i class="fas fa-power-off mr-2"></i>
          <h6 className="mt-2 ms-2"> Logout</h6>
        </Link>
      </div>
        </div>
    )
}
