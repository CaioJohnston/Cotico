/* DESATIVADO EM NOSSA VERSAO DEMO

function consultarLogin(){
  var pg = require('pg')
  const conString = "postgres://nwxnuwzj:H6MxlTO1u2BoGSkHXr9ZImxw36zjmfDK@silly.db.elephantsql.com/nwxnuwzj";
  const client = new pg.Client(conString)
  
  return new Promise((resolve, reject) => {
    client.connect(function(err) {
      client.query('SELECT nome, email, senha FROM usuarios;', function(err, result) {
        if(err) {
          reject('Usuario nao encontrado', err)
        }
        client.end();
        resolve(result.rows);
      });
    });
  });
}

const users = []
const emails = []
const senhas = []

consultarLogin()
.then((result) => {
  for (var i in result) {
    users.push(result[i].nome)
    emails.push(result[i].email)
    senhas.push(result[i].senha)
  }
})
.then(() => {
  console.log(global.users = users)
  console.log(global.emails = emails)
  console.log(global.senhas = senhas)
  efetuarLogin()
})
.catch((error) => {
  console.error(error)
});

function efetuarLogin(){
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const retorno = document.getElementById("returnfield")

    if (emails.indexOf(email) !== -1 && senhas.indexOf(senha) !== -1){
        userlog = users[emails.indexOf(email)]
        location.href = "./mapa.html"
    }else{
        retorno.innerText = "Email e/ou Senha inválidos. Tente novamente."
    }
}
*/

function efetuarLogin(){
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value
  const retorno = document.getElementById("returnfield")

  if (email == "caio@coticoapp.com" && senha == "caiocotico"){
      location.href = "./mapa.html"
  }else{
      retorno.innerText = "Email e/ou Senha inválidos. Tente novamente."
  }
}