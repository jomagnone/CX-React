import CardTaskItem from '../components/CardTaskItem.jsx'

function CardTaskList({task}) {

    return (
          
        <>
            <div className="col-lg-12">
                  <div className="card mb-4">
                        <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">Estado de tareas</h6>
                        </div>
                        <div className="card-body">
                             {
                                   task.map((t,ix) => 
                                    <CardTaskItem key={ix} task={t.title} value ={t.progress} status={t.status}/>
                                    )
                             } 
                        </div>
                  </div>
            </div>
        </>
        );
  }
  
  export default CardTaskList;