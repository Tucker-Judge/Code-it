import { useNavigate } from "react-router-dom"

function UserLoginBtn(){
    
    //navigation function
    const navigate = useNavigate()

    //navigation to login page
    function handleClick(){
        navigate("/login")
    }

    return (
        <button class="button" onClick={handleClick}>Log In</button>
    )
}

export default UserLoginBtn