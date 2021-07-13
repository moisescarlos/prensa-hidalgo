import { Link } from 'gatsby'
import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default function SectionNews(props) {
    const { featuredimage, title, date } = props.frontmatter
    const slug = props.fields.slug

    return (
        <Link to={slug}>
        <div className="grid grid-flow-col items-center border-2 my-2 rounded-2xl">
            <p className="vertical-text bg-whiteblue text-white uppercase rounded-l-2xl">{date}</p>
            <div className="relative w-36">
                <PreviewCompatibleImage
                imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                }}
                />
            </div>
            <h1 className="p-4">{title}</h1>
        </div>
        </Link>
    )
}
