import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';



//img
import RechargeLogo from '../img/recharge-logo.svg';

//css
import './Recharge.css';

//components
import { RechargeCard } from './RechargeCard';
import { AddAmountCard } from './AddAmountCard';
import * as countryMap from '../countryConstant';
class Recharge extends Component {
  om
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: {
        id: 6175,
        country: 'Timor Leste',
        currency: 'USD',

      },
      isLoaded: false,
      error: null,
      offers: [],
      rate: 1
    }
  }

  fetchRechargeOffer = () => {
    axios({
      method: 'get',
      url: '/api/fetchRechargeOffers'
    })
      .then(response => {
        if (response.status == '200') {
          this.setState({
            isLoaded: true,
            offers: response.data
          })
        }
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        })

      });
  }

  fetchCurrentRateOfCurrencyWithDollar = (currency) => {

    var fetchData = "USD_" + currency;
    axios({
      method: 'get',
      url: 'https://free.currconv.com/api/v7/convert',
      params: {
        q: fetchData,
        compact: "ultra",
        apiKey: "bd0afe2d97ec9c15d4cc"
      }
    }).then(response => {
      if (response.status == '200') {
        this.setState({
          isLoaded: true
        })
        var fetchData = "USD_" + currency;
        var responseRate = response.data[fetchData];
        this.setState({
          rate: responseRate
        })

      }
    }, (error) => {
      this.setState({
        isLoaded: true,
        error
      })

    })

  }

  componentDidMount() {
    this.fetchRechargeOffer();

  }
  changeSelectedCountry = (s) => {
    var selectedCountry = { ...this.state.selectedCountry };
    s.selectedCountry.rate = this.fetchCurrentRateOfCurrencyWithDollar(s.selectedCountry.currency);
    selectedCountry.id = s.selectedCountry.id;
    selectedCountry.country = s.selectedCountry.country;
    selectedCountry.currency = s.selectedCountry.currency;
    selectedCountry.rate = selectedCountry.rate;
    this.setState({ selectedCountry });
  }
  render() {
    return (<>

      <div style={{ padding: '20px', backgroundColor: 'white', textAlign: 'left' }}>
        <img src={RechargeLogo} width='100%' height='100px' />
        <b>Region</b>

        <DropdownButton id="dropdown-basic-button" title={this.state.selectedCountry.country}>

          {countryMap.countries.map(selectedCountry => (
            <Dropdown.Item as="button"><div onClick={() => this.changeSelectedCountry({ selectedCountry })}>{selectedCountry.country}</div></Dropdown.Item>

          ))}
        </DropdownButton>
      </div>
      {this.state.isLoaded===false?"":<div className=' recharge-centre flex-container' style={{
        flexFlow: 'row wrap',
        padding: '20px',
        justifyContent: 'space-between', alignItems: 'center'
      }}>

        <AddAmountCard val={{ currency: this.state.selectedCountry.currency }} />
        {this.state.offers.map((offer, i) => {
          console.log(this.state.offers);
          return (
            <RechargeCard val={{ coins: offer.coinValue, amount: (offer.dollarValue * this.state.rate).toFixed(2), calledFrom: 'plans', currency: this.state.selectedCountry.currency }}></RechargeCard>
          )

        })}


      </div>}
      
    </>

    )
  }
}
export default Recharge;