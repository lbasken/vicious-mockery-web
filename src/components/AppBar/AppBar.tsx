import {Link} from "react-router-dom";

export default function AppBar() {
    return <div className="bg-purple-900 h-10 pt-1.5">
        <section className="flex flex-row-reverse">
            <div className="pr-28 text-white"><Link to="/api">API Docs</Link></div>
            <div className="pr-8 text-white"><Link to="/about">About</Link></div>
            <div className="pr-96 text-white"><Link to="/">Vicious Mockery Random Insult Generator</Link></div>
        </section>
    </div>
}