import navIcon from "../bilder/navIcon.png"

export default function Nav(){
    return(
        <div className="flex--nav-box">
            <img className="nav--img" src={navIcon} alt="nav--icon" />
            <div className="flex--nav-link">
                <a href="#home" >Home</a>
                <a href="#omgMEg" >Om meg</a>
                <a href="#skills" >Skills</a>
                <a href="#prosjekter" >Prosjekter</a>
            </div>
        </div>
    )
}