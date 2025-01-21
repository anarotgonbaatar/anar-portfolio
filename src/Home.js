import React from 'react'
import './styles/Home.css'
import Portrait from './images/portrait.jpg'
import { FaGithub, FaInstagram, FaItchIo, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

function Home() {
    return (
        // Section
        <div class="section column" id="home-section">
            {/* Card */}
            <div className='card' id='home-card'>

                <div id='home-details'>
                    
                    <span className='section-title' id='name'>Anar Otgonbaatar</span>
                    <p>
                        Software Developer based in Fullerton, CA
                    </p>

                    <div className='row icon-container' id='home-icon-container'>
                        <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='icon'/>
                        </a>
                        <a href="https://www.linkedin.com/in/anar-otgonbaatar/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='icon'/>
                        </a>
                        <a href="https://www.instagram.com/haneul.anar/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='icon'/>
                        </a>
                        <a href="https://anarotgo.itch.io/" target="_blank" rel="noopener noreferrer">
                            <FaItchIo className='icon'/>
                        </a>
                        <a href="mailto:anarotgo@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <IoMail className='icon'/>
                        </a>
                    </div>
                </div>
                
                <img className='image' id='portrait' src={ Portrait } alt='Anar Otgonbaatar'></img>

            </div>
        </div>
    )
}

export default Home