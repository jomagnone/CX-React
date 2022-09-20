import WrapperContainer from '../components/WrapperContainer.jsx'
import { Spinner } from 'react-bootstrap'
function InitiativeSpinner() {
    return (
    <>
    <WrapperContainer>
    <div className="card shadow w-100 mb-0 h-100" >
      <div className="card-body">
        <div className="text-center">
            <div className="error mx-auto" data-text="">
                <Spinner className="loadingDots" animation="border" variant="secondary"/></div>
            <p className="lead text-gray-800 mb-5">Cargando...</p>
          </div>
      </div>
    </div>
    </WrapperContainer>
    </>
        );
  }
  
  export default  InitiativeSpinner
    ;