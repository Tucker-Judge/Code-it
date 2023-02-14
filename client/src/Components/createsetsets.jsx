import { useNavigate } from "react-router-dom";

function CreateSetSets({ set, setCardSet, cardSet, setSelectedSet }){
    
    const navigate = useNavigate()

    function handleDelete(){
       
        if(window.confirm("Are you sure you want to delete")){
        
            fetch(`http://localhost:9292/${set.id}`, {
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
        navigate("/addCards")
        setSelectedSet(set)
    }

    return(
        <div id="eachSet">
            <h1>{set.title}</h1>
            <button class="setButtons" onClick={handleClick} > Add Cards </button>
            <button class="setButtons" onClick={handleDelete}> Delete Set </button>
        </div>
    )
    
}

export default CreateSetSets