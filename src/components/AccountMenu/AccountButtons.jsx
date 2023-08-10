import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/userContext";
import { StyledAccountButtons, StyledEditIcon, StyledPlusIcon } from "../../style/CataloguePageBody";
import loadingGif from "./../../assets/loadingGif.gif";

const AccountButtons = ({ accountMenu: { accountMenu, setAccountMenu, breeds, myModels } }) => {

  const { name } = useContext(UserContext);

  const accountFeatures = (type) => {
    if (breeds === null) return;
    if (!name) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">Você precisa estar logado para ${type} modelos</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
    setAccountMenu(type);
    document.body.scrollIntoView();
  }

  return (
    <StyledAccountButtons name={name} breeds={breeds} myModels={myModels} accountMenu={accountMenu}>
      <div onClick={() => accountFeatures('cadastrar')}>{breeds === null ? <img src={loadingGif}/> : <StyledPlusIcon />}</div>
      <div onClick={() => accountFeatures('editar')}>{(myModels === null && name) ? <img src={loadingGif}/> : <StyledEditIcon />}</div>
    </StyledAccountButtons>
  )
};

export default AccountButtons;

