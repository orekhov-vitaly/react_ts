import "./styles.css";

function Button({type="button", name, disabled=false ,  onClick}) {
    return <button className="button" type={type} disabled={disabled} onClick={onClick}>{name}</button>;
}

export default Button;