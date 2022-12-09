import { useQuiz } from "../../context";
import { Navbar } from "../../component";
import { Fragment } from "react";
import "./Result.css";

export const Result = () => {

    const { score } = useQuiz();

    return (
        <Fragment>
            <Navbar route="result"/>
            <main className="results d-flex direction-column align-center justify-center">
                <h2>Result</h2>
                <div>
                    <span>Your score is {score} 🍕🍕</span>
                </div>
            </main>
            
        </Fragment>
    )
}