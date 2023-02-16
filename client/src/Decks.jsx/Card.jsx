
function Card({card, handleDelete}){

    
    return(
        <div>
            <h1>{card.content}</h1>
            <button onClick={() => handleDelete(card.id)}> Delete </button>
        </div>
    )
}

export default Card