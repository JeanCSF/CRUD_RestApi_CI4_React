import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id='navbar'>
            <Link to='/' className='brand' title='Home'>
                <FaShoppingCart className='me-2'/>
                ProductsJC
            </Link>
            <button className="hamburger" title="Toggle Navbar" role="button"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                <FaBars />
            </button>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li>
                        <Link to="produtos" title="Acessar todos os produtos">Produtos</Link>
                    </li>
                    <li>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Search Movie" onChange={(e) => setSearch(e.target.value)} value={search} />
                            <button type="submit" role="search" title="Search" id="search"> <BiSearchAlt2 /> </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
