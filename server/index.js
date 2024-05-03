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
//-----------------------------------------------------INSERTS-------------------------------------------------------//
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

app.post("/RegistrarAutor",(req,res)=>{
    const nombre = req.body.nombre;
    const apellidos = req.body.apellido;
    const edad = req.body.edad;
  

    db.query('INSERT INTO autor (NOMBRE, APELLIDO, EDAD) VALUES(?,?,?)',
    [nombre, apellidos,edad],

    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Autor registrado");
        }
    }
    );
});

app.post("/RegistrarGenero",(req,res)=>{
    const descripcion = req.body.descripcion;

    db.query('INSERT INTO genero (DESCRIPCION) VALUES(?)',
    [descripcion],

    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("genero registrado");
        }
    }
    );
});

app.listen(3001, ()=>{

console.log("corriendo en el puerto 3001");

})

app.post("/RegistroLibro", (req, res) => {
    const titulo = req.body.titulo;
    const edicion = req.body.edicion;
    const id_autor = req.body.id_autor;
    const paginas = req.body.paginas;
    const genero = req.body.genero;
    const añopublicacion = req.body.año_publicacion;
    const sinopsis = req.body.sinopsis;

    db.query('INSERT INTO libro (TITULO, EDICION, ID_AUTOR, PAGINAS, AÑO_PUBLICACION, SINOPSIS) VALUES (?,?,?,?,?,?)',
        [titulo, edicion, id_autor, paginas, añopublicacion, sinopsis],
        (err, libroResult) => {
            if (err) {
                console.log(err);
                res.send("Error al registrar el libro");
            } else {
                const libroId = libroResult.insertId;
                db.query('INSERT INTO genero_foraneo (ID_GENERO, ID_LIBRO) VALUES (?, ?)',
                    [genero,  libroId,],
                    (err, generoResult) => {
                        if (err) {
                            console.log(err);
                            res.send("Error al registrar el género del libro");
                        } else {
                            res.send("Libro registrado con su género correctamente");
                        }
                    }
                );
            }
        }
    );
});
       
app.post("/RegistrarResena",(req,res)=>{
    const   id_libro = req.body.id_libro;
    const id_usuario = req.body.id_usuario;
    const reseña = req.body.reseña;

    db.query('INSERT INTO lista_foranea (ID_LIBRO, ID_USUARIO, RESEÑA) VALUES (?,?,?)',
    [id_libro, id_usuario, reseña],

    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Reseña Publicada");
        }
    }
    );
});
 
//-----------------------------------------------------SELECTS-------------------------------------------------------//
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
                        "id_usuario":data[0].ID_USUARIO,    
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

app.get("/getautores", 
    (req, resp)=>{

        db.query("SELECT * FROM autor",
        (err, data)=>{
            if(err){
                resp.send(err);
            }else{
                console.log("Datos recibidos desde la base de datos:", data);
                if(data.length > 0){
                    resp.send(data)
                }else{
                    resp.json({
                        "alert": 'Error',
                        "message": 'Autor no encontrado'
                    });
                }
            }
        })
})


app.get("/getgeneros", 
    (req, resp)=>{

        db.query("SELECT * FROM genero",
        (err, datagen)=>{
            if(err){
                resp.send(err);
            }else{
                console.log("Datos recibidos desde la base de datos:", datagen);
                if(datagen.length > 0){
                    resp.send(datagen)
                }else{
                    resp.json({
                        "alert": 'Error',
                        "message": 'Generos no encontrado'
                    });
                }
            }
        })
})


app.get("/getlibros", 
    (req, resp)=>{

        db.query("SELECT * FROM libro l JOIN genero_foraneo lg ON l.ID_LIBRO = lg.ID_LIBRO JOIN genero g ON lg.ID_GENERO = g.ID_GENERO;",
        (err, datagen)=>{
            if(err){
                resp.send(err);
            }else{
                console.log("Datos recibidos desde la base de datos:", datagen);
                if(datagen.length > 0){
                    resp.send(datagen)
                }else{
                    resp.json({
                        "alert": 'Error',
                        "message": 'Libros no encontrado'
                    });
                }
            }
        })
})


app.get("/getlibrosdetalle/:ID_LIBRO", 
    (req, resp)=>{
        const ID_LIBRO = req.params.ID_LIBRO;
        db.query("SELECT l.*, lg.*, g.*, a.*FROM libro l JOIN genero_foraneo lg ON l.ID_LIBRO = lg.ID_LIBRO JOIN genero g ON lg.ID_GENERO = g.ID_GENERO JOIN autor a ON l.ID_AUTOR = a.ID_AUTOR WHERE l.ID_LIBRO = ?",
        [ID_LIBRO],
        (err, datagen)=>{
            if(err){
                resp.send(err);
            }else{
                console.log("Datos recibidos desde la base de datos:", datagen);
                if(datagen.length > 0){
                    resp.send(datagen)
                }else{
                    resp.json({
                        "alert": 'Error',
                        "message": 'Detalle de el libro no encontrado'
                    });
                }
            }
        })
})


//-----------------------------------------------------UPDATES-------------------------------------------------------//


app.post("/ActualizarInfo", 
    (req, resp)=>{
        const nombres =req.body.nombresnew
        const apellidos = req.body.apellidosnew
        const correo = req.body.correonew
        const contrasena = req.body.passnew 
        const genero = req.body.generonew


        const sql = "UPDATE usuario SET NOMBRES=?, APELLIDOS=?, CONTRASEÑA=?, GENERO=? WHERE CORREO=?";
        db.query(sql, [nombres, apellidos, contrasena, genero, correo], (err, result) => {
            if (err) {
              console.error('Error al actualizar usuario:', err);
              resp.status(500).json({ error: 'Error al actualizar usuario' });
            } else {
               
                resp.status(200).json({ message: 'Información de usuario actualizada correctamente' });

            }
          });
});


