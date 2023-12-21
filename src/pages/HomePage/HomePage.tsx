import MockGenerator from "../../components/MockGenerator/MockGenerator.tsx";
import {useState} from "react";

export default function HomePage() {

    const [show, setShow] = useState(false);

    function onClick() {
        setShow(true);
    }

    if(show) {
        return <div>
            <MockGenerator />
            <button>Click Me</button>
        </div>
    }

    return <div>
        <button onClick={onClick}>Click Me</button>
    </div>
}