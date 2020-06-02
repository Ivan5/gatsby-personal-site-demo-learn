import React from "react"
import Header from "../components/header"
import Repos from "../components/Repos"
import Codigo from "../components/Codigo"
import EducationNav from "../components/EducationNav"

export default function Home() {
  return (
    <>
      <Header />
      <EducationNav />
      <Repos />
      <Codigo />
    </>
  )
}
