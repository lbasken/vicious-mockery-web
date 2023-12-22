import MockGenerator from "../../components/MockGenerator/MockGenerator.tsx";
import {useState} from "react";

export default function HomePage() {

    const [show, setShow] = useState(false);
    const[render, setRender] = useState(false);

    function onClick() {
        setRender(false);
        setShow(true);
    }

    function onTest() {
        setRender(true);
    }

    if(render) {
        return <div>
            <MockGenerator />
            <button onClick={onClick}>Button</button>
        </div>
    }

    if(!show) {
        return <div>
            <button onClick={onClick}>Click Me</button>
        </div>
    } else {
        return <div>
            <MockGenerator />
            <button onClick={onTest}>Click Me Again</button>
        </div>
    }
}