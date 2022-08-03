

function CardTaskItem({task, value, status}) {
    return (
        <>

            <div className="mb-1 small">{task}</div>
            <div className="row no-gutters align-items-center">
                  <div className="col">
                        <div className="progress progress-sm mb-2">
                              <div className="progress-bar" role="progressbar" style={{width: value}}  aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                  </div>
                  <div className="col-auto">
                        <div className="ml-md-3 font-weight-bold text-gray-600">  {value}</div>
                  </div>
                  <div className="col-auto">
                        { status == "warning" ? 
                        <a href="#" className="btn btn-warning btn-circle btn-sm ml-md-3">
                              <i className="fas fa-exclamation-triangle"></i>
                        </a>
                        : 
                        <a href="#" className="btn btn-success btn-circle btn-sm ml-md-3">
                              <i className="fas fas fa-check"></i>
                        </a>
                        }
                        
                  </div>
            </div>
            
            
        </>
        );
  }
  
  export default CardTaskItem;