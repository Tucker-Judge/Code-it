import { useState } from "react"
import Header from "./Header"

function AddCards(){
    
    const [userInput, setUserInput] = useState("")

    function handleChange(e){
        setUserInput(e.target.value)
    }
    
    return(
        <div>
            <Header />
            <form >
                <label>
                    Name of set:
                    <input onChange={handleChange} type="email" name="email" value={userInput}/>
                </label>
            <br />
                <button type="submit"> Create Set </button>
            </form>
        </div>
    )
}

export default AddCards