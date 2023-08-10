import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/userContext";
import { StyledEditMenu } from "../../../style/MenuPageBody";
import { MyModelsCard } from "./MyModels";

const EditModelMenu = ({ accountMenu: { myModels, setMyModels, accountMenu }}) => {

  const { config } = useContext(UserContext);

  useEffect(() => {
    const fetchMyModelsData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getCatalogue/mine`, config);
        setMyModels(data);
      } catch ({response: {status, statusText, data: { message }}}){
        console.log(`${status} ${statusText}\n${message}`);
      }
    }
    fetchMyModelsData();
  }, []);

  if (myModels === null) return;

  if (myModels.length === 0) return(
    <StyledEditMenu accountMenu={accountMenu}>
      <h1>{'Você ainda não cadastrou\n nenhum modelo'}</h1>
    </StyledEditMenu>
  );

  return (
    <StyledEditMenu accountMenu={accountMenu}>
      <div>
        <h1>{'Aqui estão os seus modelos, algum está precisando de férias?'}</h1>
        {myModels.map(breed => <MyModelsCard setMyModels={setMyModels} breed={breed} key={breed.id}></MyModelsCard>)}
      </div>
    </StyledEditMenu>
  );
};

export default EditModelMenu;