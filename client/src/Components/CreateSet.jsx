import CreateSetSets from "./createsetsets"
import { useState } from "react"
import Header from "./Header"

function CreateSet({user}){
    
    const [isClicked, setIsClicked] = useState(false)
    const [userInput, setUserInput] = useState("")
    const [cardSet, setCardSet] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${user.id}`)
        .then((r)=> r.json())
        .then((res) => setCardSet(res.decks))
    },[])

    function handleSubmit(){

            fetch("http://localhost:3000/decks", {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: userInput, user_id: user.id, private: false})
        })
        .then(res=>res.json())

        .then(newPost => setCardSet([... cardSet, newPost ]))     
    }

    function handleChange(e){
        setUserInput(e.target.value)
    }

    return (
        <div>
            <Header />
            <button onClick={()=>setIsClicked(!isClicked)}> Make A Set </button>
                {isClicked ? (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name of set:
                                <input onChange={handleChange} type="text" name="email" value={userInput}/>
                            </label>
                        <br />
                                <button type="submit"> Create Set </button>
                        </form>
                    </div>
                ):(
                    null
                )}
            {cardSet.map(set =>{
                return (
                    <CreateSetSets cardSet={cardSet} setCardSet={setCardSet} set={set}/>
                )
            })}
        </div>
    )
}

export default CreateSet