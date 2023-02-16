import { useNavigate } from "react-router-dom"

function IndividualDecks({deck, setDecks, decks}){

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/cards/${deck.id}`)
    }

    function handleDelete(){
        if(window.confirm("Are you sure you want to delete")){
            fetch(`http://localhost:3000/decks/${deck.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(()=>{
                setDecks(
                    decks.filter((oneSet =>{
                        return (oneSet.id !== deck.id)
                    }))
                )
            })
        }
    }

    return(
        <div id="eachSet">
        <h1>{deck.name}</h1>
        <button onClick={handleClick} > Add Cards </button>
        <button onClick={handleDelete}> Delete Set </button>
    </div>
    )
}

export default IndividualDecks