import { useState } from "react";
import Button from "./Button";

function Main() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleEvent = () => {
        setOutput("input received");
    }

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div className = "bigContainer">
            <div className ="container">
                <h1 className = "title">StudyBot</h1>
                <input className = "textInput"type="text" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)}/>
                <div className = "buttonContainer">
                    <Button name="Summarize" clickHandler={handleEvent}/>
                    <Button name="Explain" clickHandler={handleEvent}/>
                    <Button name="Quiz" clickHandler={handleClick}/>
                </div>
                <div className = "quizContainer">
                    {toggle ? 
                        <div className = "quizButton">
                            <Button name="5Qs" clickHandler={handleEvent}/>
                            <Button name="10Qs" clickHandler={handleEvent}/>
                        </div> : null}
                    </div>
                <p className = "textOutput">{output}</p>
            </div>
        </div>
    );
}

export default Main;