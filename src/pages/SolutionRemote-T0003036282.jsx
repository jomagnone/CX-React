import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardProgress from '../components/CardProgress.jsx'
import CardOKR from '../components/CardOKR.jsx'
import CardPending from '../components/CardPending.jsx'
import CardDescription from '../components/CardDescription.jsx'
import CardTaskList from '../components/CardTaskList.jsx'
import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'

function SolutionRemote() {
    return (
    <>
    
        <WrapperContainer>
          <ContairnerHeader title={"Solucion Remota"} />
          <WrapperRow>
            <CardProgress value={"70%"} />
            <CardOKR kr={"Operacion Digital"} />
            <CardPending q={"4"} />
          </WrapperRow> 
          <WrapperRow>
            <CardDescription desc={"Potenciar e innovar la atención técnica, optimizando la asignación del trabajo y el cumplimiento de lo pactado con el cliente, para mejorar su experiencia en el delivery de la última milla de nuestro servicio"} />
          </WrapperRow>
          <WrapperRow>
            <CardTaskList />
          </WrapperRow>
        </WrapperContainer>
  
    </>
        );
  }
  
  export default SolutionRemote;