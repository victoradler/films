import React from "react";
import "./pages.css";
import Logo from "../assets/icons/darth-vader.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePost } from "../Hooks/Requests";
import { Loader } from "../Components/Loader/Loader";

type LoginFormInputProps = {
  username: string;
  password: string;
};

//  "email": "eve.holt@reqres.in",
//   "password": "cityslicka"

type AuthResponse = {
  token: string; // Resposta do Reqres: retorna um token de autenticação
};

const Login = () => {
  const [loginError, setLoginError] = React.useState<string | null>(null);
  // useForm para validação do formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputProps>();

  // Navegação para redirecionar após login
  const navigate = useNavigate();

  // Usando o usePost com o endpoint de login do Reqres
  const { mutate: loginUser, isLoading } = usePost(
    "https://reqres.in/api/login"
  );

  // Função chamada ao submeter o formulário
  const onSubmit = (data: any) => {
    loginUser(data, {
      onSuccess: (data: AuthResponse) => {
        // Sucesso: salvar o token e redirecionar
        localStorage.setItem("token", data.token);
        navigate("/"); // Redireciona para a página inicial
      },
      onError: () => {
        setLoginError("Usuário ou senha inválidos");
      },
    });
  };

  return (
    <div className="login-container">
      {/* <div className="image-section"></div> */}
      <div className="form-section">
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
          <section className="content-form">
            <img src={Logo} alt="Logo"  />
            <h1>Login</h1>
            <div className="input-container">
              <label>Usuário</label>
              <input
                className="textbox-2"
                type="text"
                placeholder="exemplo@exemplo.com"
                {...register("username", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "E-mail inválido",
                  },
                })}
              />
              {errors.username && (
                <span className="error-login">Campo obrigatório</span>
              )}
            </div>
            <div className="input-container">
              <label>Senha</label>
              <input
                className="textbox-2"
                type="password"
                placeholder=" * * * * * * * * "
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error-login">Campo obrigatório</span>
              )}
            </div>
            <span className="register">
              <a href="/conta">Criar conta</a>
            </span>
            {loginError && <span className="error-login">{loginError}</span>}

            {isLoading ? <Loader /> : <button type="submit" disabled={isLoading}>{"Entrar"}</button>}
            
          </section>
        </form>
      </div>
    </div>
  );
};
export default Login;
