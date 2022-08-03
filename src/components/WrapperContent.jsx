

// envuelve las columnas de la derecha completas (navbar, containers, footer)
function WrapperContent({children}) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                {children}
            </div>
        </div>
        );
  }
  
  export default WrapperContent;