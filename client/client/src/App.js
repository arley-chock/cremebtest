import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import Axios from "axios";

function App() {
  const [values, setValues] = useState();
  const [listnomes, setlistcards] = useState();

  const handlechangevalues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleclickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      cpf: values.Cpf,
      telefone: values.telefone,
      email: values.email,
      cep: values.cep,
      endereco: values.endereco,
      uploadpdf: values.uploadpdf,
    }).then((response) => {
      console.log(response);
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/getcards").then((response) => {
      setlistcards(response.data);
    });
  }, []);
  return (
    <div className="App--container">
      <div className="register--container">
        <h1 className="register-title">Cadastro</h1>

        <input
          type="text"
          name="nome"
          placeholder="nome"
          className="register--input"
          onChange={handlechangevalues}
        />
        <input
          type="text"
          name="Cpf"
          class="cpf--input"
          placeholder="CPF Ex.: 000.000.000-00"
          onChange={handlechangevalues}
        />

        <input
          type="tel"
          name="telefone"
          placeholder="telefone"
          className="tel--input"
          onChange={handlechangevalues}
        />

        <input
          type="email"
          name="email"
          classname="mail--input"
          placeholder="E-mail"
          onChange={handlechangevalues}
        />

        <input
          type="text"
          name="cep"
          classname="cep--input"
          placeholder="CEP Ex.:00000-000"
          onChange={handlechangevalues}
        />

        <input
          type="text"
          name="Endereco"
          classname="endereco--input"
          placeholder="Endereço"
          onChange={handlechangevalues}
        />

        <h6 classname="aviso--pdf">Insira o rg em pdf</h6>
        <input
          type="file"
          name="uploadpdf"
          className="upload--input"
          alt="selecione o rg em pdf"
          placeholder="enviar rg pdf"
          accept=".pdf"
          onChange={handlechangevalues}
        />

        <button
          className="register--button"
          onClick={() => handleclickButton()}
        >
          Cadastrar
        </button>
      </div>
      {typeof listnomes !== "undefined" &&
        listnomes.map((value) => {
          return (
            <Card
              key={value.id}
              listnomes={listnomes}
              setlistcards={setlistcards}
              id={value.id}
              nome={value.nome}
              cpf={value.cpf}
              tel={value.tel}
              cep={value.cep}
              email={value.email}
              endereco={value.endereco}
            ></Card>
          );
        })}
    </div>
  );
}

export default App;
