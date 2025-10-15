import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { FundoGradinet } from "../App";
import SideBar from "../components/SideBar/SideBar";
import Banner from "../components/Banner/Banner";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";



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
`


const HomePage = () =>
{
    return(
    <FundoGradinet>
      <GlobalStyles/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <SideBar/>
          <GalleryContent>
            <Banner/>
            <Gallery/>
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </FundoGradinet>
    );
}

export default HomePage;