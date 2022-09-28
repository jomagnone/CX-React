import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import CardEmpy from '../components/CardEmpy.jsx'
import underConstruction from '../img/under-construction.jpg'
import '../styles/UnderConstruction.css'


function UnderConstruction() {
    return (
    
    <>

        <WrapperContainer>
          <WrapperRow>

            <CardEmpy>
              <img src={underConstruction} className="ImgConstruction"/>
            </CardEmpy>

          </WrapperRow>

        </WrapperContainer>
      
    </>
        );
  }
  
  export default UnderConstruction;