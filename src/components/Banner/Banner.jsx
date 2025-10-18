import styled from "styled-components"

import bannerUrl from '/assets/banner.png'; 

const StyledFigure = styled.figure`
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-height: 32.8rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${props => `url(${props.$backgroundImage})`};
    border-radius: 2rem;
    margin:0px;
`
const StyledTittle  = styled.h2`
    font-family:  "GandhiSansRegular";
    color: #FFFFFF;
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.8rem;
    max-width: 30rem;
    padding: 0px 6.4rem;
`

export default function Banner() 
{
    return(
        <StyledFigure $backgroundImage={bannerUrl}>
            <StyledTittle>A galeria mais completa de fotos do espaço!</StyledTittle>
        </StyledFigure>
    )    
}