//import { consultarLogin } from "./elephantsql.js"

function efetuarLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const retorno = document.getElementById("returnfield")

    if (email == "caio@coticoapp.com" && senha == "caiocotico"){
        location.href = "/Cotico/mapa.html";
    }else{
        retorno.innerText = "Email e/ou Senha inválidos. Tente novamente."
    }
}