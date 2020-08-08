import React from "react"

const Hero = () => {
  return (
    <div className="container mt-4">
      <div className="lg:w-3/5 lg:py-8">
        <h1 className="text-3xl text-primary font-display leading-tight lg:text-5xl font-bold">
          Notes about <span className="title-javascript"> JavaScript</span>,{" "}
          <span className="title-react">ReactJS</span>,{" "}
          <span className="title-react">React Native</span> and more by{" "}
          <span className="title-name">Ramón Chancay.</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
