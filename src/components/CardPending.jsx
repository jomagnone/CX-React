

function CardPending({q}) {
    return (
        <>
         {/* Pending Requests Card Example */}
         <div className="col-xl-4 col-md-4 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Tareas Pendientes</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{q}</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        </>
        );
  }
  
  export default CardPending;