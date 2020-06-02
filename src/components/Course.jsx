import React from "react"

const Course = props => {
  const course = props.el

  return (
    <>
      {parseInt(course.progress) >= 89 ? (
        <div className="shadow p-8 bg-white mr-4 rounded">
          {" "}
          <h4 className="font-bold">
            <a href={course.url}>{course.title}</a>
          </h4>
          <div className="text-center">
            <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
              Progreso: {parseInt(course.progress)} %
            </span>
          </div>{" "}
        </div>
      ) : null}
    </>
  )
}

export default Course
