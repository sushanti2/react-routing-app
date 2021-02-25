import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

let Stocks = () => {
    let history = useHistory();
    let [stocks, setStocks] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');


    useEffect(()=> {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json';
        Axios.get(dataURL).then((response)=> {
            setStocks(response.data)
        }).catch((error)=> {
            setErrorMessage(error)
        });

    }, []);

    let selectStock = (stock)=>{
        history.push(`/stocks/${stock.id}`);
    };



    return(
        <React.Fragment>
            <div className="container mt-3">
             <div className="row">
                 <div className="col">
                     <p className="h4 text-primary"> Stocks Information</p>
                     <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur deleniti dolor dolore error, est fugiat hic id in ipsa necessitatibus nihil obcaecati optio possimus praesentium quam quibusdam quidem repellendus rerum, suscipit tenetur voluptas voluptates! Ex labore molestiae pariatur! Neque!</p>
                 </div>
             </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-striped table-hover text-center ">
                            <thead className="text-white bg-secondary">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Industry</td>
                                <td>Market</td>
                                <td>Sector</td>
                                <td>Symbol</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                stocks.length > 0 ?
                                    <React.Fragment>
                                        {
                                            stocks.map(stock=>{
                                                return(
                                                    <tr key={stock.id} onClick={selectStock.bind(this, stock)}>
                                                        <td>{stock.id}</td>
                                                        <td className="font-weight-bold "><u>{stock.name}</u></td>
                                                        <td>{stock.industry}</td>
                                                        <td>{stock.market}</td>
                                                        <td>{stock.sector}</td>
                                                        <td>{stock.symbol}</td>
                                                    </tr>

                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
};

export default Stocks;