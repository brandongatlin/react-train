import React from 'react';
import './App.css';

import { Container } from 'reactstrap';

import Board from './components/Board';
import TrainInput from './components/TrainInput';



const App = () => {

  return (
    <Container fluid className="App">
      <Board/>
      <TrainInput/>
    </Container>
  );
}

export default App;
