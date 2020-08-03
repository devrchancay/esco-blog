import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import BlogPost from "../components/blogpost"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <div className="container">
      <div className="bg-red-500 p-2 rounded flex justify-between px-4 lg:w-1/2">
        <p className="text-lg rounded text-primary">
          This site is in the following languages:
        </p>
        <p className="text-primary text-center">EN | ES</p>
      </div>
    </div>
    <BlogPost allBlogPost={data.allBlogPost} />
  </Layout>
)

export const query = graphql`
  query($locale: String!) {
    allBlogPost: allDatoCmsPost(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          locale
          slug
          publishDate(formatString: "DD MMM YYYY", locale: $locale)
          excerpt
        }
      }
    }
  }
`

export default IndexPage
