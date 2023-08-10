import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../contexts/userContext";
import { StyledMyModelCard } from "../../../style/MenuPageBody";

export const MyModelCard = ({ model: { id, title, imageUrl, avaliable }, setMyModels }) => {

  const { config } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const confirmChangeVacation = async () => {
    setLoading(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/putCatalogueOnVacation/${id}`, [], config);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getCatalogue/mine`, config);
      setMyModels(data);
      setLoading(false);
    } catch ({response: {status, statusText, data: { message }}}){
      Swal.fire({
        title: `<span style=";font-size: 18px">${status} ${statusText}\n${message}</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
      setLoading(false);
    }
  };

  const changeVacation = () => {
    Swal.fire({
      title: `<span style=";font-size: 18px">Certeza que deseja que o <span style=";color: #5dbb63">${title}</span> ${avaliable ? 'entre de férias' : 'termine suas férias'}?</span>`,
      width: 320,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#5dbb63',
      denyButtonColor: 'lightgrey',
      }).then((result) => {
      if (result.isConfirmed) {
        confirmChangeVacation();
      }
    })
  };

  return (
    <StyledMyModelCard loading={loading} onClick={changeVacation}>
      <div>
        <h2>{title}</h2>
        <h3>{loading ? 'Carregando...' : (avaliable ? 'Disponivel' : 'De férias')}</h3>
      </div>
      <div>
        <img src={imageUrl}/>
      </div>
    </StyledMyModelCard>
  );
}