import * as React from "react"
import { graphql } from "gatsby"
//  get page url
//  get image
//  display

const ShapePage = ({data}) => {
    return (
        <div>
            <h1>{data.file.name.replace(/-/g, " ")}</h1>
            <img src={data.file.publicURL} alt={data.file.name}></img>
        </div>
    )
}

export const data = graphql`
  query ($id: String) {
    file(id: {eq: $id}) {
      publicURL
      name
    }
  }
`
export const Head = ({ data }) => <title>{data.file.name.replace(/-/g, " ")}</title>

export default ShapePage