import {useEffect, useState} from "react";

export default function HomePage(): any {

    const [mocks, setMocks] = useState<any>([]);
    const [mock, setMock] = useState<string>();

    console.log("HomePage running");
    console.log("mocks", mocks);
    console.log("mock", mock);

    useEffect(() => {
        fetch("https://api-rkstgpevmq-uc.a.run.app/mock")
            .then(response => response.json())
            .then(items => {
                // console.log("items:", items);
                setMocks(items);
            });
    }, []);

    // useEffect(() => {
    //     getMock();
    // }, [mocks]);

    function getMock(): any {
        if (!mocks?.length) { return; }
        const randomMock: any = mocks[Math.floor(Math.random() * mocks.length)];
        setMock(randomMock?.mock);
    }

    function onClick(): any {
        getMock();
    }

    return <div>
        <div>
            <button onClick={onClick}>Mock me!</button>
            <div>{mock}</div>
        </div>
    </div>
}