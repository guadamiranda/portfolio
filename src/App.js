import './Styles/app.css'

import { CiCircleInfo, CiFlag1 } from 'react-icons/ci'
import { FaBirthdayCake, FaUniversity } from 'react-icons/fa'
import { Navbar } from './Components/Navbar/navbar';
import { Card } from './Components/Card/card';
import { SkillCard } from './Components/SkillCard/SkillCard';
import { TitleSection } from './Components/TitleSection/TitleSection';
import { useRef } from 'react';

export const App = () => {
  const refHome = useRef(null)
  const refSkills = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);

  const menuRight = [{opName: "Home", ref: {refHome}}, {opName:"Skills", ref: {refSkills}}, {opName:"Projects", ref: {refProjects}}, {opName:"Contact", ref: {refContact}}];
  const menuName = "Guadalupe Miranda";
  const cardInformation = [{cardTitle: "About Me", description: ["Hi! I'm a software developer interested in the world of Front-end. In this page I'm going to publish all the project that I have been doing, all made with love ❤️"], icon:[<CiCircleInfo/>]},
                           {cardTitle: "Biography", description: ["September - 19 - 1997", "Universidad Tecnológica Nacional", "Córdoba, Argentina"], icon:[<FaBirthdayCake/>,<FaUniversity/>,<CiFlag1/>]}];
  
  const titles = ["My Skills", "Projects", "Contact"];

  return (
    <div className="app">

      <header className="App-header">
        <Navbar menuRight={menuRight} menuName={menuName}/>
      </header>

      <div className='App-body'>

        <section ref={refHome} id={menuRight[0].opName} className="App-body-home">
          <div className='cardContainer'>
            <Card cardInformation={cardInformation[0]}/>
            <Card cardInformation={cardInformation[1]}/>
          </div>

          <div className='imgContainer'>
          </div>
        </section>

        <section ref={refSkills} id={menuRight[1].opName} className="App-body-skills">
          <span><TitleSection titles={titles[0]}/></span>
          <br/>
          <span><SkillCard/></span>
        </section>

        <section ref={refProjects} id={menuRight[2].opName} className="App-body-projects">
          <span><TitleSection titles={titles[1]}/></span>
        </section>

        <section ref={refContact} id={menuRight[3].opName} className="App-body-contact">
          <span><TitleSection titles={titles[2]}/></span>
        </section>

      </div>

    </div>
  );
}
