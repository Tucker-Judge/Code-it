import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"

function Cards(){

    const {id} = useParams()

    const[cards, setCards] = useState([])
    const[userInput, setUserInput] = useState("")

    useEffect(()=>{
        fetch(`/decks/${id}`)
        .then(req => req.json())
        .then(res => setCards(res.cards))
    },[id])

    function handleChange(e){
        setUserInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setUserInput("")

        fetch("/cards",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "content": userInput,
                "deck_id": id
            })
        })
        .then(req => req.json())
        .then(res => setCards([...cards, res]))
    }

    function handleDelete(id){
        if(window.confirm("Are you sure you want to delete")){
            fetch(`/cards/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(()=>{
                setCards(
                    cards.filter((allCard =>{
                        return (allCard.id !== id)
                    }))
                )
            })
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Content of Card:
                    <input onChange={handleChange} type="text" name="email" value={userInput}/>
                </label>
            <br />
                <button type="submit"> Add Card </button>
            </form>
            {cards.map(card =>
                {return(
                    <Card handleDelete={handleDelete} key={card.id} card={card}/>
                )}
            )}
        </div>
    )
}

export default Cards