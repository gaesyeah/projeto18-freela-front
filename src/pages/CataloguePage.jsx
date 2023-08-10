import axios from "axios";
import { useEffect, useState } from "react";
import BreedCard from "../components/Breed";
import { BreedsBody, LoadingBody } from "../style/CataloguePageBody";

const CataloguePage = () => {

  const [breeds, setBreeds] = useState(null);

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

  if (breeds === null) return <LoadingBody><p>Carregando...</p></LoadingBody>;
  
  return (  
    <BreedsBody>
      {(breeds.length === 0) 
        ? <h2>Não há nenhuma categoria cadastrada</h2>
        :
        <>
          <h2>Por favor, selecione uma categoria</h2>
          <ul>
            {breeds.map(({ name, imageUrl, id }) => 
              <BreedCard id={id} name={name} imageUrl={imageUrl} key={id}/>)
            }
          </ul>
        </>
      }
    </BreedsBody>
  );
};

export default CataloguePage;