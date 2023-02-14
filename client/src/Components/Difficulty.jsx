import {useState, useEffect} from 'react'

function Difficulty({id}){

const [difficulty, setDifficulty] = useState(0)


useEffect (()=>{
    fetch(`http://localhost:9292/games/:${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({difficulty: difficulty})
    })
    .then(res => res.json())
    .then(data => console.log(data.difficulty))
    
},[])

return (
        <div id="difficulty">
            <div onClick = {(e) => setDifficulty(0)}>
            <h1>Easy</h1>
            </div>
            <div onClick = {(e) => setDifficulty(1) }>
            <h1>Medium</h1>
            </div>
            <div onClick = {(e) => setDifficulty(2)}>
            <h1>Difficult</h1>
            </div>
            <div onClick = {(e) => setDifficulty(3)}>
            <h1>Insanity</h1>
            </div>
        </div>
    )
}

export default Difficulty