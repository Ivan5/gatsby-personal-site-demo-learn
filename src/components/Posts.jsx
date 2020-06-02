import React from "react"

const Posts = props => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-12">{props.titulo}</h2>
      <div className="flex mt-8">
        {props.data.map(el => (
          <props.card el={el} key={el} />
        ))}
      </div>
    </>
  )
}

export default Posts
