const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"coelstoi"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const apellidos = req.body.apellido;
    const correo = req.body.correo;
    const pass = req.body.pass;
    const genero = req.body.genero;

    db.query('INSERT INTO usuario (NOMBRES, APELLIDOS, FOTO, CORREO, CONTRASEÑA, GENERO, ROL) VALUES(?,?,?,?,?,?,?)',
    [nombre, apellidos,null,correo,pass,genero, 2],

    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Usuario registrado");
        }
    }
    );
});


app.listen(3001, ()=>{

console.log("corriendo en el puerto 3001");

})



