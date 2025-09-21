import logo from '../../assets/public/imagens/logo.png';


import styled from "styled-components"
import InputText from "../InputText/InputText"


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 6rem 0px;
    img{
        max-width: 21.2rem;
    }
`

export default function Cabecalho(){
    return(
        <StyledHeader>
            <img src={logo} alt="logo" />
            <InputText/>
        </StyledHeader>
    )
}