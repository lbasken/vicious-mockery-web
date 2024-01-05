import "./AppBar.css";
import {Link} from "react-router-dom";

export default function AppBar(): any {
    return <div className="bg-purple-900 h-10 pt-1.5">
        <section>
            <section className="flex flex-row-reverse">
                <button className="pr-14 text-white"><Link className="border-2 rounded-sm" to="/about">Add to Slack</Link></button>
                <button className="pr-4 text-white"><Link className="border-2 rounded-sm" to="/about">Add to Discord</Link></button>
                <div className="logo-text text-white"><Link to="/">Vicious Mockery API</Link></div>
                <div className="logo-icon pr-2">Icon</div>
            </section>
        </section>
    </div>
}