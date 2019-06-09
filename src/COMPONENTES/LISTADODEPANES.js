import React from "react";
import DETALLEPANES from "./DETALLEPANES";

const LISTADODEHELADOS =()=>(
<div >

    <div>
    <DETALLEPANES nombre="Baguette" des="Baguette, también llamado pan francés, flauta o canilla. Una baguette o baguete es una variedad de pan que se caracteriza por emplear harina de trigo, por ser mucho más largo que ancho y por su corteza crujiente. Es ideal para la elaboración de bocadillos." costo={5} imge={require('../img/BAGUETTE.jpg')}  ></DETALLEPANES>
    <DETALLEPANES nombre="Bolillo" des="Bolillo,  hecho con harina de trigo, muy esponjoso, imitando al pan que hacen en Francia. En México, este tipo de pan se conoce como bolillo, habiendo controversia respecto a lo que se conoce como birote." costo={5} imge={require('../img/BOLILLO.jpg')}  ></DETALLEPANES>
    <DETALLEPANES nombre="Broa de Pan" des="Broa de Pan, la broa es un tipo de pan de maíz elaborado tradicionalmente en Portugal y Galicia, además de en Brasil, donde se condimenta típicamente con hinojo. A diferencia del cornbread típico del sur de Estados Unidos" costo={3} imge={require('../img/BROA.jpg')}  ></DETALLEPANES>
    <DETALLEPANES nombre="Chapati" des="Chapati, el chapati es la forma más común de consumir trigo, y es un alimento básico en el norte del Sureste asiático. En muchas ocasiones se usa la palabra chapati o roti indistintamente para referirse al mismo pan," costo={5} imge={require('../img/CHAPATI.jpg')}  ></DETALLEPANES>
    <DETALLEPANES nombre="Guaguas de Pan" des="Guaguas de Pan,  “Guagua” significa niño(a) o bebe en lengua Quechua, razón por la cual el pan de guagua tiene esa forma. Es protagonista en fiestas, carnavales o en las temporadas navideñas como elemento simbólico de alianzas y compromisos sociales." costo={9} imge={require('../img/GUAGUAS_DE_PAN_RETOKE.jpg')}  ></DETALLEPANES>
    <DETALLEPANES nombre="Hogaza" des="Hogaza,  la Hogaza es un tipo de pan de gran tamaño.Se suele elaborar la hogaza con harina de trigo, tradicionalmente se realizaba con harina de centeno. Suele llevar un ligero porcentaje de salvado." costo={2} imge={require('../img/HOGAZA.jpg')} ></DETALLEPANES>
    <DETALLEPANES nombre="Pan tostado o biscote" des="Pan tostado o biscote, es el pan común o pan de molde que, después de cocido, se parte en rebanadas y se somete a un proceso de tostado que lo deshidrata; su período de conservación es muy elevado." costo={4} imge={require('../img/BICOTE.jpg')}  ></DETALLEPANES>
       
      
    </div>
    <br/>
    </div>
);
export default LISTADODEHELADOS;