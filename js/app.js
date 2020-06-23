//-----------------------VARIABLES
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

//---------------------EVENT LISTENERS
eventListeners();

function eventListeners(){
    //inicia la app y desabilita el boton enviar
    document.addEventListener('DOMContentLoaded', inicioApp);
    
    //campos de formulario
    email.addEventListener('blur', validarCampo);//evento: cuando se hace click sobre el, y luego click afuera
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);
}

//--------------------FUNCIONES
function inicioApp(){
    //desabilita el btnEnviar
    btnEnviar.disabled = true
}

//validar que halla algo escrito dentro
function validarCampo(){
    //verificar que hay algo escrito y su longitud
    validarLongitud(this);//donde estamos situados

    //validar solo el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value.length > 3 && asunto.value.length > 3 && mensaje.value.length > 3){
        if(errores.length === 0){
            btnEnviar.disabled = false;//habilitamos el boton;
        }
        
    }
}

//cuando se envia el correo
function enviarEmail(e){
    e.preventDefault();
    console.log('correo enviado');

    //spinner al presionar enviar
    const spinnerGIF = document.querySelector('#spinner');
    spinnerGIF.style.display = 'block';
    
    //gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    
    //ocultar spinner y mostrar gif enviado despues de 3 segundos
    setTimeout(function(){
        spinnerGIF.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
   
        setTimeout(function(){
            enviado.style.display = 'none';
        }, 2000)
    }, 3000)
}

function validarLongitud(campo){
    if(campo.value.length >= 4){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    let posicion = campo.value.indexOf('@');

    if (posicion !== -1){
        //console.log('El @ esta e la posicion ' + posicion);
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{//no hay arroba
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}