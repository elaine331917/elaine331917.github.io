import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <>
            navbar
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/resume">Resume</Link>
        </>
    )
}