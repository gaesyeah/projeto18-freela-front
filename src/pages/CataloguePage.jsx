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

  const [loading, setLoading] = useState(false);
  const [models, setModels] = useState(null);

  if (models === null) return (
    <LoadingBody><p>Carregando...</p></LoadingBody>
  )
  return (  
    <CataloguePageBody>
      {(models.length === 0) 
        ? 
          <h2>Não há nenhum modelo cadastrado</h2>
        :
          <ul>
              {models.map((model) => 
                <ModelCard model={model} key={model.id}/>)
              }
          </ul>
      }
    </CataloguePageBody>
  );
};

export default CataloguePage;