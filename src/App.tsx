import { BrowserRouter } from 'react-router-dom';
import { Header } from './componentes/Header/header';
import { RouteApp } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <RouteApp />
      </BrowserRouter>
    </div>
  );
}

export default App;