import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {

    return (
        <>
            Logo
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/resume">Resume</Link>
            <ModeToggle />
        </>
    )
}