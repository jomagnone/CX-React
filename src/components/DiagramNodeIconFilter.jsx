import '../styles/DiagramNodeIcon.css'
import React from "react";

  const DiagramNodeIconFilter = (props) => {    

      return (
        
        <>
          <div className='DiagramNode tooltipFilter'>
           
             <div className='DiagramNodeIconFilter'>
                <i className={props.data.icon}></i> 
            </div>
            <span className="tooltiptext">Filtrar Region</span> 
          </div>
     
          
         </>
      );
    };
  export default DiagramNodeIconFilter ;