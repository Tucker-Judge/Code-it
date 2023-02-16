import { useNavigate } from "react-router-dom"

function Score({user}){
    
    const navigate = useNavigate()

    function handleClick(id){
        navigate(`/game/${id}`)
    }

    return(
        <div>
            {user.scores.map(score =>{
                return(
                    <div key={score.id}>
                        <div>{score.score} : {score.deck.name}</div>
                        <button onClick={()=> handleClick(score.deck.id)} > Play Again? </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Score