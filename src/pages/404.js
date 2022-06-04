import React from "react"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <div id="error-page" className="section-padding">
        <h2>404!</h2>
        <p>Sorry, Page doesn't exist (yet)! 😁</p>
      </div>
    </Layout>
  )
}

export default NotFound
