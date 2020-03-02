import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Menu, MenuItem, SEO, Layout } from '../components'
import defaultCoverImage from '../assets/default-cover-image.jpg'
import defaultBookCover from '../assets/default-book-cover.jpg'

interface AllMarkdownProps {
  data: {
    books: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              bookCover: {
                name: string
                publicURL: string
              }
              date: Date
              tags: [string]
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        },
      ]
    }
    games: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              coverImage: {
                name: string
                publicURL: string
              }
              date: Date
              tags: [string]
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        },
      ]
    }
    mediumBlogs: {
      nodes: [
        {
          id: string
          date: string
          title: string
          link: string
        },
      ]
    }
    site: {
      siteMetadata: {
        social: {
          medium: string
        }
      }
    }
  }
}

const Bio: React.FC = () => {
  return (
    <section
      id="bio"
      css={css`
        text-align: center;
      `}
    >
      <h1>aofleejay</h1>
      <p>Just another blog</p>
    </section>
  )
}

const IndexPage: React.FC<AllMarkdownProps> = props => {
  const [activeMenu, setActiveMenu] = useState<string>('coding')
  return (
    <Layout>
      <SEO />
      <Bio />
      <Menu>
        <MenuItem
          isActive={activeMenu === 'coding'}
          onClick={() => setActiveMenu('coding')}
        >
          CODING
        </MenuItem>
        <MenuItem
          isActive={activeMenu === 'book'}
          onClick={() => setActiveMenu('book')}
        >
          BOOK
        </MenuItem>
        <MenuItem
          isActive={activeMenu === 'game'}
          onClick={() => setActiveMenu('game')}
        >
          GAME
        </MenuItem>
      </Menu>
      <section id="content">
        {activeMenu === 'coding' &&
          props.data.mediumBlogs.nodes.map(blog => {
            return (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                `}
              >
                <p
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  {blog.title}
                </p>
                <p
                  css={css`
                    font-size: 12px;
                  `}
                >
                  {blog.date}
                </p>
              </a>
            )
          })}
        {activeMenu === 'game' && (
          <div
            css={css`
              display: grid;
              grid-gap: 10px;
              grid-template-columns: 1fr 1fr 1fr;

              @media only screen and (max-width: 600px) {
                grid-template-columns: 1fr 1fr;
              }
            `}
          >
            {props.data.games.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  css={css`
                    width: 100%;
                  `}
                >
                  <Link to={node.fields.slug}>
                    <img
                      src={
                        node.frontmatter.coverImage
                          ? node.frontmatter.coverImage.publicURL
                          : defaultCoverImage
                      }
                      css={css`
                        border: 1px darkgrey solid;
                        margin-bottom: 0;
                      `}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        )}
        {activeMenu === 'book' && (
          <div
            css={css`
              display: grid;
              grid-gap: 10px;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              margin-bottom: 15px;

              @media only screen and (max-width: 600px) {
                grid-template-columns: 1fr 1fr 1fr;
              }
            `}
          >
            {props.data.books.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  css={css`
                    width: 100%;
                  `}
                >
                  <Link to={node.fields.slug}>
                    <img
                      src={
                        node.frontmatter.bookCover
                          ? node.frontmatter.bookCover.publicURL
                          : defaultBookCover
                      }
                      css={css`
                        border: 1px darkgrey solid;
                        margin-bottom: 0;
                      `}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    books: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { tags: { eq: "เล่าหนังสือ" }, draft: { ne: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            bookCover {
              name
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
    games: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: "เล่าเกม" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            coverImage {
              name
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
    mediumBlogs: allMediumFeed {
      nodes {
        id
        date(fromNow: true)
        title
        link
      }
    }
    site {
      siteMetadata {
        social {
          medium
        }
      }
    }
  }
`

export default IndexPage
