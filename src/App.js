import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Repository from './components/Repository/Repository'
import NotFound from './components/404/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/buscarrepositorio" component={Repository} />
           {/* <Route exact path="/registrousuario" component={exportCriarUsuario} />
           <Route exact path="/registrocliente" component={exportCriarCliente} />          
           <Route exact path="/registrocontato/:id" component={({ match }) => <CriarContato id={match.params.id} />} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/cliente" component={Cliente} />
           <Route exact path="/clientes" component={Clientes} />
           <Route exact path="/clientes/:id" component={({ match }) => <Clientedetalhado id={match.params.id} />} />
           <Route path="/contatos" component={ListaContatos} />
           <Route exact path="/formulario" component={RegistroCliente} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
