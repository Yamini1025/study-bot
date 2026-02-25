import { useState } from "react";
import Button from "./Button";

function Main() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    const summarize = () => {
        const newInput = input + "\nSummarize this concept";
        setInput(newInput);
        callAI(newInput);
    }

    const explain = () => {
        const newInput = input + "\nExplain this concept";
        setInput(newInput);
        callAI(newInput);
    }

    const fiveQuiz = () => {
        const newInput = input + "\nMake a quiz with 5 multiple choice questions";
        setInput(newInput);
        callAI(newInput);
    }

    const tenQuiz = () => {
        const newInput = input + "\nMake a quiz with 10 multiple choice questions";
        setInput(newInput);
        callAI(newInput);
    }

    const callAI = async (userInput) => {
        const key = process.env.REACT_APP_GEMINI_KEY;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{parts: [{text: userInput}]}]
            })
        });

        const data = await res.json();
        console.log(data);

        const aiText = data.candidates[0].content.parts[0].text;
        setOutput(aiText);
    };

    return (
        <div className = "bigContainer">
            <div className ="container">
                <h1 className = "title">StudyBot</h1>
                <input className = "textInput"type="text" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)}/>
                <div className = "buttonContainer">
                    <Button name="Summarize" clickHandler={summarize}/>
                    <Button name="Explain" clickHandler={explain}/>
                    <Button name="Quiz" clickHandler={handleClick}/>
                </div>
                <div className = "quizContainer">
                    {toggle ? 
                        <div className = "quizButton">
                            <Button name="5Qs" clickHandler={fiveQuiz}/>
                            <Button name="10Qs" clickHandler={tenQuiz}/>
                        </div> : null}
                    </div>
                <p className = "textOutput">{output}</p>
            </div>
        </div>
    );
}

export default Main;