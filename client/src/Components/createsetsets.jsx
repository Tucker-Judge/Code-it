import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateSetSets({ set, setCardSet, cardSet }){
    
    const navigate = useNavigate()

    const[isPrivate, setIsPrivate] = useState(card.set.private)

    function handleDelete(){
       
        if(window.confirm("Are you sure you want to delete")){
        
            fetch(`http://localhost:3000/decks/${set.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(()=>{
                setCardSet(
                    cardSet.filter((oneSet =>{
                        return (oneSet.id !== set.id)
                    }))
                )
            })
        }
    }
    
    function handleClick(){
        navigate(`/addCards/${set.id}`)
    }

    function handlePrivate(){
        setIsPrivate(!isPrivate)

        fetch("http://localhost:3000/decks", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({private: isPrivate})
        })
        .then(res=>res.json())
        .then()
    }

    return(
        <div id="eachSet">
            <h1>{set.title}</h1>
            <button class="setButtons" onClick={handleClick} > Add Cards </button>
            <button class="setButtons" onClick={handleDelete}> Delete Set </button>
            {isPrivate ?(
                <button class="setButtons" onClick={handlePrivate}> Set to Public </button>
            ):(
                <button class="setButtons" onClick={handlePrivate}> Set to Private</button>
            )}
        </div>
    )
    
}

export default CreateSetSets