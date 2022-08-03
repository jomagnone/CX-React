// envuelve el contenido (cards) de cada pagina 

function WrapperContainer({children}) {
    return (
        <div className="container-fluid">
            
                {children}
           
        </div>
        );
  }
  
  export default WrapperContainer;