import React from "react"
import { Link, NavLink } from "react-router-dom"

function Nav() {
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

export default Nav
