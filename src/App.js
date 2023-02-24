import './Styles/app.css'
import { CiCircleInfo, CiFlag1 } from 'react-icons/ci'
import { FaBirthdayCake, FaUniversity } from 'react-icons/fa'
import { Navbar } from './Components/Navbar/navbar';
import { Card } from './Components/Card/card';
import { DividerCircle } from './Components/DividerCircle/DividerCircle';
import { SkillCard } from './Components/SkillCard/SkillCard';
import { TitleSection } from './Components/TitleSection/TitleSection';

export const App = () => {
  const menuRight = [{opName: "Home"}, {opName:"Skills"}, {opName:"Projects"}, {opName:"Contact"}];
  const menuName = "Guadalupe Miranda";
  const cardInformation = [{cardTitle: "About Me", description: ["Hi! I'm a software developer interested in the world of Front-end. In this page I'm going to publish all the project that I have been doing, all made with love ❤️"], icon:[<CiCircleInfo/>]},
                           {cardTitle: "Biography", description: ["September - 19 - 1997", "Universidad Tecnológica Nacional", "Córdoba, Argentina"], icon:[<FaBirthdayCake/>,<FaUniversity/>,<CiFlag1/>]}];

  return (
    <div className="app">

      <header className="App-header">
        <Navbar menuRight={menuRight} menuName={menuName}/>
      </header>

      <div className='App-body'>

        <section id={menuRight[0].opName} className="App-body-home">

          <div className='cardContainer'>
            <Card cardInformation={cardInformation[0]}/>
            <Card cardInformation={cardInformation[1]}/>
          </div>

          <div className='imgContainer'>
              hi
          </div>

        </section>

        <span><DividerCircle/></span>

        <span><TitleSection/></span>

        <section id={menuRight[1].opName} className="App-body-skills">
          <span><SkillCard/></span>
        </section>

        <section id={menuRight[2].opName} className="App-body-projects">
        </section>

        <section id={menuRight[3].opName} className="App-body-contact">
        </section>

      </div>

    </div>
  );
}
