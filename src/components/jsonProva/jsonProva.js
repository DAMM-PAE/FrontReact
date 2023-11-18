import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [barsData, setBarsData] = useState(null);

  useEffect(() => {
    const getBars = async () => {
      const url = 'http://nattech.fib.upc.edu:40540/api/bars';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBarsData(data);
      } catch (error) {
        console.error('Error fetching bars data:', error);
      }
    };

    getBars();
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  // Ahora, barsData contiene la información obtenida y puedes usarla en otras partes de tu componente

  return (
    <div>
      {/* Aquí puedes renderizar tu componente utilizando la información de barsData */}
      {barsData && (
        <div>
          <h1>Bars Data</h1>
          <pre>{JSON.stringify(barsData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default YourComponent;