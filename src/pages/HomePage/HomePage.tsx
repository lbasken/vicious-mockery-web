import {useEffect, useState} from "react";

export default function HomePage(): any {

    const [mocks, setMocks] = useState<any>([]);
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        fetch("https://api-rkstgpevmq-uc.a.run.app/mock")
            .then(response => response.json())
            .then(items => {
                console.log("items:", items);
                setMocks(items);
            });
    }, []);

    function getMock(): any {
        const randomMock: any = mocks[Math.floor(Math.random() * mocks.length)];
        console.log("random mock:", randomMock);
        return randomMock?.mock;
    }

    function onClick(): any {
        setClicked(true);
    }

    if(clicked) {
        return <div>
            {getMock()}
            <div><button onClick={getMock}>Another!</button></div>
        </div>
    } else {
        return <div>
            <button onClick={onClick}>Click Me!</button>
        </div>
    }
}