import { useState } from "react";
import Button from "./Button";

function Main() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleEvent = () => {
        setOutput("input received");
    }

    return (
        <div className = "bigContainer">
            <div className ="container">
                <h1 className = "title">StudyBot</h1>
                <input className = "textInput"type="text" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)}/>
                <div className = "buttonContainer">
                    <Button name="Summarize" clickHandler={handleEvent}/>
                    <Button name="Explain" clickHandler={handleEvent}/>
                    <Button name="Quiz" clickHandler={handleEvent}/>
                </div>
                <p className = "textOutput">{output}</p>
            </div>
        </div>
    );
}

export default Main;