import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'


function Dashboard() {
    return (
    
    <>

        <WrapperContainer>
          <WrapperRow>

              {/* Iframe */}
              <div className="card shadow w-100 mb-0 h-100" >
                <div className="card-body">
                  <iframe width="100%" height="620" vertical-align="top" src="https://app.powerbi.com/view?r=eyJrIjoiNmYyNDkxNGEtMTViMi00NTI5LThkNWQtMTAzZDdhODllYTBlIiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9" id ="iframePBI" frameborder="0" allowFullScreen="true"></iframe>
                </div>
              </div>

          </WrapperRow>

        </WrapperContainer>
      
    </>
        );
  }
  
  export default Dashboard;