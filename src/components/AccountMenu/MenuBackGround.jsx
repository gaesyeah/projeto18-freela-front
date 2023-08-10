import { StyledBackGround } from "../../style/MenuPageBody";

const AccountMenu = ({ setAccountMenu }) => {
  return (
    <StyledBackGround onClick={() => setAccountMenu(null)}>
    </StyledBackGround>
  )
};

export default AccountMenu;