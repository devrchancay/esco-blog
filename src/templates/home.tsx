import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import BlogPost from "../components/blogpost"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <BlogPost allBlogPost={data.allBlogPost} />
  </Layout>
)

export const query = graphql`
  query($locale: String!) {
    allBlogPost: allDatoCmsPost(
      filter: { locale: { eq: $locale } }
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          title
          locale
          slug
          publishDate(formatString: "DD MMM YYYY", locale: $locale)
          time: publishDate
          excerpt
        }
      }
    }
  }
`

export default IndexPage
