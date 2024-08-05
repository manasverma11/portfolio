import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Cubes from './Cubes'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', 'a', 's']
  const jobArray = [
    'W',
    'e',
    'b',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full Stack Developer / React Developer</h2>
        <div className="btn-wrapper">
        <Link to="contact" className="flat-button">
          {' '}
          CONTACT ME{' '}
        </Link>
        <a href ="https://drive.google.com/file/d/1OYBMgXzwM7P_AAlWx3D2B6fWQvezRuXL/view?usp=sharing" class="flat-button" target="_blank">VIEW RESUME</a>
        </div>
      </div>
      <Cubes />
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home
