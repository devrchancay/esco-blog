import React from "react"
import DarkModeToggle from "react-dark-mode-toggle"
import Helmet from "react-helmet"

import Logo from "./logo"
import { useTheme } from "../themeContext"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
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
        <div className="flex">
          <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} />
        </div>
      </div>
    </header>
  )
}

export default Header
