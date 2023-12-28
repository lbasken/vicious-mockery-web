import {useState} from "react";

export default function HomePage(): any {

    const [mocks, setMocks] = useState([]);

    function getMock(): any {
        fetch("https://api-rkstgpevmq-uc.a.run.app/mock")
            .then(response => response.json())
            .then(items => {
                console.log("items:", items);
                setMocks(items);
            });
    }

    return <div>
        <div>
            <button onClick={getMock}>Test</button>
        </div>
    </div>
}