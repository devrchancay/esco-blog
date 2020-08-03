import React from "react"

const BlogPost = ({ allBlogPost }) => {
  return (
    <div className="container">
      <div className="py-2">
        {allBlogPost.edges.map(({ node }) => {
          return (
            <article>
              <h2 className="text-2xl text-primary font-display">
                {node.title}
              </h2>
              <h4 className="text-primary text-body">{node.publishDate}</h4>
              <p className="text-primary font-body">{node.excerpt}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
