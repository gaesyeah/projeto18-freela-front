import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/userContext";
import { StyledAccountButtons, StyledEditIcon, StyledPlusIcon } from "../../style/CataloguePageBody";

const AccountButtons = ({ accountMenu: { accountMenu, setAccountMenu } }) => {

  const { name } = useContext(UserContext);

  const accountFeatures = (type) => {
    if (!name) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">Você precisa estar logado para ${type} modelos</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
    setAccountMenu(type);
  }

  return (
    <StyledAccountButtons accountMenu={accountMenu}>
      <div onClick={() => accountFeatures('cadastrar')}><StyledPlusIcon /></div>
      <div onClick={() => accountFeatures('editar')}><StyledEditIcon /></div>
    </StyledAccountButtons>
  )
};

export default AccountButtons;

