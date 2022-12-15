import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import CardPBI from '../components/CardPBI.jsx'



function Journey() {
    return (
    
    <>

        <WrapperContainer>
          <WrapperRow>

            <CardPBI>
            
             <iframe 
                title="Iframe" 
                width="100%" 
                height="620" 
                vertical-align="top" 
                src="https://app.powerbi.com/view?r=eyJrIjoiZjlmNTNhMDQtNjFhNS00ZTAyLTlkNmQtMmQzMzIxMWY5Y2U4IiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9" 
                id ="iframePBI"  
                frameBorder="0" 
                allowFullScreen={false} >  
              </iframe>
      
            </CardPBI>

          </WrapperRow>

        </WrapperContainer>
      
    </>
        );
  }
  
  export default Journey;