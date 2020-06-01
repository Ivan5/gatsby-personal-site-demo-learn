import React from "react"
import profile from "../images/profile.svg"
import ContactForm from "./ContactForm"

const header = () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto p-12 max-w-4xl ">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-purple-700">
              Hola soy Ivan!
            </h1>
            <p className="text-xl font-light">Creo aplicaciones web</p>
          </div>
          <img src={profile} alt="" style={{ height: "300px" }} />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </header>
  )
}

export default header
