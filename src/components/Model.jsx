import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { AddRmLike, StyledModelCard } from "../style/CataloguePageBody";

const ModelCard = ({ product }) => {
  const { id, title, avaliable, imageUrl } = product;

  const navigate = useNavigate();

  const { config, name } = useContext(UserContext);
  const { likedModels, setLikedModels } = useContext(CatalogueContext);

  const [loading, setLoading] = useState(false);

  const isLiked = likedModels.some(model => model.id === id);

  return(
    <StyledModelCard liked={isLiked} avaliable={avaliable}>
      <div  onClick={() => navigate(`/modelo/${id}`, { state: { model } })} >
        {!avaliable  && <h2>De Férias</h2>}
        <img src={imageUrl}></img>
      </div>
      <div>
        <p>{title}</p>
        <p>não tem preço</p>
        <p><span>no estoque: {avaliable}</span></p>
        <button 
          disabled={loading}
        >{loading ? <h3>Carregando...</h3> : (isLiked) ? <h3>Remover dos Favoritos</h3> : <h3>Adicionar aos Favoritos</h3>}
          <AddRmLike />
        </button>
      </div>
    </StyledModelCard>
  );
};

export default ModelCard;