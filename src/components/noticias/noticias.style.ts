import styled from 'styled-components';

export const NoticiasWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 25vw;
    height: 413px;
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2em;
` 
export const WrapperText = styled('div')`
    margin: 1em;
    height: 100%;
` 
export const NoticiasImagem = styled('img')`
    height: 170px;
    width: auto;
` 
export const NoticiasTitulo = styled('h3')`
    font-size: 18px;
    font-weight: 700;
` 
export const NoticiasTexto = styled('p')`
    font-size: 16px;
` 
export const NoticiasLink = styled('a')`
    font-size: 16px;
    color:  #0097F5;
    float: right;
    text-decoration: underline;
    
` 