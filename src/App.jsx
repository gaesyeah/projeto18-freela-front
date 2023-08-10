import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AccountButtons from "./components/AccountMenu/AccountButtons";
import CreateModelMenu from "./components/AccountMenu/CreateModelMenu";
import EditModelMenu from "./components/AccountMenu/EditModelMenu/EditModelMenu";
import AccountMenu from "./components/AccountMenu/MenuBackGround";
import CatalogueNavBar from "./components/CatalogueNavBar";
import { CatalogueContext } from "./contexts/catalogueContext";
import { UserContext } from "./contexts/userContext";
import CataloguePage from "./pages/CataloguePage";
import LikedPage from "./pages/LikedPage";
import ModelPage from "./pages/ModelPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {

  const { pathname } = useLocation();

  const [likedModels, setLikedModels] = useState([]);

  const [loginData, setLoginData] = useState({});
  const { token, name } = loginData;
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    /*redefine novamente as keys no localStorage caso o loginData já tenha sido "setado" na rota /
    para não permitir que os valores no localStorage sejam redefinidos para undefined*/
    if (Object.keys(loginData).length > 0) {
        localStorage.setItem('config', JSON.stringify(config));
        localStorage.setItem('name', name);
    };
  }, [loginData]);

  const storedConfig = useRef(JSON.parse(localStorage.getItem('config')));
  const storedName = useRef(localStorage.getItem('name'));

  const [accountMenu, setAccountMenu] = useState(null);

  const [myModels, setMyModels] = useState(null);
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

  return (
    <UserContext.Provider value={{ 
      setLoginData,
      config: !storedConfig.current ? config : storedConfig.current,
      name: !storedName.current ? name : storedName.current
    }}>
    <CatalogueContext.Provider value={{likedModels, setLikedModels, breeds}}>
      {(pathname !== '/entrar' && pathname !== '/cadastro' && pathname !== '/favoritos') 
        && <> <CatalogueNavBar /> {pathname.slice(0, 8) !== '/modelo/' && <AccountButtons accountMenu={{ accountMenu, setAccountMenu, breeds, myModels }} />} </>
      }
      {accountMenu && <AccountMenu setAccountMenu={setAccountMenu}/>}
      <CreateModelMenu accountMenu={accountMenu}/>
      <EditModelMenu accountMenu={{ myModels, setMyModels, accountMenu }}/>
      <Routes>
        <Route path="/" element={ <CataloguePage /> }/>
        <Route path="/modelo/:id" element={ <ModelPage/> }/>
        <Route path="/entrar" element={ <SignInPage/> }/>
        <Route path="/cadastro" element={ <SignUpPage/> }/>
        <Route path="/favoritos" element={ <LikedPage/> }/>
      </Routes>
    </CatalogueContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
