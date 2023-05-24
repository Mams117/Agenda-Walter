//variables de entorno
const urlApi="http://localhost:4000/";

//Dom registro Contacto

const IdContacto=document.querySelector("#IdContacto")
const NombreContacto=document.querySelector("#NombreContacto")
const ApellidoContacto=document.querySelector("#ApellidoContacto")
const ApellidoContacto2=document.querySelector("#ApellidoContacto2")
const TelefonoContacto=document.querySelector("#TelefonoContacto")
const EmailContacto=document.querySelector("#EmailContacto")
const FechaContacto=document.querySelector("#FechaContacto")
const btnRegistroContacto=document.querySelector("#btnRegistroContacto")


//Evento registro contacto
btnRegistroContacto.addEventListener("click",(e)=>{
    e.preventDefault();//previene el reenvio del formulario
    fetch(urlApi+"contacto",{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Id:IdContacto.value,
            Nombre:NombreContacto.value,
            Apellido:ApellidoContacto.value,
            Apellido2:ApellidoContacto2.value,
            Telefono: TelefonoContacto.value,
            Email: EmailContacto.value,
            Fecha_nace:FechaContacto.value,
            })
    })
    .then((res) => {
        
        return res.text();
      })
    .then((res) => {
        console.log(res)
        if(res==="true"){
            Swal.fire({
                icon: 'success',
                title: 'Good',
                text: 'Contacto ingresado Correctamente',
              })
    
        }
        else{
            
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'Problema al registrar el contacto',
              })
        }
      });
    })