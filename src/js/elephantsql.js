function consultarLogin(){
  const pg = require('pg');
  const conString = "postgres://nwxnuwzj:H6MxlTO1u2BoGSkHXr9ZImxw36zjmfDK@silly.db.elephantsql.com/nwxnuwzj";
  const client = new pg.Client(conString);
  
  return new Promise((resolve, reject) => {
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

const emails = []
const senhas = []

consultarLogin()
.then((result) => {
  for (var i in result) {
    emails.push(result[i].email)
    senhas.push(result[i].senha)
  }
})
.then(() => {
  console.log(global.emails = emails)
  console.log(global.senhas = senhas)
})
.catch((error) => {
  console.error(error)
});