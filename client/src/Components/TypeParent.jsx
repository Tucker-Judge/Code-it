import TypeIt from "./TypeIt"
import { useState } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TypeParent({ id }){

    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:9292/cardsets/${id}`)
          .then((r) => r.json())
          .then((cards) => {


                const newArray = cards.map(card =>{
            
                    return {question: card.question, 
                            description: card.description, 
                            hint:card.hint, 
                            answer: card.answer}
                })

                setQuestionArray(newArray)
          });
      }, []);

      useEffect(()=>{
        fetch(`http://localhost:9292/games/4234234/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                   id: id 
                })
        })
      },[])

      

    //Array of questions
    const[questionArray, setQuestionArray] = useState(["Seb","Tuck","Ale","Soph","Olive"])

    //index of the question array
    const[questionCount, setQuestionCount] = useState(0)

    const[score, setScore] = useState(0)

    if(questionCount+1 === questionArray.length){
                    // replaceQuestionArray()
                    navigate(`/score/${score}`)
                }
    
    return(
        <TypeIt score={score} setScore={setScore} key="1" setQuestionArray={setQuestionArray} setQuestionCount={setQuestionCount} questionCount={questionCount} question={questionArray[questionCount]} questionArray={questionArray}/>
    )
}

export default TypeParent