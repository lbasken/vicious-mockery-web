import MockGenerator from "../../components/MockGenerator/MockGenerator.tsx";
import {useState} from "react";

export default function HomePage() {
    const [version, setVersion] = useState(0);

    function handleReset() {
        setVersion(version + 1);
    }

    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <MockGenerator key={version} />
        </>
    );
}