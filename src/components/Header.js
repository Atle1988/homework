
import iconCSS from "../bilder/skill/iconCSS.png"
import iconFIGMA from "../bilder/skill/iconFIGMA.png"
import iconHTML from "../bilder/skill/iconHTML.png"
import iconJS from "../bilder/skill/iconJS.png"
import iconREACT from "../bilder/skill/iconREACT.png"
import {home} from "./Nav"

export default function Header(){
    return(
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
       
    )
}
