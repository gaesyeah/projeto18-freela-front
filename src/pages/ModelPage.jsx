import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { AddRmLike } from "../style/CataloguePageBody";
import { ModelPageBody } from "../style/ModelPageBody";

const ModelPage = () => {
  const { model } = useLocation().state;
  const { id, title, description, avaliable, imageUrl } = model;

  const navigate = useNavigate();

  const { name, config } = useContext(UserContext);
  const { likedModels, setLikedModels } = useContext(CatalogueContext);

  const [loading, setLoading] = useState(false);

  const isLiked = likedModels.some(model => model.id === id);

  return (
    <ModelPageBody liked={isLiked} avaliable={avaliable}>
      <div>
        <div>
          {!avaliable && <h3>de Férias</h3>}
          <img src={imageUrl}/>
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <h2>não tem preço</h2>
          </div>
          <p>{description}</p>
          <p><span>de férias: {avaliable}</span></p>
          <button 
            disabled={loading}
          >{loading ? <h3>Carregando...</h3> : (isLiked) ? <h3>Remover dos favoritos</h3> : <h3>Adicionar aos Favoritos</h3>}
            <AddRmLike />
          </button>
        </div>
      </div>
      <p onClick={() => navigate('/')}>Voltar</p>
    </ModelPageBody>
  );
};

export default ModelPage;


