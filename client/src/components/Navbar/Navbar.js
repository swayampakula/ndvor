import React from "react"
import "./navbar.css"
import {Link} from "react-router-dom"

const navbar = () => {

    return (
        <div className="navbar">
            <div className="brand">
                <Link to="/"  className="brand-logo">
                    nDvor

                </Link>
            </div>

        </div>
    )

}

export default navbar;