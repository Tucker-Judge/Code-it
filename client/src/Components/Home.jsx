import Sets from "./Sets"
import Header from "./Header"
import { useState, useEffect } from "react"

function Home({ user }){
    
    const [cardSet, setCardSet] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${user.id}`)
        .then((r)=> r.json())
        .then((res) => setCardSet(res.decks))
    },[])

    return(
        <div>
            <Header />
            {cardSet.map(set=>{
                return(
                    <Sets key={set.id} set={set}/>
                )
            })}
        </div>
    )
}

export default Home