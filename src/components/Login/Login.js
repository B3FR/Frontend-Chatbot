import { Context } from "../..//conntext/contexsocketio";

import React, {useContext} from "react";
import "../../style/Login.css";
import Flecha from '../../assets/icon-next 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { User, setUser } = useContext(Context);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async data => {
    setFormData(data);

    try {
      const response = await axios.post('http://localhost:5000/login', data);
      console.log(response.data);
      if (response.data.message === 'Inicio de sesión exitoso') {
        setUser(response.data.username);
        //guardar la sesión
        localStorage.setItem("user", response.data.username);
        console.log(User)
        navigate("/home");

      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="divmain">
      <div className="mancha1">
        <div className="logo">

        </div>
        <div className="mancha_bajito">
          <Link to="/App">
            <img classname='flecha' src={Flecha} alt=""></img>
            <button className="back">Ir a Olva</button>
          </Link>
        </div>
      </div>
      <div className="content_cover">

        <form onSubmit={handleSubmit(onSubmit)} >
          <p className="title_main">ZONA DE CLIENTES</p>

          <div className="cover">
            <div className="line"></div>
            <div className="content_title_login">
              <p className="title">Bienvenido a Olva </p>
              <p className="description">
                Inicia sesión para entrar a nuestra web
              </p>
            </div>
            <input type="text" placeholder="Usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "El Nombre no es correcto"
                }
              })}
            />
            {errors.username && <span className="content_error">{errors.username.message}</span>}
            <input type="password" placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres"
                }
              })}
            />
            {errors.password && <span className="content_error">{errors.password.message}</span>}
            {error && <span className="content_error">{error}</span>}

            <button className="login-btn" type="submit" value="submit">Entrar</button>

            <div className="content_foot">
              <p> ¿No tienes cuenta?</p>
              <Link to="/auth/register">
                <button src="#" className="text">Registrate aquí </button>
              </Link>
            </div>

          </div>
        </form>
      </div>
      <div className="mancha2">
        <div></div>
      </div>
    </div>
  );
}

export default Login;