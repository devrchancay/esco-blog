import React from "react"
import { Link } from "gatsby"

const BlogPost = ({ allBlogPost }) => {
  return (
    <div className="container">
      <div className="py-2">
        {allBlogPost.edges.map(({ node }) => {
          return (
            <article className="w-full lg:w-2/3 pt-2 pb-8">
              <h2 className="text-2xl text-primary font-display lg:text-4xl">
                <Link className="underline" to={`/${node.slug}`}>
                  {node.title}
                </Link>
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
