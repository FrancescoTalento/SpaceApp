import styled from 'styled-components';
import tags from './tags.json';

const ContainerTag = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    
`

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 2.4rem;
    font-family: 'GandhiSansRegular';
    font-weight: normal;

    flex: 0 1 22rem;
    margin-right: 1.7rem;
    display: inline;
`
const TagBtnContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 2.4rem;
`

const TagButton = styled.button`
    border: none;
    color: #FFFFFF;
    font-size: 2.4rem;
    font-family: 'GandhiSansRegular';
    font-weight: normal;

    background-color: rgba(217, 217, 217, 0.3);
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    border: 2px solid transparent;
    transition: all 0.3s;
    &:hover {
      border-color: #C98CF1;
    }
`


export default function Tags(){
    return(
        <ContainerTag>
            <TagTitle>Busque por Tags</TagTitle>
            <TagBtnContainer>
                {tags.map(tag => <TagButton key={tag.id}>{tag.titulo}</TagButton>)}
            </TagBtnContainer>
        </ContainerTag>
    )
}