import { useContext } from "react";
import BreedCard from "../components/Breed";
import { CatalogueContext } from "../contexts/catalogueContext";
import { BreedsBody, LoadingBody } from "../style/CataloguePageBody";

const CataloguePage = () => {

  const { breeds } = useContext(CatalogueContext);

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