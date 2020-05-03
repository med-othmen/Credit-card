import React from 'react';
import './style.css';
import Control from './../control/control' // import control component 
import logoMC from './../img/mc_logo.png'  //import mastercard logo
import puce from './../img/puce.png'  //import puce picture

class Creditcard extends React.Component  {
       state ={
            number:'',
            number1:'**** **** **** ****',
            name:'',
            date:'',
            date1:'--/--'
        }

// function check number card 
  Verifnumber =(event) => {
    var input = event.target.value;
    
          let regex=/^[0-9\s*]*$/g
        if (regex.test(input)) {
            this.setState({ number: input })            
        }

        if(this.state.number.length===3) {
            this.setState({ number: input.replace(/(.{4})/g, '$1 ') })
        }
         else   if(this.state.number.length===8){ 
            this.setState({ number: input.replace(/(.{9})/g, '$1 ') })
           }
            
         else   if(this.state.number.length===13) { 
            this.setState({ number: input.replace(/(.{14})/g, '$1 ') })
           }
           this.setState({number1:input.padEnd(19, '*')})
         
         
       
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
    let input=event.target.value
    let regex1 = /^0[1-9]{0,1}$/
    let regex2 = /^1[0-2]{0,1}$/
    let regex3=/^.{2}\/2[0-5]{0,2}$/
  
    if(this.state.date.length===2) {
        this.setState({ date: input.replace(/(.{2})/g, '$1/') }) 
    }
   
    if (regex1.test(input)) {
        this.setState({ date: input}) 
    }
    else if (regex2.test(input)) {  
        this.setState({ date: input}) 
    }

    if(regex3.test(input)){
        this.setState({ date: input})
     }


}
      
render() {
        return (
    <div className="form" >
                
        <Control Verifnumber={this.Verifnumber}  Verifname={this.Verifname}  Verifdate={this.Verifdate} state={this.state}/> 

        <div className='credit-card'>
                <div className='credit-card__logo'>
                    <img className='logo' src={logoMC} width="100" alt="logo MAster Card"/>
                </div>
                <div className='credit-card__logo'>
                    <img className='Logo' src={puce}  width="60" alt="logo MAster Card"/>
                </div>
                <div className='credit-card__number' >
                {this.state.number1}
                </div>
                <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                
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
