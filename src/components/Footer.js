import { StyledBtn } from "./Styled"
import github from "../bilder/footer/github.png"
import instagram from "../bilder/footer/instagram.png"
import linkin from "../bilder/footer/linkin.png"
import twitter from "../bilder/footer/twitter.png"
import {contactMe} from "./Nav"

export default function Footer(){
    const grey = {
        color: "#252525"
    }

    const tomato = {
        color: "#F57F12"
        
    }
    return(
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
                    <iframe src="https://editor.p5js.org/Datle/full/IHCwpXZwi" title="Curcling Game"  className="curlingGame"></iframe>
                    <div className="img-dark-footer"></div>
                    <div  className="curling-top-border">
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
                </div>
            </section>
        </footer>
    )
}
