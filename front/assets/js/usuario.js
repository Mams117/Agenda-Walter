//variables de entorno
const urlApi="http://localhost:4000/";


//DOM Login
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const btnenviar=document.querySelector("#btnenviar")


btnenviar.addEventListener("click",(e)=>{
e.preventDefault();//previene el reenvio del formulario
fetch(urlApi+"login",{
    method:"POST",
    headers:{
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        Email: email.value,
        Password: password.value,
        })
})
.then((res) => {
    
    return res.text();
  })
.then((res) => {
    console.log(res)
    if(res==="true"){
    window.location="http://127.0.0.1:5500/dashboard.html";

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Falla en la validacion',
            text: 'clave o usuario erronea',
          })
    }
  });
})