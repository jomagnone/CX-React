import DataSquads from '../data/SideBarSquads.jsx'
import SideBarItem from './SideBarItem.jsx';
import ModalAlert from './ModalAlert.jsx';
import {FetchAllEpic} from '../utils/FetchJira.jsx'
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/SideBar.css'

function SideBarGroupItemSquad({title, subtitle}) {


    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => window.location.reload();
    const [initiativesDT, setInitiativesDT] = useState([]);
    const [initiativesED, setInitiativesED] = useState([]);
    const [initiativesGM, setInitiativesGM] = useState([]);
    const [initiativesMC, setInitiativesMC] = useState([]);
    const [initiativesOther, setInitiativesOther] = useState([]);


    useEffect(() => {
        //console.log(DataSquads.filter(o => o.title === title)[0].id);
        switch(title) {
            case 'Delivery Tecnico':
                FetchAllEpic(DataSquads.filter(o => o.title === title)[0].id)
                        .then(r =>setInitiativesDT(r))
                        .catch(e => e?setModalShow(true): console.log(e))
                break
            case 'Exp. Digital':
                FetchAllEpic(DataSquads.filter(o => o.title === title)[0].id).then(r =>setInitiativesED(r)).catch(e=> console.log(e));
                break
            case 'Go 2 Market':
                FetchAllEpic(DataSquads.filter(o => o.title === title)[0].id).then(r =>setInitiativesGM(r)).catch(e=> console.log(e));
                break
            case 'Mejora Continua':
                let defect = (DataSquads.filter(o => o.title === title)[0].initiatives).map(o => ({key:o.id, valor:o.title}))
                FetchAllEpic(DataSquads.filter(o => o.title === title)[0].id)
                        .then(r =>setInitiativesMC(r.concat(defect)))
                        .catch(e=> console.log(e));
                break
            default:
                setInitiativesOther((DataSquads.filter(o => o.title === title)[0].initiatives).map(o => ({key:o.id, valor:o.title})))
                break
              }

        },[]);

    const getInitiative = (sqad) => {
        switch(sqad) {
            case 'Delivery Tecnico':
                return initiativesDT
            case 'Exp. Digital':
                return initiativesED
            case 'Go 2 Market':
                return initiativesGM
            case 'Mejora Continua':
                return initiativesMC
            default:
                return initiativesOther

        }
    };

    let replaceAll = i => i.replace(/[/. ]/g,"");
    let shortText = (str) => str.length > 24 ? str.substring(0,22)+"..." : str
    let textTransform = (str) => shortText(str.toLowerCase().split(" ").map(o => o.replace(/^./, str => str.toUpperCase())).join(" "))
 
         

    return (
        <>
        <ModalAlert
            show={modalShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        />
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#"+replaceAll(title)} aria-expanded="true" aria-controls={replaceAll(title)}>
            <i className={DataSquads.filter(o => o.title == title)[0].icon}></i>
            <span>{title}</span>
        </a>
        <div id={replaceAll(title)} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">{subtitle}</h6>

            {

                getInitiative(title).length < 1 
                ? <div className='wraperLoading'><Spinner className="loadingDots" animation="border" variant="secondary"/></div>
                : getInitiative(title).map((o,ix) => o.key === "divider" ? <h6 key={ix} className="collapse-header">{o.valor}</h6> : <SideBarItem desc={textTransform(o.valor)} link={o.key} key={ix} />)
                 
            }
           
            </div>
        </div>

        </li>
        </>
        );
  }
  
  export default SideBarGroupItemSquad;