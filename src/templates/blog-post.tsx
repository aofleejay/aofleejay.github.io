import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.tags}
        image={post.frontmatter.cover.publicURL}
        slug={post.fields.slug}
        article
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            color: #bbb;
          `}
        >
          {post.frontmatter.date}
          <span
            css={css`
              padding: 0 ${rhythm(1 / 2)};
            `}
          >
            |
          </span>
          {post.frontmatter.tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <span>{tag}</span>
            </Link>
          ))}
        </p>
        {post.frontmatter.cover && (
          <img
            src={post.frontmatter.cover.publicURL}
            alt={post.frontmatter.cover.name}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed
          shortname={data.site.siteMetadata.title}
          config={{
            identifier: post.fields.slug,
            title: post.frontmatter.title,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { draft: { ne: true } }
    ) {
      html
      frontmatter {
        title
        description
        tags
        cover {
          name
          publicURL
        }
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default BlogPost
