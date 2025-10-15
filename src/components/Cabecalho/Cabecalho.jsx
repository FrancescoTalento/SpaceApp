import logo from '/imagens/logo.png';


import styled from "styled-components"
import InputText from "../InputText/InputText"


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
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