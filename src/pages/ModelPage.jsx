import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { AddRmLike, LoadingBody } from "../style/CataloguePageBody";
import { ModelPageBody } from "../style/ModelPageBody";

const ModelPage = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = parseInt(pathname.replace('/modelo/', ''));

  const { name, config } = useContext(UserContext);
  const { likedModels, setLikedModels } = useContext(CatalogueContext);

  const [loading, setLoading] = useState(false);

  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchModelData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getCatalogue/unique/${id}`);
        setModel(data);
      } catch ({response: {status, statusText, data: { message }}}){
        console.log(`${status} ${statusText}\n${message}`);
      }
    }
    fetchModelData();
  }, []);

  if (model === null) return <LoadingBody><p>Carregando...</p></LoadingBody>;
  
  const { title, description, avaliable, breedName, imageUrl, userData } = model;
  const isLiked = likedModels.some(model => model.id === id);

  return (
    <ModelPageBody liked={isLiked} avaliable={avaliable}>
      <div>
        <div>
          {!avaliable && <h3>Estou de Férias</h3>}
          <img src={imageUrl}/>
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <h2>{userData.cellphone}</h2>
          </div>
          <p>{description}</p>
          <p>categoria: {breedName}</p>
          <p><span>{userData.name}</span></p>
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


