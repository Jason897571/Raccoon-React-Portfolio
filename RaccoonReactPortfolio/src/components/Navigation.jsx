import { Link, useLocation } from 'react-router-dom';

const NavTab = ()=>{

    const currentPage = useLocation().pathname;

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Jason Gu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={currentPage === "/About" ? "nav-link active" : "nav-link"} aria-current="page" to="/About">About Me</Link>
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