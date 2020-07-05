import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Landing from "../components/landing"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
