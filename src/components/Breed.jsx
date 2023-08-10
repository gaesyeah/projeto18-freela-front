import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { StyledBreedCard } from "../style/CataloguePageBody";
import ModelCard from "./Model";

const BreedCard = ({ id, name, imageUrl }) => {

  const [catalogue, setCatalogue] = useState(null);
  const [loading, setLoading] = useState(false);

  const { config } = useContext(UserContext); 

  const getCatalogue = async () => {
    if (catalogue !== null) return setCatalogue(null);
    if (loading) return;
    setLoading(true);
    try {      
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getCatalogue/all/${id}?${config.headers.Authorization.replace('Bearer ', '')}`);
      setCatalogue(data);
      setLoading(false);
    } catch ({response: {status, statusText, data: { message }}}){
      console.log(`${status} ${statusText}\n${message}`);
      setLoading(false);
      if (status === 404) setCatalogue(undefined);
    }
  }

  return (
    <StyledBreedCard loading={loading}>
      <div onClick={getCatalogue}>
        <p>{loading ? 'Carregando...' : name}</p>
        <div><img src={imageUrl}/></div>
      </div>
      {catalogue === undefined
        ? <h1>Talvez todos os {name}s estejam de férias</h1>
        : (catalogue !== null) 
          &&
          <ul>
            {catalogue.map(model => <ModelCard name={name} model={model} key={model.id} />)}
          </ul>
      }
    </StyledBreedCard>
  )
};

export default BreedCard;