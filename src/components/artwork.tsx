import { Art } from "@/data/artwork"

interface ArtworkProps {
    art: Art;
}

export default function Artwork({ art }: ArtworkProps) {
    return (
        <div>
            <img src={art.image} alt={art.title} className="w-full h-auto"/>
            <div>{art.title}, {art.date}</div>
        </div>
    )
}