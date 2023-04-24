import * as React from "react"
import { graphql } from "gatsby"
import { container, title, date, director, movieInfo, info, imageContainer, shape} from "../../styles/shapepage.module.css"


const ShapePage = ({data}) => {
    return (
      <div className={container}>
          <div className={movieInfo}>
            <div className={title}>
                <p>{data.filmJson.title}</p>
            </div>
            <div className={info}>
                <p className={date}>{data.filmJson.year}</p>
                <p className={director}>{data.filmJson.director}</p>
            </div>
          </div>
          <div className={imageContainer}>
            <img className={shape} src={'../../kmeans/'+ data.filmJson.img_name} alt={data.filmJson.title}></img>
          </div>
          <div className={imageContainer}>
            <img className={shape} src={'../../avg/'+ data.filmJson.avg_name} alt={data.filmJson.title}></img>
          </div>
            
      </div>
    )
}

export const data = graphql`
  query ($id: String) {
    filmJson(id: {eq: $id}) {
      title
      year
      director
      img_name
      avg_name
    }
  }
`
export const Head = ({ data }) => <title>{data.filmJson.title}</title>

export default ShapePage