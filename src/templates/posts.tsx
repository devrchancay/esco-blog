import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

const Post = ({ data }) => {
  const { body, title } = data.datoCmsPost
  return (
    <Layout>
      <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-xl overflow-x-hidden">
        <h1>{title}</h1>
        <ReactMarkdown source={body} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($PostID: String!, $Locale: String!) {
    datoCmsPost(originalId: { eq: $PostID }, locale: { eq: $Locale }) {
      title
      body
    }
  }
`

export default Post
