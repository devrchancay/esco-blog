import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import BlogPost from "../components/blogpost"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <div className="container my-4">
      <div className="bg-muted w-1/2 rounded overflow-hidden lg:w-1/5">
        <ul className="w-full flex">
          <li className="w-1/2 text-center px-2 py-2">
            <Link className="text-primary block" to="/">
              EN
            </Link>
          </li>
          <li className="w-1/2 text-center px-2 py-2">
            <Link className="text-primary block" to="/es/">
              ES
            </Link>
          </li>
        </ul>
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
          time: publishDate
          excerpt
        }
      }
    }
  }
`

export default IndexPage
