import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardProgress from '../components/CardProgress.jsx'
import CardOKR from '../components/CardOKR.jsx'
import CardPending from '../components/CardPending.jsx'
import CardDescription from '../components/CardDescription.jsx'
import CardTaskList from '../components/CardTaskList.jsx'
import CardEmpy from '../components/CardEmpy'
import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import '../styles/Initiative.css'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'

import { EpicContext } from '../contexts/EpicContext';
import {FetchEpicWithoutSubtask} from '../utils/FetchJira.jsx'
import { useContext,useEffect } from 'react';

function Initiative() {

    const EpicFromContext = useContext(EpicContext);

    const { idInit } = useParams();
 
      useEffect(() => {
        FetchEpicWithoutSubtask(idInit)
            .then(result => EpicFromContext.addEpic(result))
            .catch(err => console.log("error:"+err));

        }, [idInit]);

  
          


    return (
    <>
      {
        !EpicFromContext.epic.issues ?
        <CardEmpy><div className='wraperLoading'><Spinner className="loadingDots" animation="border" variant="secondary"/></div></CardEmpy>
        :
        <WrapperContainer>
          <ContairnerHeader title={EpicFromContext.epic.title} />
          <WrapperRow>
            
            <CardProgress id="avanceIssue" value={EpicFromContext.getAvanceEpic()} />
            <CardOKR kr={EpicFromContext.epic.kr} />
            <CardPending id="pendingIssue" q={EpicFromContext.getPendingEpic()} />
          </WrapperRow> 
          <WrapperRow>
            <CardDescription desc={EpicFromContext.epic.desc} />
          </WrapperRow>
          <WrapperRow>

            <CardTaskList task={EpicFromContext.epic.issues}/>
          </WrapperRow>
        </WrapperContainer>
    
      }
        



        
        
    </>
        );
  }
  
  export default Initiative;