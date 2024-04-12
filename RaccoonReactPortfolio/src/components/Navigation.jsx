import { Link, useLocation } from 'react-router-dom';

const NavTab = ()=>{

    const currentPage = useLocation().pathname;

    return(
        <>
            <nav id="navtab" className="navbar navbar-expand-md">
                <div className="container-fluid nav-holder">
                    <p className="brand">Jason Gu</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav-item-container">
                            <li className="nav-item">
                                <Link className={currentPage === "/About" || currentPage ==="/" ? "nav-link active" : "nav-link"} aria-current="page" to="/About">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"} aria-current="page" to="/Portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={currentPage === "/Contact" ? "nav-link active" : "nav-link"} aria-current="page" to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={currentPage === "/Resume" ? "nav-link active" : "nav-link"} aria-current="page" to="/Resume">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>           
        
        </>
    )
}

export default NavTab;