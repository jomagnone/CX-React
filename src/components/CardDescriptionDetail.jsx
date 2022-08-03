import Parser from 'html-react-parser';

function CardDescriptionDetail({desc, title}) {
    return (
        <>
            
                  <div className="col-lg-12">
                        <div className="card shadow mb-4">
                              <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                              </div>
                              <div className="card-body"> {Parser(desc)} </div>
                        </div>
                  </div>
            
        </>
        );
  }
  
  export default CardDescriptionDetail;