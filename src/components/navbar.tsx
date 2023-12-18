import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <div className="py-5 w-full shadow-md px-6 md:px-20">
            <div className="max-w-screen-lg flex flex-row items-center justify-between mx-auto w-full">
                <Link to="/" className="logo-container">Logo</Link>
                <div className="flex flex-row items-center gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/resume">Resume</Link>
                </div>
                <ModeToggle />
            </div>
        </div>
    )
}