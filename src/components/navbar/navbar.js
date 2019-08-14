import React from "react";

function NavBar(props) {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="../home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../feed">Feed</a>
      </li>
    </ul>
</nav>

  );
}

export default NavBar;
 


