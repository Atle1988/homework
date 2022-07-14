import skills from "../bilder/skill/skills.png"

export function OmMeg(){
    return(
        <div>
            <h2>Hei!</h2>
            <p>Mitt navn er Atle og er fra Varhaug.</p>
            <p>Jeg er 33 år gammel og har tidligere jobbet som flislegger.</p>
            <p>Dataspill, tegninger og animasjonsfilmer har alltid interessert meg.</p>
            <p>I februar ble jeg litt kjent med koding gjennom youtube og plattformen p5js.org, og i mars ble jeg deltaker i amo-kurset kodehode som jobLoop arrangerer i Stavanger.</p>
            <p>Kurset hjelper meg på veien til å bli en fullstack utvikler, vi går gjennom front-end og back-end kunnskaper.</p>
            <p>Noe av det jeg har lært om til nå: <span className="col_orange">VScode, HTML, CSS , JavaScript, Git, Github</span> og design programmet <span className="col_orange">Figma</span>.</p>
            <p>Jeg liker å lære om koding og synes det er spennende, det å kunne gi elementer på nettsiden en funksjon, plassere seksjoner og gi farger til nettsiden er gøy.</p>
            <p>På fritiden liker jeg å være med familien min. Jeg har 4 barn og er nå håndballtrener for min eldste sønn som er 12 år. Ellers så liker jeg godt å ta meg et spill på playstation når kvelden kommer.</p> 
            <p>Håper du likte å lese dette og ble litt betre kjent med meg.</p><br/>
            <h3 className="col_orange">Hilsen Atle.</h3>
        </div>
    )
}

export function Skills(){
    return(
        <div>
            <div className="section--main--textbox">
                        <h2>Skills</h2>
                        <br/><br/><br/>
                        <p>I enjoy learning and creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
                    </div>
                    <img src={skills} alt="skill bar" className="main-skill-img-left" />
        </div>
    )
}