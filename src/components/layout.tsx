/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/tailwind.css"
import ThemeProvider, { useTheme } from "../themeContext"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
