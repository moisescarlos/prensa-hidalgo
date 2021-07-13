import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import SectionNews from '../../components/SectionNews'

const Capital = (props) => {
    const { data } = props
    const post = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <h1 className=" w-3/5 text-3xl font-bold text-center border-b-6 border-whiteblue text-primary text-center m-auto py-8">Capital</h1>
            {
                post.map((e, i) => {
                  return (
                    <div className="p-2 block md:flex lg:flex w-full md:w-3/4 m-0 lg:w-3/4 md:m-auto lg:m-auto">
                        <SectionNews fields={ e.fields } frontmatter={ e.frontmatter } className="p-2"/>
                    </div>
                  )
                })
              }
        </Layout>
    )
}

Capital.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query CapitalQuery {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, category: {eq: "Capital"}}}) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(locale: "es", formatString: "MMMM")
                    title
                    header
                    category
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
      render={(data, count) => <Capital data={data} count={count} />}
    />
  )