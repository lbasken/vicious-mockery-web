import "./AppBar.css";
import {Link} from "react-router-dom";

export default function AppBar(): any {
    return <div className="bg-purple-900 h-10 pt-1.5">
        <section>
            <section className="flex flex-row-reverse">
                <div className="pr-28 text-white"><Link to="/documentation">API Docs</Link></div>
                <div className="pr-8 text-white"><Link to="/about">About</Link></div>
                <div className="logo-text text-white"><Link to="/">Vicious Mockery API</Link></div>
                <div className="logo-icon pr-2">Icon</div>
            </section>
        </section>
    </div>
}