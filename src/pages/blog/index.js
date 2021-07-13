import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div className="mx-8">
            <h1>
              Ultimas Historias
            </h1>
            <BlogRoll />
          </div>
      </Layout>
    )
  }
}
