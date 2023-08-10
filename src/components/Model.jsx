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

  const [loading, setLoading] = useState(false);

  const isLiked = likedModels.some(model => model.id === id);

  return(
    <StyledModelCard liked={isLiked} avaliable={avaliable}>
      <div>
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