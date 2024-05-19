import React from "react";
import { Texto } from "../components/Texto";
import { Titulo } from "../components/Titulo";

function SobreNos() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doação de Alimentos</title>
        <style>
          {`
          body {
            background-image: url("https://i.ibb.co/YXKkjtP/Whats-App-Image-2024-05-11-at-17-36-20-2.jpg");
            background-size: cover;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-repeat: no-repeat;
            height: 100vh;
          }
          .Center {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .cardSuperior {
            width: 80vw;
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid #ccc;
            border-radius: 5px;
            display: center;
            justify-content: center;
            padding: 0.5em;
            margin-top: 0.5em;
            text-align: center;
          }`}
        </style>
      </head>
      <div className="Center">
        <div className="cardSuperior">
          <Titulo>Lema</Titulo>
          <Texto>“Juntos, podemos construir um futuro melhor!”</Texto>

          <Titulo>Objetivo</Titulo>
          <Texto>Utilizar tecnologias digitais para otimizar a distribuição de bens e alimentos, garantindo eficiência, redução de desperdícios e maior alcance a indivíduos e comunidades em situação de vulnerabilidade social.</Texto>

          <Titulo>Missão </Titulo>
          <Texto>Com nossos esforços coletivos queremos promover o acesso equitativo a bens e serviços essenciais para todas as pessoas.</Texto>

          <Titulo>Visão</Titulo>
          <Texto>Queremos criar um mundo onde a tecnologia seja um instrumento para combater a pobreza, a desigualdade e a fome.</Texto>

          <Titulo>Valores</Titulo>
          <Texto>
            1.  Integridade e Honestidade
            2.	Contribuição social positiva
            3.	Empatia por todos os seres vivos
            4.	Democratização da tecnologia
            5.	Proatividade e Trabalho de Equipe</Texto>
        </div>
      </div>
    </html>

  )
}
export default React.memo(SobreNos);