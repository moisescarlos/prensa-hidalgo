import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const News = (props) => {
    const { data } = props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div className="h-auto md:h-screen lg:h-screen bg-primary text-white flex justify-center items-center flex-col md:flex-row lg:flex-row">
           <div className="hidden lg:block">
            <Link to={posts[0].node.fields.slug}>
            <figure className="image h-container-lg rounded-lg">
                <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4 font-bold text-primary">{posts[0].node.frontmatter.title}</span></figcaption>
                <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container-lg">
                    <PreviewCompatibleImage
                    imageInfo={{
                        image: posts[0].node.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${posts[0].node.frontmatter.title}`,
                    }}
                    />
                </section>
            </figure>
            </Link>
           </div>
            <div>
                <div className="flex md:block lg:block flex-col items-center mt-4 md:mt-0 lg:mt-0">
                  <Link to={posts[1].node.fields.slug}>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4 font-bold text-primary">{posts[1].node.frontmatter.title}</span></figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <PreviewCompatibleImage
                            imageInfo={{
                                image: posts[1].node.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${posts[1].node.frontmatter.title}`,
                            }}
                            />
                        </section>
                    </figure>
                  </Link>
                  <Link to={posts[2].node.fields.slug}>
                    <figure className="image h-56 rounded-lg mt-4 md:mt-0 lg:mt-0">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4 font-bold text-primary">{posts[2].node.frontmatter.title}</span></figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <PreviewCompatibleImage
                            imageInfo={{
                                image: posts[2].node.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${posts[2].node.frontmatter.title}`,
                            }}
                            />
                        </section>
                    </figure>
                  </Link>
                </div>
                <div className="flex md:block lg:block flex-col items-center mt-4">
                  <Link to={posts[3].node.fields.slug}>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4 font-bold text-primary">{posts[3].node.frontmatter.title}</span></figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <PreviewCompatibleImage
                            imageInfo={{
                                image: posts[3].node.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${posts[3].node.frontmatter.title}`,
                            }}
                            />
                        </section>
                    </figure>
                  </Link>
                  <Link to={posts[4].node.fields.slug}>
                    <figure className="image h-56 rounded-lg my-4 md:my-0 lg:my-0 ">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4 font-bold text-primary">{posts[4].node.frontmatter.title}</span></figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <PreviewCompatibleImage
                            imageInfo={{
                                image: posts[4].node.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${posts[4].node.frontmatter.title}`,
                            }}
                            />
                        </section>                
                    </figure>
                  </Link>
                </div>
            </div>
        </div>
    )
}

News.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query LastNewsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" }, , featuredpost: {eq: false} } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  header
                  templateKey
                  date(locale: "es", formatString: "DD - MMMM - YY")
                  featuredpost
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
        }
      `}
      render={(data, count) => <News data={data} count={count} />}
    />
  )