import React, { useState } from 'react';
import './loginsenha.css';

function Logon() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const mudarlogin = (event) => {
    setLogin(event.target.value);
  }

  const mudarsenha = (event) => {
    setSenha(event.target.value);
  }

  const fazerlogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${login}, Password: ${senha}`);
  }

  return (
    <div className="capa">
    <div className="ret1"><div className='iphonegui'></div><div className='iphonegui2'></div></div>
    
    <form onSubmit={fazerlogin}>
      <label>
        <div className='logo'></div>
        <div className='nomelabel'>Login:</div>
    <br/>
        <input type="text" className='inputlogin' value={login} onChange={mudarlogin} placeholder='digite seu login'/>
    <br/>
    
        <div className='senhalabel'>Senha:</div>
    <br/>
        <input type="password" className='inputsenha' value={senha} onChange={mudarsenha} placeholder='digite sua senha'/>
      </label>
    <br/>
    <button type="submit" className='botaologar'>Login</button>
    <button type="submit" className='botaovoltar'>Voltar</button>
    </form>
    </div>
  );
}

export default Logon;