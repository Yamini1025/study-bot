import { useState } from "react";
import Button from "./Button";

function Main() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleEvent = () => {
        setOutput("input received");
    }

    return (
        <div>
            <input type="text" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)}/>
            <div>
                <Button name="Summarize" clickHandler={handleEvent}/>
                <Button name="Explain" clickHandler={handleEvent}/>
                <Button name="Quiz" clickHandler={handleEvent}/>
            </div>
            <p>{output}</p>
        </div>
    );
}

export default Main;