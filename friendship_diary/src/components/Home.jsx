import { Link } from 'react-router-dom';
import { CreateButton } from './CreateButton';
export function Home(){
    return <div className="mamla">
       <Link to="/Shooy">
        <button>Shooy</button>
       </Link>
       <Link to="/Helio">
        <button>Helio</button>
       </Link>
       <CreateButton/>
    </div>
}