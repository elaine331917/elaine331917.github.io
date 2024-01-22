import Artwork from "@/components/artwork"
import { Art } from "@/data/artwork"
import { works } from "@/data/artwork"

interface ColumnProps {
    artworks: Art[]
}

function Column({ artworks }: ColumnProps) {
    return (
        <div>
            {artworks.map((artwork, index) => (
                <Artwork
                key={`work-${index}`}
                art={{...artwork}}
                />
            ))}
        </div>
    )
}

export default function Gallery() {

    return (
        <div className="page-container">
            <section>
                <div className="subtitle">
                    <div className="subheading">My Art</div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    <Column artworks={works.slice(0,4)}></Column>
                    <Column artworks={works.slice(4,7)}></Column>
                    <Column artworks={works.slice(7,10)}></Column>
                </div>
            </section>
        </div>
    )
}