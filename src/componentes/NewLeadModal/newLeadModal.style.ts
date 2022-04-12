import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  img {
    max-width: 15rem;
  }
  p{
    margin-left: 4rem;
  }
`;

export const Content = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  width: 40%;
  padding: 1rem;
  label {
    margin-left: 0.5rem;
  }
  input{
    width: 100%;
    margin: 0.8rem 0;
    height: 2rem;
  }
`;

export const CheckBoxTable = styled.div`
  width: 50%;
  padding: 1rem;
  table{
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }
  th{
    border: 1px solid black;
  }
  
  td {
    border: 1px solid black;
    text-align: center;
  }
  
  button{
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    background: #2196F3;
    color: #FFF;
    border: 0;
  }
`;