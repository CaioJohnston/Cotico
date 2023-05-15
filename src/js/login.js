function consultarLogin(){
    const pg = require('pg');
    const conString = "postgres://nwxnuwzj:H6MxlTO1u2BoGSkHXr9ZImxw36zjmfDK@silly.db.elephantsql.com/nwxnuwzj";
    const client = new pg.Client(conString);
    
    new Promise((resolve, reject) => {
      client.connect(function(err) {
        client.query('SELECT email, senha FROM usuarios;', function(err, result) {
          if(err) {
            reject('Usuario nao encontrado', err);
          }
          client.end();
          resolve(result.rows);
        });
      });
    });
  }

function efetuarLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const retorno = document.getElementById("returnfield")

    if (email == "caio@coticoapp.com" && senha == "caiocotico"){
        location.href = "./mapa.html";
    }else{
        retorno.innerText = "Email e/ou Senha inválidos. Tente novamente."
    }
}