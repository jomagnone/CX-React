
import {FetchIssueAvance} from '../utils/FetchJira.jsx'
import { useEffect, useState,useContext } from 'react';
import { EpicContext } from '../contexts/EpicContext';



function CardTaskItem({issue}) {


      const [avance, setAvance] = useState("100%");
      const EpicFromContext = useContext(EpicContext);


      useEffect(() => {
            FetchIssueAvance(issue)
                  .then(result => {setAvance(result)
                                    EpicFromContext.setAvanceIssue(issue.key, avance)
                                    })    
                  .catch(err => console.log("error:"+err));

      }, []);
     
      
      
    return (
        <>
            
            <div className="mb-1 small">{issue.desc}</div>
            <div className="row no-gutters align-items-center">
                  <div className="col">
                        <div className="progress progress-sm mb-2">
                              <div className="progress-bar" role="progressbar" style={{width: avance}}  aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                  </div>
                  <div className="col-auto">
                        <div className="ml-md-3 font-weight-bold text-gray-600"> {avance}</div>
                  </div>
                  <div className="col-auto">
                        { issue.status == "Bloqueado" ? 
                        <a href={"https://gestioncio.telecom.com.ar/browse/"+issue.key} target="_blank" className="btn btn-warning btn-circle btn-sm ml-md-3">
                              <i className="fas fa-exclamation-triangle"></i>
                        </a>
                        : 
                        <a href={"https://gestioncio.telecom.com.ar/browse/"+issue.key} target="_blank" className="btn btn-success btn-circle btn-sm ml-md-3">
                              <i className="fas fas fa-check"></i>
                        </a>
                        }
                        
                  </div>
            </div>
            
            
        </>
        );
  }
  
  export default CardTaskItem;