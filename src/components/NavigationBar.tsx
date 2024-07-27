import React from "react"
import { Link, NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
function NavigationBar() {
  return (
    <header>
      <Link to="/">CRUD App</Link>
      <nav>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          posts
        </NavLink>{" "}
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          about
        </NavLink>{" "}
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          contact
        </NavLink>
      </nav>
    </header>
  )
}

export default NavigationBar
