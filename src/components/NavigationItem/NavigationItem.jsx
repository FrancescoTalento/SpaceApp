import { NavLink } from "react-router";
import styled from "styled-components";

const StyledListItem = styled.li`
    text-decoration: none;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
	display: flex;
    align-items: center;
    gap: 22px;
    font-family: ${props => props.$Ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    color: ${props => props.$Ativo ? '#7B78E5' : '#D9D9D9'};
`

export default function NavigationItem(
    {
        children, 
        to,  
        imgActive,
        imgInactive
    }){
    return(
            <NavLink to={to} style={{textDecoration:'none'}}>
                {({isActive}) => 
                (
                    <StyledListItem $Ativo={isActive}>
                        <img
                            src={isActive ? imgActive : imgInactive}
                        />
                        {children}   
                    </StyledListItem>
                )}
            </NavLink>
    )
}