import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm.js";

export default function Card(props) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.nome}
        cpf={props.cpf}
        cep={props.cep}
        tel={props.tel}
        email={props.email}
        endereco={props.endereco}
        listnome={props.listnome}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card--container" onClick={() => setOpen(true)}>
        <h1 className="card--title">{props.nome}</h1>
        <p className="card--id">{props.id}</p>
        <p className="card--cpf">{props.cpf}</p>
        <p className="card--cep">{props.cep}</p>
        <p className="card--tel">{props.tel}</p>
        <p className="card--email">{props.mail}</p>
        <p className="card--endereco">{props.endereco}</p>
      </div>
    </>
  );
}
