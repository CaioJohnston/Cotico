
export function consultarLogin(){
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

consultarLogin()
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.error(error);
});