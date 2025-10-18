import styled from "styled-components"
import IconButton from "../../IconButton/IconButton"


const PhotoFigure = styled.figure`
    margin: 0;
    width: ${$expanded => $expanded ? '100%' : '46rem'};
    display: flex;
    flex-direction:column;
    

    h3,
    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        margin: 0;
        margin-bottom: 1rem ;
        font-size: 1.6rem;
    }
    & > img{
       max-width: 100%;
       max-height: 66rem;
       border-radius: 2rem 2rem 0rem 0rem;
       /* margin: 0;
       margin-bottom: -0.5rem; */
    }
    figcaption{
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        //gap: 0.8rem;

        padding: 1.6rem 2.2rem;
        color: white;
        box-sizing: border-box;
        background-color: #001634;
        border-radius: 0rem 0rem 2rem 2rem;
        
        footer{
            display: flex;
            flex-direction: row;
        }
        h3{
            font-weight: bold;
            margin-bottom: 1rem;
        }
        h4 {
            flex-grow: 1;
            margin: 0 ;
        }
        h3,
        h4 {
            padding: 0;
            font-size: 16px;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.4rem;

    
`
const ImgFigure = styled.img`
    width: 100%;
`

export default function Photo({photo, onZoomSolicited, expanded=false}){
    return(
        <PhotoFigure $expanded={expanded}>
            <ImgFigure $expanded={expanded} src={photo.path}/>
            <figcaption>
                <div>
                    <h3>{photo.titulo}</h3>
                    <h4>{photo.fonte}</h4>
                </div>
                <footer>
                    <ButtonContainer>
                        <IconButton><img src="/icons/favorito.png"/></IconButton>
                        {!expanded ?<IconButton onClick={() => onZoomSolicited(photo)}><img src="/icons/expandir.png"/></IconButton> : ''}
                    </ButtonContainer>
                </footer>
            </figcaption>
        </PhotoFigure>
    )
}