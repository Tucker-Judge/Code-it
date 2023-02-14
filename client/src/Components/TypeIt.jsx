import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TypeIt({ score, setScore, question, questionArray, setQuestionArray, setQuestionCount, questionCount}){

    const navigate = useNavigate()

    //useStates

    const[mistakeCount, setMistakeCount] = useState([])

    const[arrayOfMistakes, setArrayOfMistakes] = useState([])

    const[answer, setAnswer] = useState("")

    const[isWrong, setIsWrong] = useState(false)

    const maxAttempts = 3

    let key = ""

    //functions

    //when user types
    function handleInput(e){
        if(key !== "enter"){
            setAnswer(e.target.value)
        
            if(key !== "backspace" && question !== false){
                const userInput = e.target.value
        
                checkLetter(userInput)

                somethingIsWrong(userInput)
    
                if (userInput === question.question){
                correctAnswer(userInput)
                }
                else{
                    incorrectAnswer(maxAttempts)
                }

                if(questionCount+1 === questionArray.length && userInput === question.question){
                    // replaceQuestionArray()
                    navigate(`/score/${score}`)
                }
            }
        }
        else{
            setQuestionCount(questionCount+1)
        }
    }

    function handleKeyDown(e){
        if(e.key === "Backspace"){
            key='backspace'
        }
        else if(e.key === "Enter"){
            key="enter"
        }
        else{
            key=""
        }
    }

    function checkLetter(userAnswer){
        const indexNum = userAnswer.length-1
        if(userAnswer[indexNum] === question.question[indexNum]){
            return true
        }
        else{
            setMistakeCount([...mistakeCount, userAnswer[indexNum]])
            return false
        }
    }

    function correctAnswer(){
        
        setQuestionCount(questionCount+1)
        setAnswer("")
        setScore(score+1)
        setArrayOfMistakes([])
    }

    function somethingIsWrong(userAnswer){
        if(question.question.includes(userAnswer)){
            setIsWrong(false)
        }
        else{
            setIsWrong(true)
        }
    }

    function replaceQuestionArray(){
    
        if(arrayOfMistakes.length === 0){
            console.log("Great Job!")
        }
        else{
            setQuestionArray(arrayOfMistakes)
            setQuestionCount(0)
            setArrayOfMistakes([])
        }
    }

    function incorrectAnswer(maxAttempts){
        if(mistakeCount.length+1 === maxAttempts){
            setArrayOfMistakes([...arrayOfMistakes, question])
            setQuestionCount(questionCount+1)
            setAnswer("")
            setIsWrong(false)
            setMistakeCount([])
        }
    }

    return(
        <div>
             <div>
                {question ? (
                    <p id="question" >{question.question}</p>
                ):(
                    null
                )}
                {/* <p>{question.description}</p> */}
                <p id="score" >{score}</p>
                 {isWrong ?(
                    <p>Something Is Wrong!</p>
                 ):(
                    null
                 )}
             </div>
             <div>
                 <textarea 
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    value={answer}>
                 </textarea>
             </div>
        </div>
    )
}

export default TypeIt