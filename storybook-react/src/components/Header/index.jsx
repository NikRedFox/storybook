import "./style.css"
// import logo from "../../icon.png"
export default function Header({
    src,
    alt,
    text,
    linkA,
    linkTextA,
    linkB,
    linkTextB,
    linkC,
    linkTextC,
    buttonA,
    buttonB
}) {
    return(
        <header className="header-container">
            <div className="icon-container">
                <img src={src} alt={alt} />
                <p>{text}</p>
                
            </div>

            <nav className="links-container">
                <ul className="links-list">
                    <li><a href={linkA}>{linkTextA}</a></li>
                    <li><a href={linkB}>{linkTextB}</a></li>
                    <li><a href={linkC}>{linkTextC}</a></li>
                </ul>
            </nav>

            <div className="button-container">
                <button className="button-style">{buttonA}</button>
                <button className="button-style">{buttonB}</button>
            </div>

        </header>
    )
}