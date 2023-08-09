import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ModelCard from "../components/Model";
import { CatalogueContext } from "../contexts/catalogueContext";
import { UserContext } from "../contexts/userContext";
import { CataloguePageBody, LoadingBody } from "../style/CataloguePageBody";

const CataloguePage = () => {

  const { config } = useContext(UserContext);
  const { setLikedModels } = useContext(CatalogueContext);

  /* const [catalogue, setCatalogue] = useState(null); */

  const [breeds, setBreeds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBreedsData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getBreeds`);
        setBreeds(data);
      } catch ({response: {status, statusText, data: { message }}}) {
        console.log(`${status} ${statusText}\n${message}`);
      }
    };
    fetchBreedsData();
  }, []);

  if (breeds === null) return (
    <LoadingBody><p>Carregando...</p></LoadingBody>
  )
  return (  
    <CataloguePageBody>
      {/* {(catalogue.length === 0) 
        ? 
          <h2>Não há nenhum modelo cadastrado</h2>
        :
          <ul>
              {catalogue.map((model) => 
                <ModelCard model={model} key={model.id}/>)
              }
          </ul>
      } */}
    </CataloguePageBody>
  );
};

export default CataloguePage;