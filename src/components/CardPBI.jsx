import '../styles/CardPBI.css'

function CardPBI({children}) {
    return (
        <>
            
          
            <div className="card shadow w-100 mb-0 h-100" >
                <div className="card-body">
                  {children}
                </div>
              </div>

            
        </>
        );
  }
  
  export default CardPBI;