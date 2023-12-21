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
        const mock: any = mocks[Math.floor(Math.random() * mocks.length)];
        return mock?.mock;
    }

    return <div>
        {getMock()}
    </div>
}