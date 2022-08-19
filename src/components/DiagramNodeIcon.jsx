import '../styles/DiagramNodeIcon.css'
import React from "react";

  const DiagramNodeIcon = (props) => {    

    const { inputs } = props;
    const { outputs } = props;


      return (
        
        <>
          <div className='DiagramNode'>
           
             <div className='DiagramNodeIcon'>
                <i className={props.data.icon}></i> 
            </div>
              {inputs.map((port) => React.cloneElement(port, {
                style: { width: '80px', height: '0px',background: '#1B263B0'}
              }))}
              {outputs.map((port) => React.cloneElement(port, {
                style: { width: '80px', height: '0px',background: '#0000000'}
              }))}
          </div>
          <div className='DiagramNodeText'>
              {props.data.desc}
          </div>
          
         </>
      );
    };
  export default DiagramNodeIcon ;