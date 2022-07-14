import {StyledDiv, StyledImage} from "./Styled"
import randomDot from "../bilder/randomDot.png"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {OmMeg, Skills} from "./OmMeg"
import {aboutMe, skill, prosjekter} from "./Nav"
import zIndex from "../bilder/z-index_dotts.png"

export default function Main(){

    return(
        <main > 
            <section id="aboutMe" className="main--flex" onMouseEnter={aboutMe}>
                <StyledImage className="main--section--left"></StyledImage>
                <StyledDiv className="main--section--right">
                    <OmMeg />
                </StyledDiv>
            </section>

            <section className="sectoin--main--skills" id="skill" onMouseEnter={skill}>
                <img src={zIndex} alt="dot-img" className="z-skill-dot"/>
                <StyledDiv>
                    <Skills />
                </StyledDiv>
                <StyledImage className="main-skill-img-right"></StyledImage>
            </section>
            
            <section className="sectoin--prosjekter" id="prosjekter" onMouseEnter={prosjekter}>
                <Router>   
                        <Routes>
                            <Route path="/" element={ <Counter /> } />
                            <Route path="drumKit" element={ <Drumkit />} />
                            <Route path='toDoList' element={ <ToDoList />} />
                        </Routes>
                        
                        <nav className='Nav-header'>
                            {/* Every contents that's outside from <Router> will stay the same while Routes change */}
                            <Link to="/"> Counter </Link>
                            <Link to="/drumkit"> Drumkit </Link>
                            <Link to="/toDoList"> ToDoList </Link>
                        </nav>
                        
                </Router>
            </section>

           
        </main>
        
    )
}


function Drumkit(){
    return(
        <>
        <section className="flex">

            <StyledImage className="main-prosjekter-img1"  >
            <a target="_blank" rel="noreferrer" href="https://atle1988.github.io/kodeHode/drumKit/" className="linkSize">Try It!</a>
            <div className="toogle-prosjekt-img"></div>
            </StyledImage>

            <div className="img-prosjekter">
            </div>
                <StyledDiv>
                    <div className="section--main--textbox">
                        {<img src={randomDot} alt="" className="random-dot-prosjekter"/>}
                        <div>
                            <h2>Prosjekter</h2>
                            <p><b>Drum Kit</b></p><br/>
                            <p>Mitt DrumKit ble laget når jeg var på level 3 i kodehode kurset. Det var spennende og lærerikt prosjekt.</p>
                            <p>Mit drumkit virker med å trykke ned tastene som vises på skjermen.</p><br/>
                            <small>JavaScript, HTML og CSS</small>

                             
                        </div>
                    </div>
                </StyledDiv>    
            </section>

            
       
        </>

    )
}
function Counter(){
    
    return(

        <>
        <section className="flex" >
            <StyledImage className="main-prosjekter-img2">
            <a target="_blank" rel="noreferrer" href="https://atle1988.github.io/kodeHode/randomColorCounter/" className="linkSize">Try It!</a>
            <div className="toogle-prosjekt-img"></div>
            </StyledImage>

            <div className="img-prosjekter">
            </div>
                <StyledDiv>
                    <div className="section--main--textbox">
                        {<img src={randomDot} alt="" className="random-dot-prosjekter"/>}
                        <div>
                            <h2>Prosjekter</h2>
                            <p><b>Counter</b></p><br/>
                            <p>Dette var Påskeoppgave fra kodehode ©2022 og mitt første JavaScript prosjekt, og jeg stor kosa meg. Oppgaven var å lage en counter som kunne telle opp og ned med å vise tallet i midten av platen. </p><br/>
                            <small>JavaScript, HTML og CSS.</small>
                           
                        </div>
                    </div>
                </StyledDiv>    
            </section>
     
        </>
    )
}
function ToDoList(){
    return(

        <section className="flex" >
            <StyledImage className="main-prosjekter-img3">
            <a target="_blank" rel="noreferrer" href="https://atle1988.github.io/kodeHode/toDoList/" className="linkSize">Try It!</a>
            <div className="toogle-prosjekt-img"></div>
            </StyledImage>

            <div className="img-prosjekter">
            </div>
                <StyledDiv>
                    <div className="section--main--textbox">
                        {<img src={randomDot} alt="" className="random-dot-prosjekter"/>}
                        <div>
                        <h2>Prosjekter</h2>
            <p><b>To Do List</b></p><br/>
            <p>Min ToDoList app er en fargerik app, som gjør det mulig og legge til / slette daglige gjøremål.</p><br/>
            <small>JavaScript, HTML, CSS </small>
                        </div>
                    </div>
                </StyledDiv>    
               
            </section>
            
    )
}