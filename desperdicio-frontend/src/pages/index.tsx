import React, { useState, useEffect, ChangeEvent } from "react";
import Axios from "axios";

interface DonationData {
  Name?: string;
  Message: string;
}

function Home() {
  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>("https://projeto-integrador02-backend.vercel.app").then((response) =>
      setData(response.data)
    );
  }, []);

  const [values, setValues] = useState<any>();

  const handleChangeValues = (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("https://projeto-integrador02-backend.vercel.app", {
      Name: values.name,
      Email: values.email,
      TipoRequisicao: values.tiporequisicao,
      Message: values.message,
    }).then((response) => {
      console.log(response);
    });
  };

  const color = document.getElementById("cor_fundo") as HTMLElement;
  const numero = document.getElementById("numero") as HTMLElement;

  let tamanho = 0;
  let quantidade = 0;
  let tempo = setInterval(() => {
    tamanho += 1;
    quantidade += 1;
    color.style.height = `${tamanho}%`;
    numero.textContent = quantidade.toString();
    if (quantidade === 90) {
      clearInterval(tempo);
    }
  }, 90);

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

              body {
                background-color: #E6BB90;
                background-size: cover;
                margin: 0;
                padding: 0;
                font-family: "Roboto", Arial, sans-serif;
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
              .flex {
                display: flex;
              }
              .textoPrincipalSuperior{
                font-size: 7em;
                  font-weight: bold;
                  font-family:  "Roboto", sans-serif;
                 color: #555;
              }.textoSecundario{
                font-size: 4em;
                text-align:center;
                  font-weight: bold;
                  font-family:  "Roboto", sans-serif;
                 color: #555;
              }
              .principalSuperior{
                padding-top:1em;
                align-items:center;
                justify-content:space-between;
              }
              .contador{
             transform: rotate(180deg);
                position: relative;
              
            }
            
            .numero{
                width: 100%;
                text-align: center;
                font-size: 7em;
                font-weight: bold;
                font-family:  "Roboto", sans-serif;
               color: #555;
                transform: rotate(-180deg);
                mix-blend-mode: screen;
                background-color: .contador{
                  height:155px;
                  width: 320px;
               transform: rotate(180deg);
                  margin: 200px 100px;
                  position: relative; 
              }
              
              .numero{
                  width: 100%;
                  text-align: center;
                  font-size: 7em;
                  font-weight: bold;
                  font-family:  "Roboto", sans-serif;
                 color: #555;
                  position: absolute;
                  transform: rotate(-180deg);
                  mix-blend-mode: screen;
                  background-color: #fff;
                 display: flex;
                 justify-content: center;
                 align-items: center;
              }
            }
            .fundo_cor{
                transition: .2s;
                transform-origin: bottom;
                position: absolute;
                display: block;
                background-color: #E6BB90;
            }
            .fotoFome {
              max-width:100%;
              padding-left:2em;
              border-radius:5em;
            }
            `}
        </style>
      </head>

      <div className="flex principalSuperior">
        <span className="textoPrincipalSuperior">+ DE R$</span>
        <div className="contador">
          <div className="fundo_cor" id="cor_fundo"></div>
          <div className="numero" id="numero"></div>
        </div>
        <span className="textoPrincipalSuperior">MILHÕES</span>
      </div>

      <div className="flex principalSuperior">
        <div><h1 className="textoSecundario">JÁ DESTINADOS!</h1></div>
        <div><img className="fotoFome" src="https://i.ibb.co/1m2HYJy/Whats-App-Image-2024-05-11-at-17-36-19.jpg" alt="" /></div>
      </div>

      <div className="flex principalSuperior">
        <div><h1 className="textoSecundario">*Segundo dados do PIX RS</h1></div>
      </div>





    </div>
  );
}

export default React.memo(Home);
