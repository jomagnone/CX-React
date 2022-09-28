import '../styles/CardTaskItem.css'
import {FetchIssueAvance} from '../utils/FetchJira.jsx'
import { useEffect, useState,useContext } from 'react';
import { EpicContext } from '../contexts/EpicContext';
import ModalDescription from './ModalDescription.jsx';



function CardTaskItem({issue}) {


      const [avance, setAvance] = useState("0%");
      const [modalDescShow, setModalDescShow] = useState(false);
      const EpicFromContext = useContext(EpicContext);
      

      useEffect(() => {
            FetchIssueAvance(issue)
                  .then(result => {setAvance(result)
                                    EpicFromContext.setAvanceIssue(issue.key, avance)
                                    })    
                  .catch(err => console.log("error:"+err));

      }, []);
     
     const handleClose = () => setModalDescShow(false);
     const handleShow = () => {setModalDescShow(true); }
     const handleShowTooltips = () => "na"


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
                  <div id="btnInfo" className="col-auto tooltipInfo" onClick={issue.fullDesc?handleShow:handleShowTooltips}>
                        <a  className="btn btn-info btn-circle btn-sm ml-md-3 textWhite">
                              <i className="fas fa-info"></i>
                        </a>
                        <span className="tooltiptext">{issue.fullDesc?"Mas info":"Sin Datos"}</span> 
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
            <ModalDescription
                  show={modalDescShow}
                  onHide={handleClose}
                  issuekey= {issue.key}
                  desc= {issue.fullDesc}
                  title= {issue.desc}
            />
            
        </>
        );
  }
  
  export default CardTaskItem;