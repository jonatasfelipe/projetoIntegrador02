import React, { useState, useEffect, ChangeEvent } from 'react';
import Axios from 'axios';
import { Row } from "../components/Row";

interface DonationData {
  ID: string;
  Name?: string;
  Email: string;
  Message: string;
}

const idvalue = 99;

function Home() {
  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>('https://projeto-integrador02-backend.vercel.app/ajude')
      .then((response) => setData(response.data));
  }, []);

  const [values, setValues] = useState<any>();

  const handleChangeValues = (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValue: any) => ({ ...prevValue, [value.target.name]: value.target.value, }));
  };

  const handleClickButton2 = () => {

    const response = confirm("Confirma ajudar agora?  ");
    if (response) {
      //alert("1");
      try {
        //alert('https://projeto-integrador02-backend.vercel.app/api/donations/' + values.ChkSim);
        Axios.put('https://projeto-integrador02-backend.vercel.app/contribua/' + values.ChkSim)
          .then(response => {
            alert('Doação atendida!!');
          })
          .catch(error => {
            alert(error.response.data);
          });
      }
      catch (err) {
        alert("Erro: ao realizar o método a contribuição");
      };
    } else {
      alert("Não ajudando");
    };
  };


  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doação de Alimentos</title>
        <style>
          {`
              body {
                background-image: url("https://i.ibb.co/CJY8kD0/Whats-App-Image-2024-05-11-at-17-36-21-1.jpg");
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
                text-align: center;
              }
            `}
        </style>
      </head>


      <div className='Center'>

        <div className='cardSuperior'>
          <h1>
            Agradecimentos!
          </h1>
          <p>

            Gostaria de aproveitar a oportunidade para transmitir nossos sinceros agradecimentos pela sua iniciativa de doação à alguém que precisa. Como você sabe, iniciamos esse projeto para reunirmos o máximo de contribuições que nos ajudarão a nos aproximarmos da nossa meta de ajudarmos o próximo.

            <br /><br /><b>Mais uma vez, obrigado pela generosidade e pelo apoio!</b>

          </p>
        </div>

        <form id="Ajude-form">
          <div className='cardSuperior'>
            <h2>Encontre Alguém para ajudar!</h2>
            <div className='doacoes'>
            </div>
            <Row id="rows">
              {data.map((item, index) => (
                <div className='card' key={index}>
                  <p> Ajude o pedido N° : {item.ID}
                    <br></br>Nome: {item.Name ? item.Name : 'Anônimo'}
                    <br></br>Email: {item.Email}
                    <br></br>Mensagem: {item.Message}
                  </p>

                  <fieldset>
                    <legend>Ajudar</legend>
                    <div>
                      <input type="checkbox" id="ChkSim" name="ChkSim" value={item.ID} onChange={handleChangeValues} />
                      <label htmlFor="ChkSim">Marque aqui para confirmar sua ajuda!</label>
                    </div>
                  </fieldset>

                  <div className="button-container">
                    <button id="btnAjudar" className="btn" onClick={handleClickButton2} style={{ backgroundColor: '#0074d9' }}>
                      Ajudar
                    </button>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </form>
      </div>
    </div >
  );
}

export default React.memo(Home);