import React from "react"

import Layout from "Common/Layout"
import { Container } from "Common/Container"
import SEO from "Common/SEO"

const NotFoundPage = () => (
  <Layout noAnchor={true}>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
