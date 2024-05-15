import React, { useState, useEffect } from 'react';
import { Row } from '../components/Row';
import jsPDF from 'jspdf';
import Axios from "axios";

interface DonationData {
  Name?: string;
  Message: string;
}

const MyComponent: React.FC = () => {
  const generatePDF = () => {

    const pdf = new jsPDF("p", "pt", "a4", true);
    const html = document.getElementById('contentToConvert');

    if (html) {
      html.style.visibility = 'visible';
      pdf.html(html, {
        callback: () => {
          pdf.save('documento.pdf');
          html.style.visibility = 'hidden';
        }
      });
    }
  };

  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>("https://projeto-integrador02-backend.vercel.app/recebeu-ajuda").then((response) =>
      setData(response.data)
    );
  }, []);

  return (
    <div id='container'>

      <h1>Relatório de pessoas Ajudadas</h1>
      <button onClick={generatePDF}>Gerar PDF</button>
      <style>
        {`
          #container{
            max-width:600px;
          }
          #contentToConvert{
            visibility: hidden;
            background-color: orange;
            color: white;
            max-width: 600px;
            display:flex;
            flex-wrap: wrap;
          }
          .cardSuperior{
            width:600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .doacoes{
            background-color: yellow;
            width: 600px;
            display:flex;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
          }
          .card{
            background-color: brown;
            border-radius: 20px;
            display:flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 20px;
            width:300px;
          }
          `}
      </style>

      <div id="contentToConvert">
        <div className='cardSuperior'>
          <h2>Doações Ajudadas</h2>
          <Row className='doacoes'>
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
  );
};

export default MyComponent;
