import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faCss3,
  faHtml5,
  faJsSquare,
  faJava,
  faPython,
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a simple
            boy, passionate about travelling, always happy to learn new things,
            and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
        <div id="stars">
          
        </div>
        <div id="stars2">
        
        </div>
        <div id="stars3">
        
        </div>
          <div className="cubespinner">
          <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
