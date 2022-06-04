import React from "react"
import "../styles/css/bootstrap.min.css"
import "../styles/css/style.min.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <div id="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
