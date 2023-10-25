import React from "react";
import CardButton from "../components/cardButton/cardButton.component";
import Noticias from "../components/noticias/noticias.component";
import { Row } from "../components/Row";
import imagem1 from "../assets/image-um.png"
import imagem2 from "../assets/image-dois.png"
import imagem3 from "../assets/image-tres.png"

function Home() {
  return (
    <div>
      <h2>Serviços</h2>
      <Row>
        <CardButton to="/local-retirada">Local de retirada</CardButton>
      </Row>
      <h2>Noticias</h2>
      <Row>
        <Noticias name="Machete Bombatisca" text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem1} alt="foto de agua" />
        <Noticias name="Machete Alarmante" text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem2} alt="foto de agua" />
        <Noticias name="Machete Envolvente" text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem3} alt="foto de agua" />
      </Row>


    </div>
  )
}

export default React.memo(Home);