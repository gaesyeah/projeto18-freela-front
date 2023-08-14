import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { favoriteAlert } from "../functions/favorites";
import { CataloguePageNavBar, StyledArrow, StyledHeart } from "../style/CataloguePageBody";

const CatalogueNavBar = () => {

  const navigate = useNavigate();

  const { name, config } = useContext(UserContext);
  const { likedModels } = useContext(CatalogueContext);

  const confirmSignOut = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/sign-out`,[], config);
      localStorage.removeItem('config');
      localStorage.removeItem('name');
      window.location.reload();
    } catch ({response: {status, statusText, data: { message }}}){
      Swal.fire({
        title: `<span style=";font-size: 18px">${status} ${statusText}\n${message}</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
  };

  const signOut = () => {
    Swal.fire({
      title: '<span style=";font-size: 18px">Tem Certeza que deseja sair?</span>',
      width: 320,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#FF5C5C',
      denyButtonColor: 'lightgrey',
      }).then((result) => {
      if (result.isConfirmed) {
        confirmSignOut();
      }
    })
  };

  return (
    <CataloguePageNavBar>
    <div>
      {!name 
        ?
        <>
          <p onClick={() => navigate('/cadastro')}>Cadastro</p>
          <p onClick={() => navigate('/entrar')}>Entrar</p>
        </>
        :
        <>
          <StyledArrow onClick={signOut}/>
          <span>{name}</span>
        </>
      }
    </div>
    <h1>{likedModels.length}</h1>
    <StyledHeart onClick={favoriteAlert}/>
  </CataloguePageNavBar>
  );
};

export default CatalogueNavBar;