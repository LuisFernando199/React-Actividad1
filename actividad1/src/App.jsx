import img0 from "./assets/rey_atanagildo.png";
import img1 from "./assets/rey_ataulfo.png";

import "./App.css";
import { useRef } from "react";

function App() {
  /*contador */
  const contador = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
      if (e.target.innerHTML >= 7 && e.target.innerHTML <= 9) {
        e.target.style.backgroundColor = "red";
      } else {
        e.target.style.backgroundColor = "white";
      }
    
  };
  /* boton*/
  const refconvertir = useRef();
  const convertir = () => {
    refconvertir.current.innerHTML = refconvertir.current.innerHTML * 2;
  };
  /*Imagen */
  const cambiar = (e) => {
    if (e.target.src.includes("atanagildo")) {
      e.target.src = img1;
    } else if (e.target.src.includes("ataulfo")) {
      e.target.src = img0;
    }
  };
  /*cambia numeros */
  const cambiaNum = (e) => {
    console.log(e.target.value);
    refconvertir.current.innerHTML = e.target.value;
  };

  return (
    <>
      <div ref={refconvertir} onClick={contador} className="caja">
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={img0} alt="" />
      </div>
      <input onChange={cambiaNum} className="campo" type="text" />
    </>
  );
}

export default App;
