// FUNCIONALIDADE DESATIVADA EM NOSSA VERSAO DEMO

/*
function efetuarCadastro(){
    const nome = 'teste1'//document.getElementById("nome").value
    const email = 'teste2'//document.getElementById("email").value
    const senha = 'teste3'//document.getElementById("senha").value
    //const retorno = document.getElementById("returnfield")

    var pg = require('pg')
    const conString = "postgres://nwxnuwzj:H6MxlTO1u2BoGSkHXr9ZImxw36zjmfDK@silly.db.elephantsql.com/nwxnuwzj";
    const client = new pg.Client(conString)
    
    return new Promise((resolve, reject) => {
        client.connect(function(err) {
          client.query(`INSERT INTO usuarios VALUES ('${nome}', '${email}', '${senha}', 0, '');`, function(err, result) {
            if(err) {
              reject('Usuario nao cadastrado', err)
            }
            client.end();
            resolve(result.rows);
          });
        });
      });
}
*/

function efetuarCadastro(){
    const retorno = document.getElementById("returnfield")
    retorno.innerText = "Falha ao conectar!"
}
