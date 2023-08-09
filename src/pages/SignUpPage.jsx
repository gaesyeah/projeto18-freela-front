import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Logo, SignBody } from "../style/SignBody";

const SignUpPage = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [signUpInputs, setSignUpInputs] = useState({
    name: "", email: "", cellphone: "", cpf: "", imageUrl: "", password: "", confirmPassword: ""
  });

  const signUp = async (e) => {
    e.preventDefault();

    if (signUpInputs.confirmPassword !== signUpInputs.password) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">As senhas precisam ser iguais!</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, signUpInputs);
      Swal.fire({
        title: `<span style=";font-size: 18px">Conta cadastrada com sucesso!</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
      navigate('/entrar');
    } catch ({response: {status, statusText, data: { message }}}){
      setLoading(false);
      Swal.fire({
        title: `<span style=";font-size: 18px">${status} ${statusText}\n${message}</span>`,
        width: 320,
        confirmButtonColor: '#5dbb63',
      });
    }
  };

  const changeSignUpInputs = (value, type) => {
    setSignUpInputs(previous => ({...previous, [type]:value}))
  };

  return (  
    <SignBody>
      <Logo>MiauAuAu</Logo>
      <form onSubmit={signUp}>
        <input type="text" placeholder="nome" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'name')}
          value={signUpInputs.name}
        ></input>
        <input type="email" placeholder="email" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'email')}
          value={signUpInputs.email}
        ></input>
        <input type="tel" placeholder="whatsapp" pattern="[0-9]{11}" title="Por favor, insira o DDD e o 9 além do numero, por exemplo: 73988456782" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'cellphone')}
          value={signUpInputs.cellphone}
        ></input>
        <input type="text" placeholder="cpf" pattern="[0-9]{11}" title="Por favor, insira um cpf com 11 digitos" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'cpf')}
          value={signUpInputs.cpf}
        ></input>
        <input type="url" placeholder="url para imagem de perfil" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'imageUrl')}
          value={signUpInputs.imageUrl}
        ></input>
        <input type="password" placeholder="senha" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'password')}
          value={signUpInputs.password}
        ></input>
        <input type="password" placeholder="confirmar senha" required
          disabled={loading}
          onChange={e => changeSignUpInputs(e.target.value, 'confirmPassword')}
          value={signUpInputs.confirmPassword}
        ></input>
        <button disabled={loading}
          >{!loading ? 'Cadastrar' : 'Carregando...'}
        </button>
      </form>
      <p onClick={() => navigate('/entrar')}>Já tem uma conta? Faça login!</p>
      <div onClick={() => navigate('/')}>Deseja antes disso continuar<br/>vendo os lindos modelos?</div>
    </SignBody>
  );
};

export default SignUpPage;