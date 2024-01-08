import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { baseUrl } from '../../global';
import './entreguesBar.css';
import moment from 'moment'; 

const EntreguesBar = () => {
    const location = useLocation();
    const bar = location.state.bar;
    const [entregues, setEntregues] = useState([]);

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
            return '1 dia després';
        } else if (difference > 1) {
            return `${difference} dies després`;
        } else if (difference === -1) {
            return '1 dia abans';
        } else if (difference < -1) {
            return `${Math.abs(difference)} dies abans`;
        } else {
            return 'Mateixa data';
        }
    }

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

    return (
        <div className="entregues-bar-container">
            <h1 className="h1-css">EntreguesBar</h1>
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
                        {entregues.map((entrega, index) => (
                            <tr key={index}>
                                <td className="td-css">{entrega.litrosEntregados}</td>
                                <td className="td-css">{moment(entrega.fechaPedido).format('DD-MM-YYYY')}</td>
                                <td className="td-css">{moment(entrega.fechaEntrega).format('DD-MM-YYYY')}</td>
                                <td className="td-css">{formatDifferenceText(calculateDaysDifference(entrega.fechaPedido, entrega.fechaEntrega))}</td>
                                <td className="td-css">
                                    <button className="button-delete-entrega" onClick={() => handleEliminarEntrega(entrega.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntreguesBar;
