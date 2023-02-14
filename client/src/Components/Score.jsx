import { useParams } from "react-router-dom"
import Header from "./Header"

function Score (){

    let {score} = useParams()

    return (
        <div>
            <Header />
            <p>Your Final Score is: {score}</p>
        </div>
    )
}

export default Score