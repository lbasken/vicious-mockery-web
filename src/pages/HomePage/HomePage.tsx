import "./HomePage.css";
import {useEffect, useState} from "react";

export default function HomePage(): any {

    const [mocks, setMocks] = useState<any>([]);
    const [mock, setMock] = useState<string>();

    useEffect(() => {
        fetch("https://api-rkstgpevmq-uc.a.run.app/mocks")
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

    return <div className="absolute mock-generation">
        <div className="mock-button">
            <button className="bg-gray-700 rounded-sm text-white" onClick={onClick}>Cast Vicious Mockery</button>
        </div>
        <div className="pt-10">
            <div className="bg-gray-700 rounded-sm w-64 text-center text-white">{mock}</div>
        </div>
    </div>
}