import React from "react"
import Helmet from "react-helmet"

import Logo from "./logo"
import { useTheme } from "../themeContext"

const Header = () => {
  const { theme } = useTheme()
  const isDarkMode = theme === "theme-dark"
  const themeClassName = isDarkMode ? "bg-gray-900" : "bg-white"
  const bodyAttributes = {
    class: `transition-colors duration-150 ease-linear ${themeClassName} ${theme}`,
  }

  return (
    <header className="my-8">
      <Helmet bodyAttributes={bodyAttributes} />
      <div className="container py-4  flex justify-between align-center items-center">
        <Logo isDarkMode={isDarkMode} />
        <div className="flex"></div>
      </div>
    </header>
  )
}

export default Header
