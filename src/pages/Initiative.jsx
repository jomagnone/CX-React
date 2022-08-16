import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardProgress from '../components/CardProgress.jsx'
import CardOKR from '../components/CardOKR.jsx'
import CardPending from '../components/CardPending.jsx'
import CardDescription from '../components/CardDescription.jsx'
import CardTaskList from '../components/CardTaskList.jsx'
import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import { useParams } from 'react-router-dom';
import DataSquads from '../data/SideBarSquads.jsx'
import NotFound from './NotFound.jsx'



function Initiative() {

    const { idInit } = useParams();

    let initiative = {}
    try {
      initiative = DataSquads.map(s => s.initiatives.filter(i => i.id === idInit)).filter(o => o.length >0)[0][0];
    } catch (error) {
      initiative="error"
    }
    //console.log(initiative)
    return (
    <>
      {
        initiative ==="error" ?
        <NotFound />
        :
        <WrapperContainer>
          <ContairnerHeader title={initiative.title} />
          <WrapperRow>
            <CardProgress value={initiative.progress} />
            <CardOKR kr={initiative.kr} />
            <CardPending q={initiative.pending} />
          </WrapperRow> 
          <WrapperRow>
            <CardDescription desc={initiative.desc} />
          </WrapperRow>
          <WrapperRow>
            <CardTaskList task={initiative.task}/>
          </WrapperRow>
        </WrapperContainer>
      }
        



        
        
    </>
        );
  }
  
  export default Initiative;