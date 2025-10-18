import styled from "styled-components";


const Titulo = styled.h2`
    color: #7B78E6;
    font-size: 3.2rem;
    text-align: ${props => props.$Alinhamento ? props.$Alinhamento : "left"};
    font-family: 'GandhiSansRegular';
    font-weight: normal;
    margin: 0;
`

export default Titulo;