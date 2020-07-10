import React from "react"

import Wrapper from "../components/wrapper"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <Landing />
  </Wrapper>
)

export default IndexPage
