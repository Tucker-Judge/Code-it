import { useNavigate } from "react-router-dom"

function Sets({set}){
    
    const navigate = useNavigate()
    
    function handleClick(){
        navigate(`/game/${set.id}`)
        
        fetch(`http://localhost:9292/games/4234234/${set.id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: set.id})})
    
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return console.log(response.json())
    })
    .then(data => {
        // do something with the returned data
        console.log(data);
    })
    }
    
    
    return(
        <div class="setcard" onClick={handleClick}>
            <h1>{set.title}</h1>
        </div>
    )
}

export default Sets