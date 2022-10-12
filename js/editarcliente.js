
import {obtenerCliente,actualizaCliente} from './API.js'
import { mostrarAlerta,validar } from './funciones.js'


(function (){

    //CAMPOS DEL FORMULARIO
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded',  async()=>{
        const parametroURL = new URLSearchParams(window.location.search);
        const idCLiente = parseInt(parametroURL.get('id'))
        const cliente = await obtenerCliente(idCLiente)
        mostrarCliente(cliente)

        //SUBMIT DEL FORMULARIO

        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente (cliente){
        const {nombre, empresa, telefono, email, id} = cliente

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id; 
        
    }

    function validarCliente (e){
        e.preventDefault();
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
    
    if(!validar(cliente)){
        mostrarAlerta('Todos los campos son obligatorios')
        return
    }
    
//REESCRIBE EL OBJETO 
actualizaCliente(cliente)
    }   

})()