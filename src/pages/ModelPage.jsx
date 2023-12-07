import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { favoriteAlert } from "../functions/favorites";
import { AddRmLike, LoadingBody } from "../style/CataloguePageBody";
import { ChangeImg, ModelPageBody, WhatsAppDiv } from "../style/ModelPageBody";
import zapIcon from "./../assets/zapIcon.png";

const ModelPage = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = parseInt(pathname.replace('/modelo/', ''));

  const { name, config } = useContext(UserContext);
  const { likedModels, setLikedModels } = useContext(CatalogueContext);

  const [loading, setLoading] = useState(false);

  const [model, setModel] = useState(null);
  const [photoChanged, setPhotoChanged] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(false);
  useEffect(() => {
    const fetchModelData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/catalogue/unique/${id}`);
        setModel(data);
        setSelectedPhoto(data.photos.map((photos, i) => ({ ...photos, i })).find(({ id }) => id === data.mainPhotoId));
      } catch ({response: {status, statusText, data: { message }}}){
        console.log(`${status} ${statusText}\n${message}`);
      }
    }
    fetchModelData();
  }, []);

  if (model === null) return <LoadingBody><p>Carregando...</p></LoadingBody>;
  
  const { title, description, avaliable, breedName, photos, userData } = model;
  const isLiked = likedModels.some(model => model.id === id);

  const openZap = () => {
    window.open(`https://wa.me/${userData.cellphone}?text=` + encodeURIComponent(`
  *Olá ${userData.name}, eu gostaria de contratar o seu modelo:*
  *-* Nome: ${title}
  *-* categoria : ${breedName}
  *-* Disponivel: ${avaliable ? 'sim' : 'não'}

  *Meu nome:* ${name ? name : 'anônimo'}
  `));
  }

  const zap = () => {
    if (!avaliable) return Swal.fire({
      title: '<span style=";font-size: 18px">O modelo está de férias, deseja ainda sim entrar em contato com o tutor?</span>',
      width: 320,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#5dbb63',
      denyButtonColor: 'lightgrey',
      }).then((result) => {
      if (result.isConfirmed) {
        openZap();
      }
    })

    openZap();
  };

  const changePhoto = (type) => {
    if (type === 'sum'){
      setPhotoChanged('right');
    } else {
      setPhotoChanged('left');
    }
    setTimeout(() => {
      setPhotoChanged(false);
      setSelectedPhoto(({ i }) => {
        return { 
          url: (type === 'sum' ? (photos[i + 1]) : (photos[i - 1])).url,
          i: (type === 'sum' ? (i + 1) : (i - 1))
        }
      });
    }, 150);
  };

  return (
    <ModelPageBody liked={isLiked} avaliable={avaliable} photoChanged={photoChanged}>
      <div>
        <div>
          {photoChanged === false && 
            selectedPhoto.i > 0 && 
              <ChangeImg
                position={'left'} 
                onClick={() => changePhoto('sub')}
              >
                <span>{`<`}</span>
              </ChangeImg>
          }
          {!avaliable && <h3>Estou de Férias</h3>}
          <img src={selectedPhoto.url}/>
          {photoChanged === false && 
            selectedPhoto.i + 1 < photos.length &&
              <ChangeImg 
                position={'right'}
                onClick={() => changePhoto('sum')}
              >
                <span>{`>`}</span>
              </ChangeImg>
          }
        </div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
          <p><span>categoria: {breedName}</span></p>
          <button onClick={() => favoriteAlert(avaliable)}
            disabled={loading}
          >{loading ? <h3>Carregando...</h3> : (isLiked) ? <h3>Remover dos favoritos</h3> : <h3>Adicionar aos Favoritos</h3>}
            <AddRmLike />
          </button>
        </div>
      </div>
      <WhatsAppDiv onClick={zap}>
        <img src={userData.imageUrl}/>
        <p>{userData.cellphone}</p>
        <img src={zapIcon} />
      </WhatsAppDiv>
      <p onClick={() => navigate('/')}>Voltar</p>
    </ModelPageBody>
  );
};

export default ModelPage;