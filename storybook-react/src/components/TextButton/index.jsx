export default function TextButton({
    label

}){
 return (
    <button 
        type = "button" 
        className="text-button"
    >
        {label}
    </button>
 );
}