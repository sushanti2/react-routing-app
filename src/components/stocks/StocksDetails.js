import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link, useParams}   from 'react-router-dom';

let StocksDetails = () => {
    let stockId = Number(useParams().id);
    let [selectedStock, setSelectedStock] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');


    useEffect(()=> {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json';
        Axios.get(dataURL).then((response)=> {
            let aStock = response.data.find(stock => stock.id === stockId);
            setSelectedStock(aStock);
        }).catch((error)=> {
            setErrorMessage(error);
        });

    }, []);

    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary"> Stocks Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolores dolorum, inventore laboriosam laudantium obcaecati placeat provident quasi recusandae? Accusantium adipisci dolor, dolorum eaque enim expedita fuga itaque molestias, nesciunt nobis non odio pariatur quae quis reprehenderit saepe suscipit!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-9">
                        {
                            Object.keys(selectedStock).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-success ">
                                            <p className="h4 font-weight-bold">{selectedStock.name}</p>

                                        </div>
                                        <div className="card-body bg-light">
                                            <ul className="list-group ">
                                                <li className="list-group-item font-italic bg-warning">
                                                    Id : {selectedStock.id}
                                                </li>
                                                <li className="list-group-item font-italic bg-light">
                                                    Industry : {selectedStock.industry}
                                                </li>
                                                <li className="list-group-item font-italic bg-warning">
                                                    Market : {selectedStock.market}
                                                </li>
                                                <li className="list-group-item font-italic bg-light">
                                                    Sector : {selectedStock.sector}
                                                </li>
                                                <li className="list-group-item font-italic bg-warning">
                                                    Symbol : {selectedStock.symbol}
                                                </li>
                                            </ul>

                                        </div>
                                        <Link to="/stocks" className="btn btn-success btn-sm mt-3 w-25 d-flex align-items-center justify-content-center font-weight-bold"> Back</Link>
                                    </div>

                                </React.Fragment>: null
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>

    )
};

export default StocksDetails;