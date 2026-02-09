import "./style.css"

export default function IconButton({
    src,
    alt
}){
    return(
        <button 
            type = "button" 
            className="icon-button"
        >
            <img src={src} alt={alt} />
        </button>
    )
}