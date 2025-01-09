import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">Home1</Link>
            </li>
            <li>
            <Link to="/generate">Generate1</Link>
            </li>
            <li>
            <Link to="/scan">Scan1</Link>
            </li>
        </ul>
        </nav>
);
    
};  

export{ Nav }

