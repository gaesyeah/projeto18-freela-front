import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { AddRmLike, StyledModelCard } from "../style/CataloguePageBody";

const ModelCard = ({ model }) => {
  const { id, title, avaliable, imageUrl } = model;

  const navigate = useNavigate();

  const { config, name } = useContext(UserContext);
  const { likedModels, setLikedModels } = useContext(CatalogueContext);
  const isLiked = likedModels.some(model => model.id === id);

  const [loading, setLoading] = useState(false);

  return(
    <StyledModelCard liked={isLiked} avaliable={avaliable}>
      <div onClick={() => navigate(`/modelo/${id}`)}>
        <h2>{!avaliable && 'Estou de Férias'}</h2>
        <img src={imageUrl}></img>
      </div>
      <div>
        <p>{title}</p>
        <button 
          disabled={loading}
        ><h3>Adicionar aos Favoritos</h3>
          <AddRmLike />
        </button>
      </div>
    </StyledModelCard>
  );
};

export default ModelCard;