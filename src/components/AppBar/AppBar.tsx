import {Link} from "react-router-dom";

export default function AppBar() {
    return <div className="bg-purple-900 h-10 pt-1.5">
        <section className="flex flex-row-reverse">
            <div className="pr-28"><Link to="/api">API Docs</Link></div>
            <div className="pr-8"><Link to="/about">About</Link></div>
            <div className="pr-96">Vicious Mockery Random Insult Generator</div>
        </section>
    </div>

}