import React, { useState, useEffect } from "react";
import logo from "../media/cuartos.jpg";

const Cuartos = (props) => {
  let url =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  let [cuartos, setCuartos] = useState([]);
  let [sele, setSele] = useState();
  let [cuarto, setCuarto] = useState();

  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      setCuartos(resp);
    });

  function seleccionado(e) {
    setCuarto(e);
    setSele(true);
  }

  return (
    <div className="row">
      <div className="col-8">
        {cuartos
          .filter((cuarto) => cuarto.homeId === props.data.id)
          .map((item) => (
            <div className="card col-2" onClick={() => seleccionado(item)}>
              <img src={logo} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          ))}
      </div>
      <div className="col-2">
        {sele && (
          <div className="col-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Device</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {cuarto.devices.map((item) => (
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.desired.value}{item.desired.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cuartos;
