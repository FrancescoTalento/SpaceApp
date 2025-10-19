import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import Populares from "./Populares/Populares";
import Tags from "./Tags/Tags";
import Photo from "./Photo/Photo";

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.9rem;
`
const GalleryContent = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-rows: 1fr, repeat(1fr);
    grid-template-columns:1fr 1fr;
    gap: 2.4rem;
    h2{
        grid-column: 1 / -1;
    }
`

export default function Gallery({photos=[],onSelectedPhoto,onToggleFavorito, onSelectedTag})
{
    return(
        <GalleryContainer>
            <Tags onSelectedTag={onSelectedTag}/>
            <GalleryContent>
                <FluidSection>
                    <Titulo>Navegue pela galeria</Titulo>
                    {photos.map((photo) => (
                        <Photo 
                            onZoomSolicited={onSelectedPhoto}
                            photo={photo}
                            key={photo.id}
                            onToggleFavorito={onToggleFavorito}
                        />
                    ))}
                </FluidSection>
                <Populares/>
            </GalleryContent>
        </GalleryContainer>
    )
}