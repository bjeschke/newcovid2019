import React from 'react';
import {Link} from "react-router-dom";

interface states {

}




class Header extends React.Component<{}, states > {

    render() {
        return (
            <div className="header container-fluid mb-lg-4 mb-3 px-1">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/"><span className="navbar-brand logo mr-lg-5">newcovid2019.live</span></Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul>
                                <li className="nav-item nav-link">
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-brand">
                        <a href='https://ko-fi.com/U6U41LIA7' target='_blank'>
                            <img src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' height='36' />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>);
    }
}

export default Header;
