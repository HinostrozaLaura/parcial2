import React from 'react';
const DETALLEPANES = ({nombre,des,costo,imge}) =>{

    return(
        <div className="panes">
        <h3>Nombre del Pan: {nombre}</h3>
        <img style ={{with:100 ,height:200 } }src={imge}></img>
        <hr/>
        <p className="Comentarios">Descripcion : {des}</p>
        <hr/>
        <span>Costo del Pan{costo} soles</span>
        <br/>
        <hr/>

    </div>

    )
}
export  default DETALLEPANES;