import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { FormattedDate } from "react-intl";
import logo from "../media/casa.png";
import Cuartos from "./cuartos";
import "./galeria.css";

const Galeria = () => {
  let url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

  let [espacios, setEspacios] = useState([]);
  let [sele, setSele]= useState();
  let [espacio, setEspacio]= useState();

  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      setEspacios(resp);
    });

    function seleccionado(e) {
        setEspacio(e);
        setSele(true);
      }

  return (
    <div className="container-fluid">
      <h1> My spaces </h1>
      <div className="row">
          {espacios.map((item) => (
            <div className="card" key={item.id} onClick={() => seleccionado(item)}>
              <img src={logo} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.address}</p>
              </div>
            </div>
          ))}
      </div>
      <div className= "row">
      {sele && (
          <div className="col-4">
            <Cuartos data={espacio}></Cuartos>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;
