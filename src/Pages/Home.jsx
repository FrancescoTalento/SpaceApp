import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { FundoGradinet } from "../App";
import SideBar from "../components/SideBar/SideBar";
import Banner from "../components/Banner/Banner";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import fotos from './fotos.json';
import ModalFoto from "../components/ModalFoto/ModalFoto";
import { useMemo, useState } from "react";


const AppContainer = styled.div`
  width: 144rem;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5.6rem;
`



const HomePage = () =>
  {
  const [fotoGalery, setFotosGalery] = useState(fotos)
  
  const [selectedId, setSelectedId] = useState(null);
  
  const selectedPhoto = useMemo(
    () => fotoGalery.find(p => p.id === selectedId) ?? null,
    [fotoGalery, selectedId]
  );
   const toggleFavoritoById = (id) => {
    setFotosGalery(prev =>
      prev.map(p => p.id === id ? { ...p, favorito: !p.favorito } : p)
    );
    // não precisa tocar em selectedPhoto: ele se atualiza porque é derivado de fotoGalery
  };
  // const ToggleFavorito = (toggledPhoto) =>
  // {
  //   console.log("oi");
  //   console.log(toggledPhoto);
  //     setFotosGalery(fotoGalery.map(value => {
        
  //       const photoChanged = {
  //         ...value,
  //         favorito: toggledPhoto.id === value.id ? !value.favorito : value.favorito 
  //       }
  //       if(selectedPhoto && selectedPhoto.id == toggledPhoto.id)
  //         {
  //           setSelectedPhoto({...toggledPhoto, favorito: toggledPhoto.favorito})
  //         }
  //       return photoChanged
        
  //     }))
  // }

  
  return(
    <FundoGradinet>
      <GlobalStyles/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <SideBar/>
          <GalleryContent>
            <Banner/>
            <Gallery 
              photos={fotoGalery} 
              onSelectedPhoto={(photo)=> setSelectedId(photo.id)}
              onToggleFavorito={toggleFavoritoById}
            />
             
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalFoto 
        photo={selectedPhoto} 
        onClose={()=> setSelectedId(null)}
        onToggleFavorito={() => selectedPhoto && toggleFavoritoById(selectedPhoto.id)}
        />
    </FundoGradinet>
    );
}

export default HomePage;