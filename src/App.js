import './App.scss';
import { Navbar } from './Components/Navbar/Navbar';
import { Title } from './Components/Title/Title';
import { Presentation } from './Components/Presentation/Presentation';
import { SkillsCard } from './Components/SkillsCard/SkillsCard';
import { useRef } from 'react';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { ImageBottom } from './Components/ImageBottom/ImageBottom';
import { Card } from './Components/Card/Card';
import { AboutMe } from './Components/AboutMe/AboutMe';
import splitit from '../src/Assets/splitit.png'; 
import artesis from '../src/Assets/artesis.PNG';

export const App = () => {
  const homeRef = useRef(null)
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const projects = [{title:<span><b>S</b>plitIt</span>, description:'Expenses division App', url:'', img:splitit},
                    {title:<span><b>A</b>rtesis</span>, description:'Digital art e-commerce App', url:'', img:artesis}]

  return (
    <div className="App">

      <header className="App-header">
        <Navbar homeRef={homeRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
      </header>

      <section>
        <div ref={homeRef} className='home-section'>
          <div className='opacity'>
            <div className='home-section__presentation'><Presentation/></div>
          </div>
        </div>

        <div ref={aboutMeRef} className='aboutMe-section'>
          <div className='title-div'><Title title={<span><b>A</b>BOUT <b>M</b>E</span>}/></div>
          <div className='aboutMe-section__body'>
            <AboutMe/>
          </div>
        </div>

        <div ref={skillsRef} className='skill-section'>
          <div className='opacityNoCenter'>
            <div className='title-div'><Title title={<span><b>S</b>KILLS</span>}/></div>
            <div className='skill-section__center'>
              <SkillsCard/>
            </div>
          </div>  
        </div>

        <div ref={projectsRef} className='projects-section'>
          <div className='title-div'><Title title={<span><b>P</b>ROJECTS</span>}/></div>
          <div className='projects-section__body'>
            {projects.map((project) => <Card name={project.title} description={project.description} url={project.url} img={project.img}/> )}
          </div>
        </div>

        <div ref={contactRef} className='contact-section'>
          <div className='title-div'><Title title={<span><b>C</b>ONTACT</span>}/></div>
          <div className='contact-section__body'>
            <div className='contact-section__body-center'><Contact/></div>
            
          </div>
          <div className='contact-section__body-footer'><ImageBottom/></div>
        </div>

        <Footer/>

        
      </section>
    </div>
  );
}