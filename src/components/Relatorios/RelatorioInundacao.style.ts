import styled from 'styled-components';

export const RelatorioWrapper = styled('div')`
    line-height: 55px;
    display: flex;
    margin-top: 2em;
    background-color: #F3f3f3;
    align-items: center;
    cursor: pointer;
`

export const Relatorio = styled('details')`
    width: 1200px;
    padding: 0 2em;
`
export const RelatorioTitulo = styled('summary')`
    border-bottom: 1px solid #F1F4F4 ;
    border-top:  1px solid #F1F4F4;
`
export const RelatorioLista = styled('ul')`
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #D7DFE0;
    border-top: 1px solid #D7DFE0;
`
export const RelatorioLinha = styled('li')`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
    line-height: 25px;
    padding: 0 1em;
    &:nth-child(2) {
        background-color: #D7DFE0;
    }
`
export const RelatorioChave = styled('p')`
    align-items: center;
`
export const RelatorioValor = styled('span')`
   font-weight: 700;
   align-items: center;
   display: flex;
`
