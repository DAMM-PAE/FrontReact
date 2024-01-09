import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { baseUrl } from '../../global';
import './entreguesBar.css';
import moment from 'moment'; 
import Pagination from '../listBars/Pagination';

const EntreguesBar = () => {
    const location = useLocation();
    const bar = location.state.bar;
    const [entregues, setEntregues] = useState([]);
    const entreguesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastEntrega = currentPage * entreguesPerPage;
    const indexOfFirstEntrega = indexOfLastEntrega - entreguesPerPage;
    const currentEntregues = entregues.slice(indexOfFirstEntrega, indexOfLastEntrega);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetchEntregues();
    }, []);

    const fetchEntregues = async () => {
        const url = baseUrl + '/api/bars/' + bar.id + '/entregas';
        try {
            const response = await fetch(url);
            const data = await response.json();

            //ordenar data por atributo fechaEntrega
            data.sort((a, b) => {
                return new Date(a.fechaEntrega) - new Date(b.fechaEntrega);
            });
            setEntregues(data);
        } catch (error) {
            console.log(error);
        }
    }

    const calculateDaysDifference = (fechaPedido, fechaEntrega) => {
        const start = moment(fechaPedido, 'YYYY-MM-DD');
        const end = moment(fechaEntrega, 'YYYY-MM-DD');
        const difference = end.diff(start, 'days');
        return difference;
    }

    const formatDifferenceText = (difference) => {
        if (difference === 1) {
            return { text: '1 dia després', styleClass: 'orange-text' };
        } else if (difference > 1) {
            return { text: `${difference} dies després`, styleClass: 'red-text' };
        } else if (difference === -1) {
            return { text: '1 dia abans', styleClass: 'orange-text' };
        } else if (difference < -1) {
            return { text: `${Math.abs(difference)} dies abans`, styleClass: 'red-text' };
        } else {
            return { text: 'Mateixa data', styleClass: 'green-text' };
        }
    };

    const handleEliminarEntrega = async (id) => {
    const isConfirmed = window.confirm("Estàs segur que vols eliminar l'entrega?");
    
    if (isConfirmed) {
      
      const url = baseUrl + '/api/entregas/' + id + '/';
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      //volver a cargar las entregas
        fetchEntregues();
    }
    }

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="entregues-bar-container">
            <div className="titol-ent">
            <h1 className="h1-css">{bar.nom}</h1>
            <button className="back-button" onClick={goBack}>
                &#10006; 
            </button>
            </div>
            <div className="cuadro-con-tabla">
                <table className="table-css">
                    <thead>
                        <tr>
                            <th className="th-css">Litres Entregats</th>
                            <th className="th-css">Data Predicció</th>
                            <th className="th-css">Data Entrega</th>
                            <th className="th-css">Desviació</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntregues.map((entrega, index) => (
                            <tr key={index}>
                                <td className="td-css">{entrega.litrosEntregados}</td>
                                <td className="td-css">{moment(entrega.fechaPedido).format('DD-MM-YYYY')}</td>
                                <td className="td-css"><b>{moment(entrega.fechaEntrega).format('DD-MM-YYYY')}</b></td>
                                <td className={`td-css ${formatDifferenceText(calculateDaysDifference(entrega.fechaPedido, entrega.fechaEntrega)).styleClass}`}>
                                    {formatDifferenceText(calculateDaysDifference(entrega.fechaPedido, entrega.fechaEntrega)).text}
                                </td>
                                <td className="td-css">
                                    <button className="button-delete-entrega" onClick={() => handleEliminarEntrega(entrega.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    barsPerPage={entreguesPerPage}
                    totalBars={entregues.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default EntreguesBar;
