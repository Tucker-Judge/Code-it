import { useNavigate } from "react-router-dom"

function Menu (){
    
    const navigate = useNavigate()

    function handleClick(){
        navigate("/")
    }
    
    return(
        <button onClick={handleClick} class="button" >Home</button>
    )
}

export default Menu