import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { FundoGradinet } from "../App";
import SideBar from "../components/SideBar/SideBar";
import Banner from "../components/Banner/Banner";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import fotos from "./fotos.json";
import ModalFoto from "../components/ModalFoto/ModalFoto";
import { useMemo, useState } from "react";

const AppContainer = styled.div`
  width: 144rem;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5.6rem;
`;

const HomePage = () => {
  const [fotoGalery, setFotosGalery] = useState(fotos);

  const [selectedId, setSelectedId] = useState(null);

  const selectedPhoto = useMemo(
    () => fotoGalery.find((p) => p.id === selectedId) ?? null,
    [fotoGalery, selectedId]
  );
  const toggleFavoritoById = (id) => {
    setFotosGalery((prev) =>
      prev.map((p) => (p.id === id ? { ...p, favorito: !p.favorito } : p))
    );
  };

  const [inputValue, setInputValue] = useState("");
  const [seletedTagId, setSelectedTagId] = useState(null);



  const filteredPhotos = useMemo(() => {
    if (!inputValue && !seletedTagId) return fotoGalery;
    else if(seletedTagId && inputValue){
      return fotoGalery.filter((p) => {
      return (p.titulo.toLowerCase().includes(inputValue.toLowerCase()) ||
           p.fonte.toLowerCase().includes(inputValue.toLowerCase())) &&
            p.tagId === seletedTagId;
    });
    }
    else if(inputValue){
      return fotoGalery.filter((p) => {
      return p.titulo.toLowerCase().includes(inputValue.toLowerCase()) ||
           p.fonte.toLowerCase().includes(inputValue.toLowerCase());
    });
    }
    else if(seletedTagId){
      return fotoGalery.filter((p) => p.tagId === seletedTagId);
    }
    
  }, [fotoGalery, inputValue,seletedTagId]);
  return (
    <FundoGradinet>
      <GlobalStyles />
      <AppContainer>
        <Cabecalho onTypedSearch={setInputValue} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner />
            <Gallery
              photos={filteredPhotos}
              onSelectedPhoto={(photo) => setSelectedId(photo.id)}
              onToggleFavorito={toggleFavoritoById}
              onSelectedTag={(id)=> id === selectedId ? setSelectedTagId(null) :setSelectedTagId(id)}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalFoto
        photo={selectedPhoto}
        onClose={() => setSelectedId(null)}
        onToggleFavorito={() =>
          selectedPhoto && toggleFavoritoById(selectedPhoto.id)
        }
      />
    </FundoGradinet>
  );
};

export default HomePage;
