import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(error => console.log(error));
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filter = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <Container1>
      <div className="container">
        <div className="coin-search">
          <p className="fs-1 fw-bold mb-0 text-center">Carilahhhh</p>
          <Form>
            <form>
              <div className="mb-4 input-group">
                <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Search" onChange={handleChange} />
                <div className="input-group-text bg-dark"><i class="bi bi-currency-bitcoin"></i></div>
              </div>
            </form> <br />

          </Form>
          <Cont>
            {filter.map(coin => {
              return (
                <Coin key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  rank={coin.market_cap_rank}
                  volume={coin.total_volume}
                  id={coin.id}
                />
              )
            })}
          </Cont>
        </div>
      </div>
    </Container1>
  );

}

export default App;

const Container1 = styled.div`
  font-family: "Poppins",sans-serif;
  margin: 2% auto;
  color: #fff;
`
const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  & form{
    width:50%;
  }
  & i{
    color: #F7931A;
  }
`
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & form{
    width:50%;
  }
  & i{
    color: #F7931A;
  }
`

