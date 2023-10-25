import React from "react";
import { Relatorio, RelatorioChave, RelatorioLinha, RelatorioLista, RelatorioTitulo, RelatorioValor, RelatorioWrapper } from "./RelatorioInundacao.style";

function RelatorioInundacao(){
    return(
        <RelatorioWrapper>
        <Relatorio>
        <RelatorioTitulo>Relatório da área</RelatorioTitulo>
        <RelatorioLista>
            <RelatorioLinha>
                <RelatorioChave>Risco de inundação</RelatorioChave>
                <RelatorioValor>79,6%</RelatorioValor>
            </RelatorioLinha>
            <RelatorioLinha>
            <RelatorioChave>Capacidade de escoamento</RelatorioChave>
            <RelatorioValor>8,32 m³/s</RelatorioValor>
            </RelatorioLinha>
            <RelatorioLinha>
            <RelatorioChave>Volume de chuva</RelatorioChave>
            <RelatorioValor>50mm</RelatorioValor>
            </RelatorioLinha>
        </RelatorioLista>
    </Relatorio>  
        </RelatorioWrapper>
    );
}

export default React.memo(RelatorioInundacao);
