import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./Posts"
import Certificate from "./Certificate"
import Course from "./Course"

const Codigo = () => {
  const data = useStaticQuery(graphql`
    {
      codigoJson {
        data {
          certificates {
            title
            score
            code
          }
          courses {
            title
            progress
            url
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.codigoJson.data.certificates}
            titulo="Mis certificados online"
            card={Certificate}
          />

          <Posts
            data={data.codigoJson.data.courses}
            titulo="Mis cursos"
            card={Course}
          />
        </div>
      </div>
    </section>
  )
}

export default Codigo
