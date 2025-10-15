import styled from "styled-components"
import NavigationItem from "../NavigationItem/NavigationItem"


const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

export default function SideBar()
{
    return(
        <StyledList>
            <NavigationItem 
                to={"/Home"}
                imgActive="/icons/home-ativo.png"
                imgInactive="/icons/home-inativo.png"

            >
                Inicio
            </NavigationItem>
            <NavigationItem
                to={"/Visitas"}
                imgActive={"/icons/mais-vistas-ativo.png"}
                imgInactive={"/icons/mais-vistas-inativo.png"}
            >
                Mais Visitas
            </NavigationItem>
            <NavigationItem
                to={"/Curtidas"}
                imgActive={"/icons/mais-curtidas-ativo.png"}
                imgInactive={"/icons/mais-curtidas-inativo.png"}
            >
                Mais Curtidas
            </NavigationItem>
            <NavigationItem
                to={"/Novas"}
                imgActive={"/icons/novas-ativo.png"}
                imgInactive={"/icons/novas-inativo.png"}
            >
                Novas
            </NavigationItem>
            <NavigationItem
                to={"/SurpreendaMe"}
                imgActive={"/icons/surpreenda-me-ativo.png"}
                imgInactive={"/icons/surpreenda-me-inativo.png"}
            >
                Surpreenda-me
            </NavigationItem>
        </StyledList>
    )    
}