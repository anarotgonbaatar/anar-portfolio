import React from 'react'
import './styles/Projects.css'
import SUM from './images/sum.png'
import Packify from './images/Packify-cover.png'
import Portrait from './images/portrait.jpg'
import SnakeGame from './images/snakegame-cover.mp4'
import GrabnGo from './images/grabngo-cover.jpg'
import Hungmen from './images/hungmen-cover.jpg'
import Loop1 from './images/ul-cover.mp4'
import Loop2 from './images/ul2-cover.mp4'
import Loop3 from './images/ul3-cover.mp4'

function Projects() {
    return (
        <div class="section column" id="projects-section">
            <span className='section-title'>PROJECTS</span>

            {/* Website Subsection */}
            <div className='subsection'>
                <span className='subsection-title'>Websites</span>

                {/* Websites */}
                <div className='projects-container'>
                    
                    <div className='project-card card'>
                        <img src={ SUM } className='project-image image' alt='SUM Website'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://www.rushsum.com" target="_blank" rel="noopener noreferrer">
                                Sigma Upsilon Mu Website
                            </a>
                            <p className='project-description'>
                                Website for a co-ed entrepreneurship fraternity, Sigma Upsilon Mu.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>React</span>
                                <span className='project-skill'>HTML</span>
                                <span className='project-skill'>CSS</span>
                                <span className='project-skill'>Google Apps Script</span>
                                <span className='project-skill'>Google Sheets</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <img src={ Packify } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://github.com/anarotgonbaatar/Packify" target="_blank" rel="noopener noreferrer">
                                Packify
                            </a>
                            <p className='project-description'>
                                A webapp that generates a list of items to pack based on chosen activities, days, and weather.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>React</span>
                                <span className='project-skill'>Axios</span>
                                <span className='project-skill'>CSS</span>
                                <span className='project-skill'>Node.js</span>
                                <span className='project-skill'>Express.js</span>
                                <span className='project-skill'>MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <img src={ Portrait } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io/anar-portfolio/" target="_blank" rel="noopener noreferrer">
                                Portfolio Website
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>React</span>
                                <span className='project-skill'>HTML</span>
                                <span className='project-skill'>CSS</span>
                                <span className='project-skill'>JavaScript</span>
                                <span className='project-skill'>VSCode</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Game Subsection */}
            <div className='subsection'>
                <span className='subsection-title'>Games</span>

                {/* Games */}
                <div className='projects-container'>
                    
                    <div className='project-card card'>
                        <video className='project-image image' autoPlay loop muted playsInline>
                            <source src={ SnakeGame } type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                        <div className='project-details'>
                            <a className='project-title' href="https://github.com/anarotgonbaatar/AI-Snake-Game" target="_blank" rel="noopener noreferrer">
                                AI Snake Game
                            </a>
                            <p className='project-description'>
                                A python implementation of the classic Snake game with 4 game modes, including AI controlled snakes.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Unreal Engine</span>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>UE Blueprints</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <img src={ GrabnGo } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgo.itch.io/grab-n-go" target="_blank" rel="noopener noreferrer">
                                Grab'n'Go
                            </a>
                            <p className='project-description'>
                                A shopping simulator game set in a time during the pandemic.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Unreal Engine</span>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>UE Blueprints</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <img src={ Hungmen } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgo.itch.io/hungmen" target="_blank" rel="noopener noreferrer">
                                HUNGMEN
                            </a>
                            <p className='project-description'>
                                A 3D hangman game.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Unreal Engine</span>
                                <span className='project-skill'>UE Blueprints</span>
                                <span className='project-skill'>Blender</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Art Subsection */}
            <div className='subsection'>
                <span className='subsection-title'>Art</span>

                {/* Art Projects */}
                <div className='projects-container'>
                    
                    <div className='project-card card'>
                        <video className='project-image image' autoPlay loop muted playsInline>
                            <source src={ Loop1 } type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 1
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <video className='project-image image' autoPlay loop muted playsInline>
                            <source src={ Loop2 } type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 2
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card'>
                        <video className='project-image image' autoPlay loop muted playsInline>
                            <source src={ Loop3 } type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 3
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
            </div>

        </div>
    )
}

export default Projects