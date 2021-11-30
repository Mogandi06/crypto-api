import React from 'react'
import styled from 'styled-components'

const coin = ({ name, image, symbol, price, priceChange, rank, volume, id }) => {
    return (
        <Container>

            <div className="card mb-3 bg-dark">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="d-flex">

                            <div className="col-md-7">
                                <a className="mx-3" href={`https://www.coingecko.com/id/koin_koin/${id}`} target="_blank"><img src={image} className="img-fluid rounded-start  mt-4" alt="logo-currency" width="100px" /></a>
                            </div>
                            <div className="col-md-12 mx-4">
                                <div className="card-body">
                                    <p className="fs-6 mb-0 name">{name}</p>
                                    <h1 className="fs-3 mb-0">{symbol}</h1>
                                    <p className="fs-6">IDR {price.toLocaleString()}</p>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex mt-3">
                            <div className="col-md-6 mx-5">
                                <p><span className="fw-bold">Rank</span><br /> {rank}</p>
                            </div>
                            <div className="col-md-6">
                                <p><span className="fw-bold">24h</span><br /> {priceChange < 0 ? (
                                    <p className='coin-percent text-danger'> {priceChange.toFixed(2)}%</p>
                                ) : (<p className='coin-percent text-success'> {priceChange.toFixed(2)}%</p>)} </p>

                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col-md-12 mx-5">
                                <p><span className="fw-bold">Volume</span><br />IDR {volume.toLocaleString()}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Container>
    )
}

export default coin

const Container = styled.div`
 width: 300px; 
 margin-right: 15px;
 margin-bottom: 10px;

 & h1{
     text-transform: uppercase;
     font-weight: 700;
 }
`

