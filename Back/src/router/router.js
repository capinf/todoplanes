const express= require('express');
const router = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// libreria que utilizaremos para la encriptacion de los password
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

//////archivo de coneccion
const mysqlConeccion = require('../database/database');
//////fin archivo de coneccion

////////////////////////////////
// Configuración de multer/////
//////////////////////////////

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
  });
  
  const upload = multer({ storage }).single('imgPath');

////////////////////////////////
// Configuración de multer/////
//////////////////////////////


////////////login de usuarios //////////////
router.post('/login', (req, res)=>{
    const {username, password} =req.body
    if(username!=undefined && password!=undefined){
        mysqlConeccion.query('select u.username,  u.password,  u.email, u.apellido_nombre from usuarios u where u.estado="A" AND username=?',[username], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                    if(bcryptPassword){
                        jwt.sign({rows}, 'siliconKey', {expiresIn:'1h'}, (err, token)=>{
                       res.json(
                        {
                            status: true,
                            datos: rows,
                            token: token,
                            mensaje: "Ingreso correctamente"
                        })
                    })
                    }else{
                        res.json(
                            {
                                status: false,
                                mensaje:"La Contraseña es incorrecta"
                                
                            
                            });
                    }
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El usuario no existe "
                        });

                }
            }else{
                res.json(
                    {
                        status: false,
                        mensaje:"Error en el servidor"
                    });
                    
            }
        });
    }else{
        res.json({
            status: false,
            mensaje:"Faltan completar datos"
        })
    }
});

//// registro ////

router.post('/registro', async(req, res)=>{
    const {username, password, email, apellido_nombre, telefono} =req.body
    let hash = bcrypt.hashSync(password,10);

    let queryCheck=`SELECT * FROM usuarios WHERE username='${username}'`;
    mysqlConeccion.query(queryCheck, (err, result)=>{
        if(!err){
            if(result.length > 0){
                res.json({
                    status: false,
                    mensaje:"El nombre de usuario ya existe"
                });
            }else{
                let query=`INSERT INTO usuarios (username, password, email, apellido_nombre, telefono, fecha_creacion) VALUES ('${username}','${hash}','${email}','${apellido_nombre}','${telefono}',NOW())`;
                mysqlConeccion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:"El usuario se creo correctamente"
                        });
                    }else{
                        res.json({
                            status: false,
                            mensaje:"Hay un error al registrar el usuario"
                        });
                    }
                });
            }
        }else{
            res.json({
                status: false,
                mensaje:"Hay un error al registrar el usuario"
            });
        }
    });
});

/// reset password ///

router.put('/resetpassword/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE usuarios SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});
//// Usuarios ////

router.get('/usuarios', (req, res)=>{

       
            mysqlConeccion.query('select * from usuarios', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
   
    
});

//// Baja y Alta Usuario /// 

router.put('/bajausuario/:id', (req, res)=>{
    
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='B' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de BAJA correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});

router.put('/altausuario/:id', (req, res)=>{
    
     let id  = req.params.id;
     let query=`UPDATE usuarios SET estado='A' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se dio de Alta correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});

//// edit ////

router.put('/edit_usuario/:id',(req, res)=>{
  
            let id = req.params.id;
            const { rol } =req.body  
            console.log(req.body)
            mysqlConeccion.query(`UPDATE usuarios SET rol='${rol}' WHERE id='${id}'`, (err, registros)=>{
                if(!err){
                    res.send('El Id que editamos es : '+id+' ');
                }else{
                    console.log(err)
                }
            })
   
});

//
    /////////////////////////////////////////
    //INSERTAR DATOS DEL FORMULARIO DE PLANES//
    /////////////////////////////////////////

router.post('/cargarformulario', upload, (req, res)=>{

    console.log(req.body);
    console.log(req.file)
    const { nombrePlan, precio, cantidadCuotas, adjudicado, anioInicio, localidad, telefono } = req.body
    const imgPath = req.file.path
    console.log('el img path es ', imgPath)
    
            let query=`INSERT INTO formulario (nombrePlan, precio, cantidadCuotas, adjudicado, anioInicio, localidad, telefono, imgPath) 
            VALUES ('${nombrePlan}', '${precio}', '${cantidadCuotas}', '${adjudicado}', '${anioInicio}', '${localidad}', '${telefono}', '${imgPath}')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"La carga de archivos fue satisfactoria"
                    });
                }else{
                    console.log(err)
                }
            })
      
});

// router.post('/cargarformulario', upload.single('imagen'), (req, res) => {
//     const { nombrePlan, precio, cantidadCuotas, adjudicado, añoInicio, localidad, telefono, form_user } = req.body;
//     const imgPath = req.file.path;
  
//     const query = `INSERT INTO formulario (nombrePlan, precio, cantidadCuotas, adjudicado, añoInicio, localidad, telefono, form_user, imgPath) 
//                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     const values = [nombrePlan, precio, cantidadCuotas, adjudicado, añoInicio, localidad, telefono, form_user, imgPath];
  
//     mysqlConeccion.query(query, values, (err, registros) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({
//           status: false,
//           mensaje: "Hubo un error al guardar los datos"
//         });
//       } else {
//         res.json({
//           status: true,
//           mensaje: "La carga de archivos fue satisfactoria"
//         });
//       }
//     });
//   });
  
//
    /////////////////////////////////////////
    //INSERTAR DATOS DEL FORMULARIO DE PLANES//
    /////////////////////////////////////////


    /////////////////////////////////////////
         //TRAER ROL DE USUARIO AL FRONT//
    /////////////////////////////////////////

    // function obtenerRolUsuario(req, res) {
    //     const userRol = req.user.rol;
      
    //     // Consulta los datos del usuario en la base de datos
    //     connection.query(
    //       'SELECT * FROM usuarios WHERE rol = ?',
    //       [userRol],
    //       (error, results) => {
    //         if (error) {
    //           console.error('Error al obtener el rol del usuario:', error);
    //           return res.status(500).json({ message: 'Error en el servidor' });
    //         }
      
    //         // Si se encontraron resultados, devuelve los datos del usuario
    //         if (results.length > 0) {
    //           const rol = results[0];
    //           return res.json(rol);
    //         }
      
    //         // Si no se encontraron resultados, devuelve un error o un mensaje indicando que no se encontró el usuario
    //         return res.status(404).json({ message: 'Usuario no encontrado' });
    //       }
    //     );
    //   }
      
    //   // Ruta para obtener los datos del usuario logueado
    //   router.get('/rolUsuario', obtenerRolUsuario);

    /////////////////////////////////////////
         //TRAER ROL DE USUARIO AL FRONT//
    /////////////////////////////////////////


    /////////////////////////////////////////
         //VERIFICAR TOKEN//
    /////////////////////////////////////////
    // function verificarToken(req, res, next){
    //     const BearerHeader= req.headers['authorization']
    //     if(typeof BearerHeader!=='undefined'){
    //         const bearerToken= BearerHeader.split(" ")[1]
    //         req.token=bearerToken;
    //         next();
    //     }else{
    //          res.send('Para consultar las apis debe estar autenticado.Gracias');
    //         // console.log('Ocurrio un error')
    //     }
    // }
    
    // function esNumero(parametro) {
    //     if(!isNaN(parseInt(parametro))){
    //         return false
    //     } else {
    //         return true
    //     }
    // }

module.exports = router;