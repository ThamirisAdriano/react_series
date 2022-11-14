import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [dados, setDados] = useState();

  useEffect(() => {
    api
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => setDados(response))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Consumer React</h1>
      <p>Nome: {dados?.img}</p>
      <p>Gênero: {dados?.name}</p>
      <p>Sinopse: {dados?.level}</p>
    </div>
  );
}