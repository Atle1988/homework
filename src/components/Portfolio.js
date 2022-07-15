
import iconCSS from "../bilder/skill/iconCSS.png"
import iconFIGMA from "../bilder/skill/iconFIGMA.png"
import iconHTML from "../bilder/skill/iconHTML.png"
import iconJS from "../bilder/skill/iconJS.png"
import iconREACT from "../bilder/skill/iconREACT.png"
import zIndex from "../bilder/z-index_dotts.png"
import randomDot from "../bilder/randomDot.png"
import github from "../bilder/footer/github.png"
import instagram from "../bilder/footer/instagram.png"
import linkin from "../bilder/footer/linkin.png"
import twitter from "../bilder/footer/twitter.png"

import {home, aboutMe, skill, prosjekter, contactMe} from "./Nav"
import {StyledDiv, StyledBtn , StyledImage} from "./Styled"
import {OmMeg, Skills} from "./OmMeg"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



export default function Portfolio(){
    const grey = {
        color: "#252525"
    }

    const tomato = {
        color: "#F57F12"
        
    }

    return(
        <>
            <div className="wrapper">

                <header id="home" onMouseEnter={home}>
                    <div className="intro">
                        <h1 className="col_orange">Atle</h1>
                        <h2>Påbegynt Front-end <span className="col_orange">Developer</span></h2>
                        <div className="intro--skill--img">
                            <img src={iconCSS} alt="css skill logo" width="40px" />
                            <img src={iconFIGMA} alt="FIGMA skill logo" width="40px" />
                            <img src={iconHTML} alt="HTML skill logo" width="40px" />
                            <img src={iconJS} alt="JS skill logo" width="40px" />
                            <img src={iconREACT} alt="REACT skill logo" width="40px" />
                        </div>
                    </div>
                </header>
            
                <main > 
                    <div className="main--bg"></div>
                    <div className="main--bg-small"></div>
                        <section id="aboutMe" className="flex" onMouseEnter={aboutMe}>
                            <StyledImage className="main--section--left"></StyledImage>
                            <StyledDiv>
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

                <footer>
                    <div className="section-footer" id="contact-me" onMouseEnter={contactMe}>
                        <div className="section-footer-contact">
                            <div className="section-footer-contact-left"><h1><span style={grey}>Drop me a line.<br/> I would like to hear</span> <span style={tomato}>from you!</span></h1></div>
                            <form className="section-footer-contact-right">
                                <h2>Ta kontakt med meg!</h2>
                                <div className="input-field">
                                    <label for="name">Navn</label><br/>
                                    <input placeholder="Navn"  id="name" type="text"/><br/>

                                    <label for="e-mail">E-mail</label><br/>
                                    <input placeholder="E-mail" id="e-mail" type="e-mail"/><br/>

                                    <caption>Melding</caption>
                                <textarea maxLength={670}></textarea>
                                </div>
                                <StyledBtn>Send Melding</StyledBtn>
                            </form>
                        </div>
                    </div>
                    <section className="section-dark-footer">
                        <div  className="curling-top-border"></div>
                        <iframe src="https://editor.p5js.org/Datle/full/IHCwpXZwi" title="Curcling Game"  className="curlingGame"></iframe>

                        <div className="footer-text">
                            <h3>Atle</h3>
                            <div className="footer-logo">
                                <img src={twitter} width={"36px"} alt ="atle"/>
                                <img src={github} width={"36px"} alt ="atle" />
                                <img src={linkin} width={"36px"} alt ="atle"/>
                                <img src={instagram} width={"36px"} alt ="atle"/>
                            </div>
                            <small>All Rights Reserved ©2022</small>
                            <a href="https://atle1988.github.io/kodeHode/" target="_blank" rel="noreferrer" >Min Github</a>
                        </div>  
                        <div className="img-dark-footer"></div>

                    </section>
                 </footer>

            </div>
        </>
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
                    <img src={randomDot} alt="" className="random-dot-prosjekter"/>
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
                        <img src={randomDot} alt="" className="random-dot-prosjekter"/>
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
                        <img src={randomDot} alt="" className="random-dot-prosjekter"/>
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
