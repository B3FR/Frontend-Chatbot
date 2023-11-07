import React from "react";
import "../../style/Login.css";
import Flecha from '../../assets/icon-next 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();


  const [ user, setFormData ] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    setFormData(data);

    try {
      const response = await axios.post('http://localhost:5000/register', data);
      console.log(response.data);
      navigate("/auth/login");
    } catch (error) {
      console.log(error.response.data);
      navigate("/auth/login");
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
                Registrate para entrar a nuestra web
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

            <input type="number" placeholder="Dni"
              {...register("dni", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                },
                pattern: {
                  value: /^[0-9]{8}(?:[-\s][0-9a-zA-Z])?$/,
                  message: "El DNI no es correcto"
                }
              })}
            />
            {errors.dni && <span className="content_error">{errors.dni.message}</span>}

            <input type="text" placeholder="Dirección"
              {...register("direccion", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                },
                pattern: {
                  value: /^[a-zA-Z0-9\s,.-]+$/,
                  message: "La dirección no es correcto"
                }
              })}
            />
            {errors.direccion && <span className="content_error">{errors.direccion.message}</span>}

            <input type="email" placeholder="Correo electronico"
              {...register("email", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato no es correcto"
                }
              })}
            />
            {errors.email && <span className="content_error">{errors.email.message}</span>}
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

            <button className="login-btn" type="submit" value="submit">Registrar</button>

            <div className="content_foot">
              <p>¿Ya tienes cuenta?</p>

              <Link to="/auth/login">
                <button className="text">Inicia Sesión aquí </button>
              </Link>
            </div>

          </div>
        </form>
      </div>
      <div className="mancha2">
        <div>

        </div>
      </div>
    </div>
  );
}

export default Register;