import { useState, type ChangeEvent } from "react"
import { useAppContext } from "../../context"
import { quiz, type Answer } from "../../data/quiz"
import { Dialog } from "../Dialog"
import { Button } from "../Button"
import "./Quiz.css"

export const Quiz = () => {
    const { passTest, goToNextStep } = useAppContext()
    const [step, setStep] = useState(0)

    const quizStep = quiz[step]

    const checkAnswer = (isCorrect: boolean) => {
        if (!isCorrect) {
            alert("WRONG :C")
            return
        }
        
        alert("YAY!")
        const nextStep = step + 1
        
        if (nextStep === quiz.length) {
            passTest()
            goToNextStep()
        }
        else {
            setStep(nextStep)
        }
    }

    return (
        <Dialog isOpen={true} onClose={() => {}}>
            <div className="quiz__column">
                <h2>{quizStep.question}</h2>
                
                { quizStep.answers.map((answer: Answer) => { 
                    const { text, isCorrect } = answer;
                    return <Button label={text} onClick={() => checkAnswer(isCorrect)} />
                })}
            </div>
        </Dialog>)
}