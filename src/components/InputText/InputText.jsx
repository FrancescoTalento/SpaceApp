import styled from 'styled-components'
const search = new URL('../../assets/public/icones/search.png', import.meta.url).href;


const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledInput = styled.input`
    padding: 1.2rem 1.6rem;
    width: 60.2rem;
    height: 5.7rem;
    background-color: transparent;
    border: none;
    border-radius: 1rem;
    box-sizing: border-box;
    border: 2px solid;
    border-color: #C98CF1;

    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;

`

const SearchICon = styled.img`
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    right: 1.6rem;
    top: 1.2rem;
    cursor: pointer;
`

export default function InputText(){
    return(
        <StyledContainer>
            <StyledInput placeholder='O que você procura?'>
            </StyledInput>
                <SearchICon src={search} alt='search icon'/>
        </StyledContainer>
    )
}