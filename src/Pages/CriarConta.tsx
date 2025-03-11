import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/icons/chewbacca.svg";
import Sair from "../assets/icons/back.svg";
import { Link } from "react-router-dom";

type LoginFormInputProps = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
};

export const CriarConta = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputProps>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="login-container">
      <div className="form-section">
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
          <section className="content-form" style={{height: "max-content"}}>
            <Link to="/login">
              <img 
                src={Sair} 
                alt="Sair"
                style={{ width: "30px", height: "30px", position: "absolute", top: "10px", left: "10px" }}
              />
            </Link>
            <img src={Logo} alt="Logo" />
            <h1>Criar conta</h1>

            {/* Nome Completo */}
            <div className="input-container">
              <label>Nome Completo</label>
              <input
                className="textbox-2"
                type="text"
                {...register("fullName", { required: "Nome completo é obrigatório" })}
              />
              {errors.fullName && <span>{errors.fullName.message}</span>}
            </div>

            {/* Usuário */}
            <div className="input-container">
              <label>Usuário</label>
              <input
                className="textbox-2"
                type="text"
                {...register("username", { required: "Usuário é obrigatório" })}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>

            {/* E-mail */}
            <div className="input-container">
              <label>E-mail</label>
              <input
                className="textbox-2"
                type="email"
                {...register("email", { 
                  required: "E-mail é obrigatório", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" } 
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            {/* Senha */}
            <div className="input-container">
              <label>Senha</label>
              <input
                className="textbox-2"
                type="password"
                {...register("password", { 
                  required: "Senha é obrigatória", 
                  minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } 
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            {/* Confirmar Senha */}
            <div className="input-container">
              <label>Confirmar Senha</label>
              <input
                className="textbox-2"
                type="password"
                {...register("confirmPassword", { 
                  required: "Confirme sua senha", 
                  validate: value => value === password || "As senhas não coincidem" 
                })}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div>

            {/* Gênero */}
            <div className="input-container">
              <label>Gênero</label>
              <select className="textbox-2" {...register("gender", { required: "Selecione um gênero" })}>
                <option value="">Selecione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.gender && <span>{errors.gender.message}</span>}
            </div>

            {/* Termos de Serviço */}
            <div className="input-container checkbox-container">
              <input 
                type="checkbox" 
                {...register("terms", { required: "Você deve aceitar os termos" })} 
              />
              <label>Aceito os termos de serviço</label>
              {errors.terms && <span>{errors.terms.message}</span>}
            </div>

            {/* Botão Criar Conta */}
            <button type="submit">
              Criar conta
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
