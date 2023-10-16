import React from "react";
import "./ListBars.css";

function ListBars({filteredBars}) {


    return(
<div>
  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '14px' }}>
    <tbody>
    {filteredBars.map((bar) => {
  
    const rowStyle = bar.iot ? { background: 'rgba(255, 255, 153, 0.45)' } : {};

    return (
      <tr key={bar.id} style={rowStyle}>
        <td style={{ 
          padding: '8px', 
          maxWidth: '60px', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap', 
          textAlign: 'left', 
          borderRadius: '5px 0 0 5px' 
        }} title={bar.nom}>{bar.nom}</td>
        <td style={{ 
          padding: '8px', 
          textAlign: 'left', 
          maxWidth: '50px' 
        }}>{`${bar.provincia}/${bar.ciutat}`}</td>
        <td style={{ 
          padding: '8px', 
          textAlign: 'center' 
        }}>{bar.percentatge}</td>
        <td style={{ 
          padding: '8px', 
          textAlign: 'center', 
          borderRadius: '0 5px 5px 0' 
        }}>{bar.data.toLocaleDateString()}</td>
      </tr>
    );
  })}
    </tbody>
  </table>
</div>
    )
}

export default ListBars;