import styled from 'styled-components';

export const Wrapper = styled('header')`
 
  min-height: 88px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
    font-weight: bold;
    background-color: #FF9F00;
    padding: 1em;
    border-radius: 1em;
    color: ${({ theme }) => theme.colors.black};
    margin-left: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width:100px;
  }
`


export const AlignerHeader = styled('div')`
  justify-content: space-between;
  align-items: center;
  min-height: 88px;
  display: flex;
`