

function CardOKR({kr}) {
    return (
        <>
   
         <div className="col-xl-4 col-md-4 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Key Result</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{kr}</div>
                    </div>
                    <div className="col-auto">
        
                      <i className="fas fa-wrench fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
        );
  }
  
  export default CardOKR;