import WrapperContainer from '../components/WrapperContainer.jsx'

function NotFound() {
    return (
    <>
    <WrapperContainer>
    <div className="card shadow w-100 mb-0 h-100" >
      <div className="card-body">
        <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <p className="text-gray-500 mb-0">No encontramos la informacion que buscas...</p>
            <a href="/">&larr; Volver al Site</a>
          </div>
      </div>
    </div>
    </WrapperContainer>
    </>
        );
  }
  
  export default  NotFound
    ;