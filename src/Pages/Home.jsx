import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { FundoGradinet } from "../App";
import SideBar from "../components/SideBar/SideBar";
import Banner from "../components/Banner/Banner";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import fotos from './fotos.json';
import ModalFoto from "../components/ModalFoto/ModalFoto";
import { useState } from "react";


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
  //const [foto, setFotos] = useState(fotos)
  
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  
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
              photos={fotos} 
              onSelectedPhoto={setSelectedPhoto}/>
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalFoto photo={selectedPhoto} onClose={()=> setSelectedPhoto(null)}/>
    </FundoGradinet>
    );
}

export default HomePage;