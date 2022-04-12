import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  margin-bottom: 2rem;
  background: #F0F2F5;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    margin: 1rem 0.5rem;
  }
`;

export const StyledLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: black;
  line-height: 2rem;
  
`;