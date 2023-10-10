import React, { useEffect, useState, useRef, useContext } from 'react';
import "../../style/form.css";
import Borrar from '../../assets/IconBorrar.svg';
import Enviar from '../../assets/Enviar.svg';



const App = () => {

  return (
    <div className='contetChat'>
      <ul className='content_text_main'>
          <div>
              <div className='content_bot'>
                <li className='content_text bot'>
                  <p>¡Hola! Usuario. Soy un asistente virtual. ¿En qué puedo ayudarte hoy?</p>
                  {/* <div className='options'>
                      <button>
                        Soporte
                      </button>
                      <button>
                        Sucursales y servicios
                      </button>
                      <button>
                        Reclamos
                      </button>
                      <button>
                      Envíos
                      </button>
                      <button>
                        Cupones y descuentos
                      </button>
                  </div> */}
                </li>
              </div>
          </div>
      </ul>
      <div className='contentInput'>
        <form className='form'>
          <button className='btnBorrar'><img src={Borrar} alt="Borrar" /></button>
          <div className='input_main'>
            <input
              type="text"/>
            <button className='btnEnviar' type='submit'><img src={Enviar} alt="Enviar" /></button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;