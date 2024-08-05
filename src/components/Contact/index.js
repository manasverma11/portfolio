import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_1a703nb',
      'template_wdt7ugi',
      refForm.current,
      'PqFUy1UdXMzLLnHTQEDzh'
    )
    .then( () => {
      alert('Message successfully sent')
      window.location.reload(false)
    },
    () => {
      alert('Failed to send the message')
    })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in a job position as a junior full stack developer.
            However, if you have other request or question, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='user_name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='user_email' placeholder='Email' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li><input type='submit' className='flat-button' value='SEND'></input></li>
                </ul>
            </form>
          </div>
        </div>
        {/* <div className='info-map'>
        Manas Verma
        <br />
        Jalandhar, Punjab
        <br />
        India <br/>
        <span>manasverma200@gmail.com</span>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
            <Popup> Manas lives here, come over for a cup of coffee :)</Popup>
          </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
