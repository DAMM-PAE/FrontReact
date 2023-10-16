import React, { useState } from "react";
import "./ListBars.css";

function ListBars({filteredBars}) {


    return(
        <div>
  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '14px' }}>
    <tbody>
      {filteredBars.map((bar) => {
        return (
          <tr key={bar.id}>
            <td style={{ padding: '8px', maxWidth: '60px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>{bar.nom}</td>
            <td style={{ padding: '8px', textAlign: 'left', maxWidth: '50px' }}>{`${bar.provincia}/${bar.ciutat}`}</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>{bar.percentatge}</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>{bar.data.toLocaleDateString()}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
    )
}

export default ListBars;