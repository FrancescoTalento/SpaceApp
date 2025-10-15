import './App.css'
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Cabecalho from './components/Cabecalho/Cabecalho';
import HomePage from './Pages/Home';
import styled from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';


export const FundoGradinet = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;
  /* padding: 2.4rem 8rem; */
  box-sizing: border-box;
`;

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/Home"/>}/>
        <Route path='/Home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
