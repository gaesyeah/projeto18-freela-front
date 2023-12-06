import axios from "axios";
import Joi from "joi";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CatalogueContext } from "../../contexts/catalogueContext";
import { UserContext } from "../../contexts/userContext";
import { changeInputs } from "../../functions/changeInputs";
import { StyledPlusIcon } from "../../style/CataloguePageBody";
import { StyledCreateMenu } from "../../style/MenuPageBody";

const CreateModelMenu = ({ accountMenu, setMyModels }) => {

  const { config } = useContext(UserContext);
  const { breeds } = useContext(CatalogueContext);
  if (breeds === null || breeds.length === 0) return;

  const [loading, setLoading] = useState(false);
  const [modelInputs, setModelInputs] = useState({
    title: "", description: "", breedId: breeds[0].id, avaliable: true, photos: []
  });
  const submitModel = (e) => {
    e.preventDefault();
    if (modelInputs.photos.length === 0) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">Você precisa escolher pelo menos uma imagem!</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
    postInputs();
  };

  const postInputs = async () => {
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/catalogue`, modelInputs, config);
      setLoading(false);
      setModelInputs({title: "", description: "", breedId: breeds[0].id, avaliable: true, photos: []});
      Swal.fire({
        title: `<span style=";font-size: 18px">Modelo cadastrado com sucesso</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
      const myModels = await axios.get(`${import.meta.env.VITE_API_URL}/catalogue/mine`, JSON.parse(localStorage.getItem('config')));
      setMyModels(myModels.data);

    } catch ({response: {status, statusText, data: { message }}}){
      setLoading(false);
      Swal.fire({
        title: `<span style=";font-size: 18px">${status} ${statusText}\n${message}</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
      setLoading(false);
    }
  }
  
  const [photosInput, setPhotosInput] = useState('');
  const changePhotosArray = () => {
    const { error } = Joi.string().uri().validate(photosInput);
    if (error) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">A imagem precisa ser uma url valida</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
    setLoading(true);
    setModelInputs(previous => {
      return { ...previous, photos: [...previous.photos, { url: photosInput }]};
    });
    setPhotosInput('');
    setTimeout(() => setLoading(false), 250);
  };

  return (
    <StyledCreateMenu onSubmit={(e) => submitModel(e)} accountMenu={accountMenu} id="categoryForm">
      <label htmlFor="categorias">Escolha uma categoria:</label>
      <select onChange={e => changeInputs(setModelInputs, Number(e.target.value), 'breedId')} 
        name="categoria" id="categorias" form="categoryForm" disabled={loading} value={modelInputs.breedId} required>
        {breeds.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}
      </select>
      <input onChange={e => changeInputs(setModelInputs, e.target.value, 'title')} 
        type="text" placeholder="nome" value={modelInputs.title} disabled={loading} required>
      </input>
      <textarea onChange={e => changeInputs(setModelInputs, e.target.value, 'description')} 
        type="text" placeholder="descição" value={modelInputs.description} disabled={loading} required>
      </textarea>
      <input onChange={e => setPhotosInput(e.target.value)} 
        type="text" placeholder="url para fotos do modelo" disabled={loading} value={photosInput}>
      </input>
      <button onClick={changePhotosArray} type="button" disabled={loading}>
        <StyledPlusIcon></StyledPlusIcon>
      </button>
      <button disabled={loading}>{loading ? 'Carregando...' : 'Criar Modelo'}</button>
    </StyledCreateMenu>
  )
};

export default CreateModelMenu;