import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Layout = props =>
  <div>
    <div id="wrapper" className="toggled">

      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">
              React Example
            </a>
          </li>
          <li>
            {/* <a href="#">Dashboard</a> */}
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          {props.children}
        </div>
      </div>
      {/* <!-- /#page-content-wrapper --> */}

    </div>
  </div>

export default Layout