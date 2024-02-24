import { Link } from "react-router-dom";
import { CreateEntry } from "./CreateEntry";
export function CreateButton(){
    return (
        <div>
            <Link to="/Create">
                <button>CREATE</button>
            </Link>
        </div>
    )
}