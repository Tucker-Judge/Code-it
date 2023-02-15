import CreateSetSets from "./createsetsets"
import { useState } from "react"
import Header from "./Header"

function CreateSet({cardSet, setCardSet, setSelectedSet}){
    
    const [isClicked, setIsClicked] = useState(false)
    const [userInput, setUserInput] = useState("")

    function handleSubmit(){
            fetch("http://localhost:4000/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: userInput})
        })
        .then(res=>res.json())
        .then(newPost => setCardSet([... cardSet, newPost]))
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
                                <input onChange={handleChange} type="email" name="email" value={userInput}/>
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
                    <CreateSetSets setSelectedSet={setSelectedSet} cardSet={cardSet} setCardSet={setCardSet} set={set}/>
                )
            })}
        </div>
    )
}

export default CreateSet