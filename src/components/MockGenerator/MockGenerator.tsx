import {useEffect, useState} from "react";

export default function MockGenerator() {

    const [mocks, setMocks] = useState([]);

    useEffect(() => {
        fetch("https://api-rkstgpevmq-uc.a.run.app/mock")
            .then(response => response.json())
            .then(items => {
                setMocks(items);
            });
    }, []);

    function getMock() {
        const mock = mocks[Math.floor(Math.random() * mocks.length)];
        console.log(mock);
    }

    return <div>
        <button onClick={getMock}>Cast Vicious Mockery</button>
    </div>
}