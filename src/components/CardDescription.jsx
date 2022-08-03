

function CardDescription({desc}) {
    return (
        <>
            
                  <div className="col-lg-12">
                        <div className="card shadow mb-4">
                              <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">Descripcion de Iniciativa</h6>
                              </div>
                              <div className="card-body"> {desc} </div>
                        </div>
                  </div>
            
        </>
        );
  }
  
  export default CardDescription;