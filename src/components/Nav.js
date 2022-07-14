import navIcon from "../bilder/navbar/nav-img.png"


export default function Nav(){
    


 
    return(
        <nav className="flex--nav-box">
            <img className="nav-splash-img" id="nav-splash" src={navIcon} alt="nav--icon" />
            <div className="flex--nav-link">
                <a href="#home" className="nav-icon-home" onClick={home}>Hjem</a>
                <a href="#aboutMe" className="nav-icon-about-me" onClick={aboutMe} >Om meg</a>
                <a href="#skill" className="nav-icon-skills" onClick={skill}>Skills</a>
                <a href="#prosjekter" className="nav-icon-prosjekter" onClick={prosjekter}>Prosjekter</a>
                <a href="#contact-me" className="nav-icon-contact-me" onClick={contactMe}>Kontakt</a>
            </div>
        </nav>
    )
}

export function home(){
    /* Gir splach background posision 0, og endrer fargen tilbake på dei andre linksa */
    document.querySelector("#nav-splash").style.left = '0'    


    document.querySelector(".nav-icon-home").style.color = '#F57F12'

    document.querySelector(".nav-icon-skills ").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-about-me").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-prosjekter").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-contact-me").style.color = '#F4E7D2'
}

export function aboutMe(){
    document.querySelector("#nav-splash").style.left = '110px'
    document.querySelector(".nav-icon-about-me").style.color = '#F57F12'

    document.querySelector(".nav-icon-skills").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-home").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-prosjekter").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-contact-me").style.color = '#F4E7D2'
}

export function skill(){
   
    document.querySelector("#nav-splash").style.left = '260px'
    document.querySelector(".nav-icon-skills").style.color = '#F57F12'

    document.querySelector(".nav-icon-home").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-about-me").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-prosjekter").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-contact-me").style.color = '#F4E7D2'
}

export function prosjekter(){
   
    document.querySelector("#nav-splash").style.left = '430px'
    document.querySelector(".nav-icon-prosjekter").style.color = '#F57F12'

    document.querySelector(".nav-icon-skills").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-home").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-about-me").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-contact-me").style.color = '#F4E7D2'
    
}
export function contactMe(){
   
    document.querySelector("#nav-splash").style.left = '630px'
    document.querySelector(".nav-icon-contact-me").style.color = '#F57F12'

    document.querySelector(".nav-icon-prosjekter").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-skills").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-home").style.color = '#F4E7D2'
    document.querySelector(".nav-icon-about-me").style.color = '#F4E7D2'
    
}