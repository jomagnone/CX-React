import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardEmpy from '../components/CardEmpy.jsx'
import DashboardPieChart from '../components/DashboardPieChart'
import DashboardTabla from '../components/DashboardTabla'
import '../styles/Dashboard.css';

function Journey() {
    return (
    
    <>

     
          <WrapperContainer>
            <ContairnerHeader title={"Dashboard - Avance de OKR's ***Informacion de prueba***"} />
            <WrapperRow>

            {/*<!-- Content Column -->*/}
            <div className="col-lg-8 mb-7">

              {/*<!-- Project Card Example -->*/}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Avance de KR's</h6>
                </div>
                <div className="card-body">
                  <h4 className="small ">Incrementar la contactación de todas las campañas<span className="float-right">20%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small">Asegurar el nuevo modelo de trabajo sobre ICD <span className="float-right">40%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small"> Mejorar proceso sobre materiales en tránsito <span className="float-right">60%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small">Mejorar la percepción del servicio de los clientes <span className="float-right">80%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small"> Reducir tiempo de agenda a 24hs<span className="float-right">Complete!</span></h4>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <h1 class="h3 mb-2 text-gray-800"><br />Tablas con informacion descargable</h1>
            </div>
            



            {/*<!-- Pie Chart-->*/}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/*<!-- Card Header - Dropdown -->*/}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Distrbucion de Iniciativas</h6>
     
                </div>
                {/*<!-- Card Body -->*/}
                <div className="card-body">
                  <div className="PieChart chart-pie ">
                    <DashboardPieChart />
                  </div>
                  <div className="mt-4 text-left small">
                    <span className="mr-2 LegendPieChart">
                      <i className="fas fa-circle text-primary"></i> Mejorar proceso sobre materiales en tránsito<br />
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-success"></i> Reducir tiempo de agenda a 24hs<br />
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-info"></i> Mejorar la percepción del servicio de los clientes<br />
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-danger"></i> Incrementar la contactación de todas las campañas<br />
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-warning"></i> Asegurar el  nuevo modelo de trabajo sobre ICD    
                    </span>

                  </div>
                </div>
              </div>
            </div>
          

          </WrapperRow>
      
          <WrapperRow>

          {/*<!-- DataTales Example -->*/}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Detalle de Iniciativas</h6>
            </div>
            <div className="card-body">
            <DashboardTabla />
            </div>
          </div>

       
          </WrapperRow>
        </WrapperContainer>
      
    </>
        );
  }
  
  export default Journey;