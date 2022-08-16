import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import CardEmpy from '../components/CardEmpy.jsx'

function Dashboard() {
    return (
    
    <>

        <WrapperContainer>
          <WrapperRow>

            <CardEmpy>
              <iframe title="Iframe" width="100%" height="620" vertical-align="top" src="https://app.powerbi.com/view?r=eyJrIjoiNmYyNDkxNGEtMTViMi00NTI5LThkNWQtMTAzZDdhODllYTBlIiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9" id ="iframePBI" frameBorder="0" allowFullScreen={true} ></iframe>
            </CardEmpy>

          </WrapperRow>

        </WrapperContainer>
      
    </>
        );
  }
  
  export default Dashboard;