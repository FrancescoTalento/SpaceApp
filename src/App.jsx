import styled from 'styled-components'
import './App.css'
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Cabecalho from './components/Cabecalho/Cabecalho';

const FundoGradinet = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;
`;

function App() {
  

  return (
    <FundoGradinet>
      <GlobalStyles/>
      <Cabecalho/>
    </FundoGradinet>
  )
}

export default App
