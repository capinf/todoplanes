import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../../servicios/servicios'


/// Editar Formulario ///
export function editarFormulario(){

    const [setFormulario] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [modeloAuto, setmodeloAuto] = useState('');
    const [precio, setprecio] = useState('');
    const [condicionAuto, setcondicionAuto] = useState('');
    const [kilometraje, setkilometraje] = useState('');
    const [anio, setanio] = useState('');
    const [localidad, setlocalidad] = useState('');
    const {idFormulario} = useParams();





    useEffect(()=>{
        // trae_datos(idFormulario)
       trae_datos(idFormulario)
    },[])


    const trae_datos = async ()=>{
        const datos= await API.getFormulariobyId(idFormulario);
        console.log('los datos enviados son',datos[0].modeloAuto)
            setmodeloAuto(datos[0].modeloAuto)
            setprecio(datos[0].precio)
            setcondicionAuto(datos[0].condicionAuto)
            setkilometraje(datos[0].kilometraje)
            setanio(datos[0].anio)
            setlocalidad(datos[0].localidad)
        }


    const editar_Formulario = ()=>{
        const datos_enviar={
            modeloAuto: modeloAuto,
            precio: precio,
            condicionAuto: condicionAuto,
            kilometraje: kilometraje,
            anio: anio,
            localidad: localidad
            
        };
        API.UpdateFormulario(idFormulario,datos_enviar);
        
        setmensajeSuccess('Se edito el formulario')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 2000)
        }


    return(
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Edicion de los datos del formulario
            </div>
            {
                mensajeSuccess?
                <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                </div>:''
            }
            <div className="card-body ">
                <div className='row'>

                <div className="form-group col-4" >
                  <label for="">Modelo Auto</label>
                  <input 
                  type="text"
                   value={modeloAuto} 
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Precio</label>
                  <input 
                  required
                  type="number" min="0"
                   value={precio} 
                   onChange={(event)=>setprecio(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Condicion Auto</label>
                  <input 
                  type="text"
                   value={condicionAuto} 
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted ">&nbsp;</small>
                </div>
                <div className="form-group col-4" >
                  <label for="">Kilometraje</label>
                  <input 
                  required
                  type="number" min="0"
                   value={kilometraje}
                   onChange={(event)=>setkilometraje(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4" >
                  <label for="">Año</label>
                  <input 
                  required
                  type="number" min="0"
                   value={anio}
                   onChange={(event)=>setanio(event.target.value)}
                    
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4" >
                  <label for="">Localidad</label>
                  <input 
                  required
                  type="text"
                   value={localidad} 
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
        
                </div>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                            
                <button onClick={editar_Formulario} type="button" className="btn btn-outline-secondary text-success">Guardar</button>
                <small id="helpId" className="text-muted">&nbsp;</small>

                <Link to={'/Formauto'}>
                <button type="button" className="btn btn-outline-secondary text-primary">Volver a la lista</button>
                </Link>
                
                                
                </div>
                </td>
            </div>
            
        </div>
    )
        }


/// Alta y baja de Usuarios ///

export function Usuarios(){

    const [usuario, setUsuario] = useState([]);
   
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    


    useEffect(()=>{
        API.getUsuario().then(setUsuario)
    },[])
    
   



    //BOTONES//

    const bajaUsuario  = async(username)=>{
        console.log('el usuario que vamos a dar de baja es el',username)

        const user = await API.BajaUsuario(username)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
            }, 3000)

        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    const altaUsuario = async(username)=>{
        const user = await API.AltaUsuario(username)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }




    return(

        <div className="card table bg-dark text-white">
            
        <div className="card-header">
        Usuarios
       
        </div>
        {
                    mensajeError?
                    <div class="alert alert-warning" role="alert">
                     {mensajeError}
                    </div>:''
                }

                {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
                
        <div className="card-body">
      
        <div className="table-responsive">
            
                <table className="table text-white">
                    <thead>
                    <Link to = {'/'}role="button" className="btn btn-outline-primary">Agregar Cliente</Link>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Apellido y Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.map((usuarios)=>(
                        <tr  key={usuarios.username}>
                            <td scope="row">{usuarios.username}</td>
                            <td>{usuarios.username}</td>
                            <td>{usuarios.apellido_nombre}</td>
                            <td>{usuarios.telefono}</td>
                            <td>{usuarios.estado=='A'?'Activo':'Baja'}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            { (usuarios.estado=='B')? 

                                <button onClick={() =>altaUsuario(usuarios.username,'A')} type="button" className="btn btn-outline-primary">Alta</button>
                                :
                                <>

                               
                                <button onClick={() => bajaUsuario(usuarios.username,'B')} type="button" className="btn btn-outline-danger">Baja</button>
                                <Link name="" id="" className="btn btn-outline-secondary" to={`/edit_clientes/${clientes.idClientes}`} role="button">Editar </Link>
                                </>
                            }

                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}