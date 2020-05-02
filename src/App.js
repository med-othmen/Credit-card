import React from 'react';
import './App.css';

import Creditcard from './CreditCard/creditcard' // import credit card component
import ms from './img/mc_logo.png'

// imort the logos of societes banks
import zitouna from './img/zitouna.png'
import mastercard from './img/mc_logo.png' 

const logos=[zitouna,mastercard]

function App() {
  return (
    <div className='App'>
      <h1 className="mycard">MY-CARD</h1>
      <h1 className="title">Create your own bank card online</h1>
      <Creditcard />

</div>
  );
}

export default App;
