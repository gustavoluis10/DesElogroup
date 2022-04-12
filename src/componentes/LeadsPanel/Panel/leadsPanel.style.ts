import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #F0F2F5;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  border: 1px solid black;
  width: 60%;
  button{
    background: #2196F3;
    color: #FFF;
    padding: 0.6rem 2.5rem;
    border: 0;
    margin: 1rem 2rem;
    max-width: 11rem;
    
    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  
  img {
    max-width: 15rem;
  }
  p{
    margin-left: 4rem;
  }
`;