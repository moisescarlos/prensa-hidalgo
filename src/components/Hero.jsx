import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Hero = ( props ) => {
    const { data } = props
    const post = data.allMarkdownRemark.nodes[0]

    return (
      <div className="hero-h py-4 grid items-center">
        <section className="h-full py-4 md:flex justify-around items-center border-l-8 border-r-8 md:border-r-0 border-primary">
            <section className="px-4 py-8 md:py-0 lg:py-0 w-full md:w-1/3 lg:w-1/3 ">
            <h2 className="text-2xl font-bold mb-2">{post.frontmatter.title}</h2>
            <p className="text-right mb-2">{post.frontmatter.date}</p>
            <h5 className="mb-6">{post.frontmatter.header}</h5>
            <Link to={post.fields.slug} className="bg-primary text-white px-28 md:px-12 py-3 rounded-lg button-ml md:ml-0 sm-px-bt">Ver más</Link> 
            </section>
            <section className="pt-8 md:pt-0 w-10/12 md:w-6/12 border-b-6 border-whiteblue justify-center mx-auto">
            <div className="relative hero_img">
              <PreviewCompatibleImage
                imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            </div>
            </section>
        </section>
      </div>
    )
}

Hero.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query HeroQuery {
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, featuredpost: {eq: true}}}) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "es", formatString: "DD - MMMM - YY")
                header
                featuredimage {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }      
      `}
      render={(data, count) => <Hero data={data} count={count} />}
    />
  )