const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "789147258",
  database: "dbcremebe",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { cpf } = req.body;
  const { telefone } = req.body;
  const { email } = req.body;
  const { cep } = req.body;
  const { endereco } = req.body;
  const { uploadpdf } = req.body;
  const { id } = req.body;
  let SQL =
    "INSERT INTO usuario ( nome, cpf, telefone, email, cep, endereco, uploadpdf) VALUES ( ?,?,?,?,?,?,? )";

  db.query(
    SQL,
    [nome, cpf, telefone, email, cep, endereco, uploadpdf, id],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/getcards", (req, res) => {
  let SQL = "SELECT * from usuario";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { nome } = req.body;
  const { cpf } = req.body;
  const { telefone } = req.body;
  const { email } = req.body;
  const { cep } = req.body;
  const { endereco } = req.body;
  const { uploadpdf } = req.body;
  let mysql =
    "UPDATE usuario SET nome = ?, cpf = ?, telefone = ?, email = ?, cep = ?, endereco = ?, uploadpdf = ? WHERE id = ?";
  db.query(
    mysql,
    [nome, cpf, telefone, email, cep, endereco, uploadpdf, id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM usuario WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
