import './App.scss';
import { Navbar } from './Components/Navbar/Navbar';
import { Title } from './Components/Title/Title';
import { Presentation } from './Components/Presentation/Presentation';
import { useRef } from 'react';

export const App = () => {
  const homeRef = useRef(null)
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
        </div>

        <div ref={skillsRef} className='skill-section'>
          <div className='opacityNoCenter'>
            <div className='title-div'><Title title={<span><b>S</b>KILLS</span>}/></div>
          </div>  
        </div>

        <div ref={projectsRef} className='projects-section'>
          <div className='title-div'><Title title={<span><b>P</b>ROJECTS</span>}/></div>
        </div>

        <div ref={contactRef} className='contact-section'>
          <div className='title-div'><Title title={<span><b>C</b>ONTACT</span>}/></div>
        </div>
      </section>

      <footer>

      </footer>
    </div>
  );
}
