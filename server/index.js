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



app.post("/login", 
    (req, resp)=>{


        db.query("SELECT * FROM usuario WHERE CORREO=? AND CONTRASEÑA=?",
        [req.body.us, req.body.con],
        (err, data)=>{
            if(err){
                resp.send(err);
            }else{
                console.log("Datos recibidos desde la base de datos:", data);
                if(data.length > 0){
                    resp.json({
                        "alert": 'Success',
                        "nombre": data[0].NOMBRES,
                        "apellidos": data[0].APELLIDOS,
                        "genero": data[0].GENERO,
                        "correo": data[0].CORREO,
                        "con": data[0].CONTRASEÑA,
                        "rol": data[0].ROL
                    })
                }else{
                    resp.json({
                        "alert": 'Error',
                        "message": 'Usuario no encontrado'
                    });
                }
            }
        })
})
