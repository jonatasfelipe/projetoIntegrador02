import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/doacoes.png";
import { Aligner } from "../Aligner";
import * as S from './header.style';

function Header() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <Aligner>
        <S.AlignerHeader>
          <img src={Logo} style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
          <nav>
            <Link to="/">Página inicial</Link>

            <Link to="/doe">Não sabe para quem doar?</Link>

            <Link to="/ajude">Pedidos de doações</Link>

            <Link to="/sobre-nos">Sobre nós</Link>
            
            <Link to="/relatorio">Relatorio</Link>

          </nav>
        </S.AlignerHeader>
      </Aligner>
    </S.Wrapper>
  );
}

export default React.memo(Header);
