import * as React from "react"
import { graphql } from "gatsby"
import { container, title, date, director, movieInfo, info, imageContainer, shape} from "../../styles/shapepage.module.css"


const ShapePage = ({data}) => {
    return (
      <div className={container}>
          <div className={movieInfo}>
            <div className={title}>
                <p>{data.file.name.replace(/-/g, " ")}</p>
            </div>
            <div className={info}>
                <p className={date}>DATE</p>
                <p className={director}>Director Name</p>
            </div>
          </div>
          <div className={imageContainer}>
            <img className={shape} src={data.file.publicURL} alt={data.file.name}></img>
          </div>
            
      </div>
    )
}
/*
container
  texts
      filmInfo
        filmTitle
        filmDirector
        filmYear
  image



*/
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