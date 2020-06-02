import React from "react"

const Certificate = props => {
  const certificate = props.el
  return (
    <div className="shadow p-8 bg-white mr-4 rounded">
      <h4 className="font-bold">{certificate.title}</h4>
      <div className="text-center">
        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
          Calificación: {certificate.score}
        </span>
      </div>
    </div>
  )
}

export default Certificate
