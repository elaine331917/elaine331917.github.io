import { Heart } from "lucide-react";

export default function Footer() {

    return (
        <div className="py-5 w-full shadow-md px-6 md:px-20">
            <div className="max-w-screen-lg flex flex-row items-center justify-center mx-auto w-full gap-1">
                <span>Made with</span> <Heart size={16}/> <span>by Elaine</span>
            </div>
        </div>
    )
}