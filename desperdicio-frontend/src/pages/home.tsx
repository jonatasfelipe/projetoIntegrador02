import React, { useState, useEffect, ChangeEvent } from 'react';
import Axios from 'axios';
import { Row } from "../components/Row";

interface DonationData {
  Name?: string;
  Email: string;
  TipoRequisicao: string;
  Message: string;
}

function Home() {
  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>('https://projeto-integrador02-backend.vercel.app')
      .then((response) => setData(response.data));
  }, []);

  const [values, setValues] = useState<any>();

  const handleChangeValues = (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Axios.post("https://projeto-integrador02-backend.vercel.app", {
      Name: values.name,
      Email: values.email,
      TipoRequisicao: values.tiporequisicao,
      Message: values.message,
    }).then((response) => {
      console.log(response);
      window.location.replace("https://projeto-integrador02.vercel.app/");
    });
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doações</title>
        <style>
          {`
              body {
                background-image: url("https://i.ibb.co/vB7YLBZ/Whats-App-Image-2024-05-11-at-17-36-20-1.jpg");
                background-size: cover;
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                font-size: 16px;
                height: 100vh;
              }
              h1 {
                font-size: 24px;
                font-weight: bold;
              }
              #map {
                height: 250px;
                width: 100%;
                position: relative;
                bottom: 0;
              }
              #content {
                background: rgba(255, 255, 255, 0.8);
                padding: 20px;
                border-radius: 10px;
                margin: 20px;
                display: flex;
                justify-content: center;
              }
              #signup-form {
                width: 300px;
                margin: 20px;
                padding: 10px;
                background: rgba(255, 255, 255, 0.8);
                border: 1px solid #ccc;
                border-radius: 5px;
                display: center;
                justify-content: center;
              }
              .description {
                margin: 20px;
                color: #fff;
              }
              .eye-icon {
                cursor: pointer;
              }
              .btn {
                display: inline-block;
                margin: 10px;
                padding: 10px 20px;
                background: #0074d9;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                justify-content: center;
                align-items: center;
              }
              .modal-content {
                background: #fff;
                padding: 20px;
                border-radius: 5px;
              }
              .modal-close {
                float: right;
                cursor: pointer;
              }
              .input-box {
                margin: 10px 0;
                display: flex;
                flex-direction: column;
              }
              .input-box-radio {
                margin: 10px 0;
                display: flex;
                gap: 10px;
              }
              .button-container {
                text-align: center;
              }
              .btn {
                display: center;
              }
              .card {
                background-color: #E9CA5D;
                padding: 10px;
                min-height: 50px;
                min-width: 100px;
                border-radius: 20px;
              }
              .Center {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .cardSuperior {
                width: 90vw;
                background: rgba(255, 255, 255, 0.8);
                border: 1px solid #ccc;
                border-radius: 5px;
                display: center;
                justify-content: center;
                padding: 0.5em;
                margin-top: 0.5em;
              }
              .sc-fqkvVR.fPuplT {
                width: 90vw;
                display: flex;
                flex-wrap: wrap;
              }
            `}
        </style>
      </head>

      <div className='Center'>

        <div className='cardSuperior'>
          <h1>
            Sobre as Doações
          </h1>
          <p>
            <strong>Enfrente a Fome: </strong>
            Doar alimentos é um ato nobre que alimenta corpos e nutre a esperança.
          </p>
          <p><strong>Vista a esperança:</strong>
            Doar roupas, calçados e cobertores aquece corpos e corações. Uma doação pode significar a diferença entre o frio da rua e o aconchego de um lar.</p>

          <p><strong>Abrace a educação:</strong>Doar livros, materiais escolares, instrumentos musicais, ferramentas de arte e brinquedos abre portas para o conhecimento e o futuro. Uma doação pode iluminar mentes e inspirar sonhos.</p>
          <p>
            <strong>Cuide da saúde:</strong> Doar medicamentos, produtos de higiene, itens de limpeza e itens de primeiros socorros garante bem-estar e previne doenças. Uma doação pode salvar vidas e aliviar o sofrimento.

          </p>
        </div>

        <form id="signup-form">
          <h2>Informações Pessoais</h2>
          <div className="input-box">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" onChange={handleChangeValues} />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChangeValues} required />
          </div>
          <div className="input-box">
            <label htmlFor="tipoRequisicao">Eu estou:</label>
            <div className='input-box-radio'>
              <input type="radio" value="doando" id="tiporequisicao" name="tiporequisicao" onChange={handleChangeValues} required />
              <label>Doando</label>
            </div>
            <div className='input-box-radio'>
              <input type="radio" value="precisando" id="tiporequisicao" name="tiporequisicao" onChange={handleChangeValues} required />
              <label>Precisando</label>
            </div>
          </div>
          <h2>Mensagem</h2>
          <div className="input-box">
            <textarea id="message" name="message" rows={4} cols={35} onChange={handleChangeValues} placeholder="Digite aqui sua doação ou aquilo que você necessita"></textarea>
          </div>
          <div className="button-container">
            <button id="btnEnviar" className="btn" onClick={handleClickButton} style={{ backgroundColor: '#0074d9' }}>
              Enviar
            </button>
          </div>
        </form>

        <div className='cardSuperior'>
          <h2>Doações Disponíveis</h2>
          <div className='doacoes'>
            <Row>
              {data.map((item, index) => (
                <div className='card' key={index}>
                  <p> Nome do Doador: {item.Name ? item.Name : 'Anônimo'}
                    <br></br>Mensagem: {item.Message}
                  </p>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div >
  );
}

export default React.memo(Home);
