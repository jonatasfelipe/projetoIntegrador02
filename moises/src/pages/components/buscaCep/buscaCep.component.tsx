import React from "react";
import {CircularProgress}  from '@mui/material';
import { IAddress } from "../../LocalRetirada";

export function BuscaCep({ setAddress }: {setAddress: React.Dispatch<React.SetStateAction<IAddress>>}) {

  const [inputCep, setInputCep] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  function buscacep() {
    setLoading(true);
   fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
   .then( data => data.json())
   .then(data =>{
      setLoading(false);
      setAddress(data);
    });
  }

  return (
    <>
       <h1 style={{ fontSize: 48, textAlign: 'center' }}>Busque o endereço</h1>
      <p style={{ fontSize: 18, textAlign: 'center' }}>Onde retirar a contribuição?</p>

      <form  style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000, margin: '0 auto', marginTop: 20}}>

      <label style={{ display: 'flex', flexDirection: 'column'}}>
        CEP:
        <input type="text" placeholder="Digite um cep para pesquisar" onChange={(e) =>  setInputCep(e.target.value)} style={{ backgroundColor: '#F3F3F3', border: 'none', padding: 16, fontSize: 16, marginTop: 10, borderRadius: 5 }} />
      </label>

      { !loading && <button onClick={(e) => {
        e.preventDefault();
        buscacep();
      }}
      disabled={!inputCep}
      style={{ backgroundColor: '#0097F5', color: 'white', flex: 1, border: 'none', padding: 16, fontSize: 16, marginTop: 10, borderRadius: 5}}>Avançar</button>}
      { loading && <CircularProgress style={{ margin: '0 auto', marginTop: 10 }} /> }
      </form>
    </>
  )
}