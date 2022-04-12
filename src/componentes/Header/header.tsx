import { Container, StyledLink } from './header.style'


export const Header = (): JSX.Element => {
  return (
    <Container>
      <button>
        <StyledLink to='/'>Sign up</StyledLink>
      </button>
      <button>
        <StyledLink to='/leads'>Leads</StyledLink>
      </button>  
    </Container>
  );
}