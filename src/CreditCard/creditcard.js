import React from 'react';
import './style.css';
import Control from './../control/control'
import logoMC from './../img/mc_logo.png'  //import mastercard logo
import puce from './../img/puce.png'

class Creditcard extends React.Component  {
       state ={
            number:[''],
            name:'',
            date:'',
        }

// function check number card 
  Verifnumber =(e) => {
    let input = e.target.value;

          let regex=/^[0-9\s]*$/g
        if (regex.test(input)) {
            this.setState({ number: input })
        }
        if(this.state.number.length===4) {
            this.setState({ number: input.replace(/(.{4})/g, '$1 ') })
        }
         else   if(this.state.number.length===9){ 
            this.setState({ number: input.replace(/(.{9})/g, '$1 ') })
           }
            
         else   if(this.state.number.length===13) { 
            this.setState({ number: input.replace(/(.{14})/g, '$1 ') })
           }
   }
// function check name card 
    Verifname = (event)=> {
     let input = event.target.value;
     let regex=/^[A-Za-z\s]+$/
  
     if (regex.test(input) )
        { 
            this.setState({name:input })
        }
        
   }  
// function check date of valid card    
 Verifdate = (event) =>{
    let input = event.target.value;
    
    // eslint-disable-next-line no-useless-escape
    let regex=/^[0-9\/]*$/g

    if (regex.test(input) ) {
            this.setState({date:input})    
    }
    
    if(this.state.date.length===2) {
        this.setState({ date: input.replace(/(.{2})/g, '$1/') })
    }
}
        
render() {
                return (
            <div className="form" >
                
                <Control Verifnumber={this.Verifnumber}  Verifname={this.Verifname}  Verifdate={this.Verifdate} State={this.state} state={this.state}/> 

                <div className='credit-card'>
                        <div className='credit-card__logo'>
                            <img className='logo' src={logoMC} width="100" alt="logo MAster Card"/>
                        </div>
                        <div className='credit-card__logo'>
                            <img className='Logo' src={puce}  width="60" alt="logo MAster Card"/>
                        </div>
                        <div className='credit-card__number' >
                            {this.state.number}
                        </div>
                        <div className='credit-card__info'>
                        <div className='credit-card__info_name'>
                        <div >Zitouna Bank</div>
                            <div className='credit-card__info_label'>
                                {this.state.name.toUpperCase()}
                            </div>
                            
                        </div>
                        <div className='credit-card__info_expiry'>
                            <div className='credit-card__info_label'>VALID UP TO</div>
                            <div>
                                {this.state.date}
                            </div>
                        </div>
            </div>
            </div>                    
            
            </div>
        );
}

}

export default Creditcard;
