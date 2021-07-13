import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

const Carousel = (props) => {
    const { data } = props
    const post = data.allMarkdownRemark.nodes

    return (
      <div className="my-8 px-6">
        <h2 className="text-3xl font-bold text-center border-b-6 border-whiteblue text-primary">Videos Destacados</h2>
        <div className="max-w-6xl mx-auto overflow-x-scroll pb-2">
                <nav className="flex mt-6">
                  {
                    post.map((e, i) => {
                      return (
                        <div className="shadow-lg bg-white mr-4 rounded flex-shrink-0 img-size" key={i}>
                          <div className="p-8">
                            <div dangerouslySetInnerHTML={{__html:e.frontmatter.video}} className="video-iframe"></div>
                            <div className="flex justify-center">
                              <Link to={e.fields.slug} className="bg-primary text-white px-32 md:px-12 py-4 mt-4 rounded-lg md:ml-0">
                                Ver nota
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </nav>
        </div>
      </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query CarouselQuery {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isVideo: {eq: true}}}) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    video
                  }
                }
              }
        }      
      `}
      render={(data, count) => <Carousel data={data} count={count} />}
    />
  )