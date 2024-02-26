import { Art } from "@/data/artwork"

interface ArtworkProps {
    art: Art;
}

export default function Artwork({ art }: ArtworkProps) {
    return (
        <div className="relative group">
            <div className="rounded-xl overflow-hidden">
                <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-105"
                />
            </div>
            <div className="absolute rounded-xl overflow-hidden inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-start items-end transition-opacity duration-300 p-5">
                <div className="text-white text-center">
                    <h2 className="text-lg font-bold">{art.title}</h2>
                </div>
            </div>
        </div>
    )
}