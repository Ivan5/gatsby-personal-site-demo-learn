import React, { useEffect, useState } from "react"
//import repos from "../data/repos"
import Repo from "./Repo"

const Repos = () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setResposCount] = useState([])

  useEffect(async () => {
    const data = sessionStorage.getItem("repos")
    let myRepos
    if (data) {
      myRepos = JSON.parse(data)
      setResposCount(myRepos.length)

      myRepos = myRepos.slice(1, 13)
      return setRepos(myRepos)
    }

    async function fetchRepos() {
      const response = await fetch("https://api.github.com/users/Ivan5/repos")
      myRepos = await response.json()
      setResposCount(myRepos.length)

      sessionStorage.setItem("repos", JSON.stringify(myRepos))

      setRepos(myRepos)
    }
    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
        <p>Colaboración y contribución de código</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => {
          if (repo.description) {
            return <Repo repo={repo} key={repo.id} />
          }
        })}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/Ivan5"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más en Github [{reposCount}]
        </a>
      </div>
    </div>
  )
}

export default Repos
