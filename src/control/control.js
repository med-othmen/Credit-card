import React from 'react';
import './control.css';




class Control extends React.Component {
 
  render() {
  return (
     
    <div className="control-panel">
      
      <p>Your card credit number please</p>
      <input className="input" id="number" placeholder="card number" value={this.props.state.number} type="text" name="number" maxlength="19" onChange={this.props.Verifnumber }/>
      <p>Your name please</p>
      <input className="input" id="name" placeholder="Name" value={this.props.state.name} type="text" name="name" maxlength="26" onChange={this.props.Verifname}/>
      <p>Date of expiration</p>
      <input className="input" id="date" placeholder="MM/YY" value={this.props.state.date} type="text" name="date" maxlength="5" onChange={this.props.Verifdate}/>
      
        
</div>
  );
}
}

export default Control;
