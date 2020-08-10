import React from "react"
import { Link } from "gatsby"

const Switcher = () => {
  return (
    <div className="container my-4">
      <div className="bg-muted w-1/2 rounded overflow-hidden lg:w-1/5">
        <ul className="w-full flex">
          <li className="w-1/2 text-center px-2 py-2">
            <Link className="text-primary block" to="/">
              EN
            </Link>
          </li>
          <li className="w-1/2 text-center px-2 py-2">
            <Link className="text-primary block" to="/es/">
              ES
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Switcher
