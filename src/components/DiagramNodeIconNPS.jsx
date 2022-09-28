import '../styles/DiagramNodeIconNPS.css'
import React from "react";

  const DiagramNodeIconNPS = (props) => {    

    const { inputs } = props;
    const { outputs } = props;


      return (
        
        <>
          <div className='DiagramNodeNPS'>
           
             <div className='DiagramNodeIconNPS'>
                <i className={props.data.icon}></i> 
            </div>
              {inputs.map((port) => React.cloneElement(port, {
                style: { width: '80px', height: '0px',background: '#1B263B0'}
              }))}
              {outputs.map((port) => React.cloneElement(port, {
                style: { width: '80px', height: '0px',background: '#0000000'}
              }))}
          </div>
          <div className='DiagramNodeTextNPS'>
              {props.data.desc}
          </div>
          
         </>
      );
    };
  export default DiagramNodeIconNPS ;