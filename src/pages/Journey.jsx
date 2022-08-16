import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardEmpy from '../components/CardEmpy.jsx'
import Diagram , { useSchema,createSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import {DataJourneyPre, DataJourneyVisit, DataJourneyPost} from '../data/Journey.jsx'
import DiagramNodeHeader from '../components/DiagramNodeHeader.jsx'
import DiagramNodeContent from '../components/DiagramNodeContent.jsx'
import DiagramNodeArrow from '../components/DiagramNodeArrow.jsx'



const initialSchema = createSchema({
    nodes: [
      { id: 'pre', content: 'PRE VISITA', coordinates: [20, 30], render:DiagramNodeHeader },
      { id: 'visit', content: 'VISITA', coordinates: [340, 30], render:DiagramNodeHeader },
      { id: 'post', content: 'POST VISITA', coordinates: [660, 30], render:DiagramNodeHeader },
      { id: 'pre-1', data:DataJourneyPre[0],coordinates: [40, 70], render: DiagramNodeContent},
      { id: 'pre-2', data:DataJourneyPre[1],coordinates: [180, 70], render: DiagramNodeContent},
      { id: 'arrow-1',coordinates: [305, 130], render: DiagramNodeArrow},
      { id: 'visit-1', data:DataJourneyVisit[0],coordinates: [360, 70], render: DiagramNodeContent},
      { id: 'visit-2', data:DataJourneyVisit[1],coordinates: [500, 70], render: DiagramNodeContent},
      { id: 'arrow-2',coordinates: [625, 130], render: DiagramNodeArrow},
      { id: 'post-1', data:DataJourneyPost[0],coordinates: [680, 70], render: DiagramNodeContent},
      { id: 'post-2', data:DataJourneyPost[1],coordinates: [820, 70], render: DiagramNodeContent},
      
    ],
    links: [
  

      { input: 'pre-1',  output: 'pre-2', readonly: false },

      { input: 'pre-2',  output: 'arrow-1', readonly: false },
      { input: 'arrow-1',  output: 'visit-1', readonly: false },

      { input: 'visit-1',  output: 'visit-2', readonly: false },

      { input: 'visit-2',  output: 'arrow-2', readonly: false },
      { input: 'arrow-2',  output: 'post-1', readonly: false },

      { input: 'post-1',  output: 'post-2', readonly: false },
   
     
    ]
  });


function Journey() {
        
    const [schema, { onChange }] = useSchema(initialSchema);
    console.log(DataJourneyPre)
    return (
    <>
        <WrapperContainer>
            <ContairnerHeader title={"Journey del Cliente"} />
            <WrapperRow>
    
                <CardEmpy>
                    <div style={{ height: '22.5rem' }}>
                        <Diagram schema={schema} onChange={onChange} />
                    </div>
                </CardEmpy>
            
            </WrapperRow>
        </WrapperContainer>
    </>
        );
  }
  
  export default Journey;