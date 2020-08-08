import React from "react"

const BlogPost = ({ allBlogPost }) => {
  return (
    <div className="container">
      <div className="py-2">
        {allBlogPost.edges.map(({ node }) => {
          return (
            <article>
              <h2 className="text-2xl text-primary font-display lg:text-4xl">
                {node.title}
              </h2>
              <time className="text-primary text-body" datetime={node.time}>
                {node.publishDate}
              </time>

              <p className="text-primary font-body">{node.excerpt}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
