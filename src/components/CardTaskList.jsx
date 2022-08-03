import CardTaskItem from '../components/CardTaskItem.jsx'

function CardTaskList({title}) {
    return (
        <>
            <div className="col-lg-12">
                  <div className="card mb-4">
                              
                        <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">Estado de tareas</h6>
                        </div>
                        <div className="card-body">
                        <CardTaskItem task={"Analisis e2e cumplimiento"} value ={"70%"} status={"warning"}/>
                        <CardTaskItem task={"Bloqueos y anulaciones de OT"} value ={"45%"} status={"success"}/>
                        <CardTaskItem task={"Analisis de OT e2e"} value ={"30%"} status={"success"}/>
                        <CardTaskItem task={"Diagnostico final"} value ={"10%"} status={"success"}/>
                        </div>
                  </div>
            </div>
        </>
        );
  }
  
  export default CardTaskList;