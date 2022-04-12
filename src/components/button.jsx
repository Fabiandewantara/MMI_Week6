import App from "../App";

const MyButton = ({
    buttonName, buttonClick
}) =>{
    return (
        <button type='button' class="btn btn-primary" onClick={buttonClick}>{buttonName}</button>
    )
}

export default MyButton;