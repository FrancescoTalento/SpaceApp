import styled from 'styled-components';
import tagsJson from './tags.json';
import { useState } from 'react';

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
    border: 2px solid ${({$favorito}) => $favorito ? '#C98CF1':'transparent'};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      border-color: #C98CF1;
    }
    
`


export default function Tags({onSelectedTag}){
    const [tags, setTags] = useState(tagsJson)

    function tagButtonClickHandler(tagSelecionada){
        
        setTags(tags.map(tag =>
            {
                if(tag.id === tagSelecionada.id){
                    return {...tag,favorito: !tag.favorito}
                }
                return {...tag, favorito:false}
            }))
        
        onSelectedTag(tagSelecionada.id)
    }
    
    
    return(
        <ContainerTag>
            <TagTitle>Busque por Tags</TagTitle>
            <TagBtnContainer>
                {tags.map(tag => <TagButton $favorito={tag.favorito} onClick={() =>tagButtonClickHandler(tag)} key={tag.id}>{tag.titulo}</TagButton>)}
            </TagBtnContainer>
        </ContainerTag>
    )
}