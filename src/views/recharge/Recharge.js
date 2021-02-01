import React, { Component } from 'react';
import {Image} from 'react-bootstrap';


//css
import './Recharge.css';

//components
import {RechargeCard} from './RechargeCard';

class Recharge extends Component {
  render(){
   return(<>
     <div style={{padding:'20px'}}>
         <img src={process.env.PUBLIC_URL + '/img/recharge-logo.svg'} width='100%' height='100px' />
     </div>
     <div className=' recharge-centre flex-container' style={{
       flexFlow:'row wrap',
       padding:'20px',
       justifyContent: 'space-between',alignItems:'center'}}> 
     <RechargeCard val={{coins:'300',amount:'4'}}></RechargeCard>
     <RechargeCard val={{coins:'1200',amount:'11'}}></RechargeCard>
     <RechargeCard val={{coins:'2500',amount:'25'}}></RechargeCard>
     <RechargeCard val={{coins:'7000',amount:'97'}}></RechargeCard>
     <RechargeCard val={{coins:'15000',amount:'200'}}></RechargeCard>
     <RechargeCard val={{coins:'30000',amount:'400'}}></RechargeCard>
     
     </div>
     </>

  )
}
}
export default Recharge;