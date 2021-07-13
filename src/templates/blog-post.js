import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components//PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  video,
  category,
  title,
  helmet,
  featuredimage,
  date,
  header
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet || ''}
      <div className="container px-5 mx-auto py-4 lg:px-32">
        <div className="relative h-40 lg:h-64">
          <PreviewCompatibleImage
          imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post $title}`,
          }}
          />
        </div>
        <section className="mt-10 max-w-xl mx-auto cont-cont" >
            <h1 className="font-bold text-4xl mb-4">{title}</h1>
            <p className="break-words">{header}</p>
            <div className="mt-5 flex justify-between">
                <p className="font-bold">{category}</p>
                <p className="text-whitegray">{date}</p>
            </div>
            <hr className="my-8 border-gray-400"/>
            <div className="max-w-full prose">
            <PostContent content={content} />
            </div>
            <div className="flex justify-center video-post">
              <PostContent content={video} />
            </div>
        </section>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <script data-ad-client="ca-pub-1035048148988410" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Helmet>
        }
        category={post.frontmatter.category}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        video={post.frontmatter.video}
        header={post.frontmatter.header}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(locale: "es", formatString: "DD MMMM YYYY")
        title
        header
        category
        video
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
`
