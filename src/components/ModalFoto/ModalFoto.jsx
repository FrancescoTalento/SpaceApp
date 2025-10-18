import styled from "styled-components";
import Photo from "../Gallery/Photo/Photo";

const StyledDialog = styled.dialog`

  position: fixed;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
    


  width: 80%;
  height: 44rem;
  max-height: 74rem;
  max-width: 120rem;
  
  padding: 0;
  margin: 0;
  background: transparent;
  display: ${open ? "block" : "none"};
  border: none;
`;
const BtnFecha = styled.button`
  position: absolute;
  background: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  background-image: url('/icons/fechar.png');
  width: 30px;
  height: 30px;
  

  left:97%;
  top: 5%;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgb(0,0,0,0.7);
`

export default function ModalFoto({ photo, onClose,onToggleFavorito}) {
  
  return (
    <>
      {photo !== null ? (
        <>
          <Overlay />
          <StyledDialog open={!!photo}>
            <Photo expanded={true} photo={photo} onToggleFavorito={onToggleFavorito}/>
            <BtnFecha onClick={onClose}/>
          </StyledDialog>
        </>
      ) : (
        ""
      )}
    </>
  );
}
