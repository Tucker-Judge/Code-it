import { useState } from "react"
import IndividualDecks from "./IndividualDecks"

function CreateDeck({user}){
    
    const[decks, setDecks] = useState(user.decks)
    
    return(
        <div>
            {decks.map((deck) =>{
                return(
                    <IndividualDecks decks={decks} setDecks={setDecks} key={deck.id} deck={deck}/>
                )
            })}
        </div>
    )
}

export default CreateDeck