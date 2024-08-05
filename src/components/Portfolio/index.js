
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
//import portfolioData from './portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    console.log()
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Projects".split("")}
                idx={15}
                />
            </h1>
            <p>
            <strong>• Chat Application using Socket:</strong><br/>
             <cite><blockquote> Created a simple chat application using the command line for interaction.<br/>
               The application had two main parts: the server and the clients, where the server connected with multiple clients.<br/>
               Enabled real-time communication between multiple clients using Java socket programming.<br/>
               Used socket programming to set up a two-way communication channel between the client and server for real- time message exchange.<br/>
               Tech: Java<br/></blockquote></cite>
               </p>
               <p>
          <strong>• Blood Donation Website:</strong><br/>
          <cite><blockquote>Developed a website enabling users to find blood donors by looking up contact details, location, and blood types.<br/>
          Implemented user account creation with access to entertainment games, RSS Zone, Blood Camp details, Blogs, Chat Bot, and Career Options.<br/>
           Enabled user-to-user search functionality with the option to send friend requests and exchange messages with emojis upon acceptance.<br/>
           Designed a registration page for users to sign up as blood donors, making their contact details and blood types visible to others.<br/>
           Integrated a BMI calculator on the Home page for users to calculate weight relative to height for health assessment.<br/>
            Tech: HTML, CSS, JavaScript, PHP, MySQL, AJAX<br/></blockquote></cite>
            </p>
            <p>
          <strong>• Code Wizard- Online Code Editor:</strong><br/>
          <cite><blockquote>Built a real-time code editor with advanced features for highlighting code syntax.<br/>
            Supported with many programming languages like C++, C, Python, and Java to ensure it was widely usable. Developed a flexible input interface to make it easy for users to run their code.<br/>
            Provided a real-time display of output.<br/>
            Tech: HTML, CSS, React.js, Express.js, Monaco Editor<br/></blockquote></cite>
            </p>
          <p>
          <strong>• Face Detection and Recognition:</strong><br/>
          <cite><blockquote>Created a robust system to detect and identify human faces in real-time.<br/>
            Built the system using Python, leveraging the Caffe model and OpenCV library for image processing. Trained the model with a comprehensive dataset of facial images to improve accuracy.<br/>
            Recognized faces correctly in both clear and blurred images, as well as side face images.<br/>
            Achieved accurate face recognition with the proposed model.<br/>
            Tech: Python, OpenCV<br/></blockquote></cite>
            </p>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Portfolio