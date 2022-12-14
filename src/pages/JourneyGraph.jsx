import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import ContairnerHeader from '../components/ContairnerHeader.jsx'
import CardEmpy from '../components/CardEmpy.jsx'
import Diagram , { useSchema,createSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import DiagramNodeHeader from '../components/DiagramNodeHeader.jsx'
import DiagramNodeHeaderEnd from '../components/DiagramNodeHeaderEnd.jsx'
import DiagramNodeIcon from '../components/DiagramNodeIcon.jsx'
import DiagramNodeIconNPS from '../components/DiagramNodeIconNPS.jsx'
import DiagramNodeIconFilter from '../components/DiagramNodeIconFilter.jsx'
import DiagramNodeVerticalDivider from '../components/DiagramNodeVerticalDivider.jsx'
import DiagramNodeHorizontalDivider from '../components/DiagramNodeHorizontalDivider.jsx'
import DiagramNodeKPI from '../components/DiagramNodeKPI.jsx'
import DiagramNodeSide from '../components/DiagramNodeSide.jsx'
import DiagramNodeList from '../components/DiagramNodeList.jsx'


const initialSchema = createSchema({
    nodes: [
   
      // headers
      { id: 'pre', content: 'PRE VISITA', coordinates: [50, 10], render:DiagramNodeHeader ,disableDrag: true},
      { id: 'visit', content: 'VISITA', coordinates: [380, 10], render:DiagramNodeHeader ,disableDrag: true},
      { id: 'post', content: 'POST VISITA', coordinates: [710, 10], render:DiagramNodeHeader ,disableDrag: true},
      { id: 'fin', content: 'FIN', coordinates: [1040, 10], render:DiagramNodeHeaderEnd ,disableDrag: true},
      { id: 'macro', content: 'MACRO', coordinates: [-25, 295], render:DiagramNodeSide ,disableDrag: true},
      { id: 'micro', content: 'MICRO', coordinates: [-25, 450], render:DiagramNodeSide ,disableDrag: true},
      // lineas divisorias
      { id: 'div-v-1', coordinates: [365, 30],disableDrag: true, render:DiagramNodeVerticalDivider },
      { id: 'div-v-2', coordinates: [695, 30],disableDrag: true, render:DiagramNodeVerticalDivider },
      { id: 'div-v-3', coordinates: [1025, 30],disableDrag: true, render:DiagramNodeVerticalDivider },
      { id: 'div-h-1', coordinates: [20, 250],disableDrag: true, render:DiagramNodeHorizontalDivider },
      { id: 'div-h-2', coordinates: [20, 380],disableDrag: true, render:DiagramNodeHorizontalDivider },
      // filtros
      { id: 'f1',coordinates: [-15, 15], render: DiagramNodeIconFilter, data:{icon:'fa-solid fa-filter'},disableDrag: true},
      // Iconos Journey
      { id: '1',coordinates: [50, 60], render: DiagramNodeIcon, data:{icon:'fa-solid fa-calendar-check', desc:'Agenda'},disableDrag: true,inputs: [{ id: '1-1', alignment: 'left' }], outputs: [{ id: '1-2', alignment: 'right' }]},
      { id: '2',coordinates: [160, 150], render: DiagramNodeIcon, data:{icon:'fa-solid fa-blender-phone', desc:'Licuadora'},disableDrag: true,inputs: [{ id: '2-1', alignment: 'left' }], outputs: [{ id: '2-2', alignment: 'right' }]},
      { id: '3',coordinates: [270, 60], render: DiagramNodeIcon, data:{icon:'fa-solid fa-address-book', desc:'Previsita'},disableDrag: true,inputs: [{ id: '3-1', alignment: 'left' }], outputs: [{ id: '3-2', alignment: 'right' }]},
      { id: '4',coordinates: [380, 150], render: DiagramNodeIcon, data:{icon:'fa-solid fa-calendar-check', desc:'Cumplimiento'},disableDrag: true,inputs: [{ id: '4-1', alignment: 'left' }], outputs: [{ id: '4-2', alignment: 'right' }]},
      { id: '5',coordinates: [490, 60], render: DiagramNodeIcon, data:{icon:'fa-solid fa-triangle-exclamation', desc:'Incumplimiento'},disableDrag: true,inputs: [{ id: '5-1', alignment: 'left' }], outputs: [{ id: '5-2', alignment: 'right' }]},
      { id: '6',coordinates: [600, 150], render: DiagramNodeIcon, data:{icon:'fa-solid fa-arrows-turn-to-dots', desc:'Derivaciones'},disableDrag: true,inputs: [{ id: '6-1', alignment: 'left' }], outputs: [{ id: '6-2', alignment: 'right' }]},
      { id: '7',coordinates: [710, 60], render: DiagramNodeIcon, data:{icon:'fa-solid fa-phone', desc:'Post Visita'},disableDrag: true,inputs: [{ id: '7-1', alignment: 'left' }], outputs: [{ id: '7-2', alignment: 'right' }]},
      { id: '8',coordinates: [820, 150], render: DiagramNodeIcon, data:{icon:'fa-solid fa-ban', desc:'Evitables'},disableDrag: true,inputs: [{ id: '8-1', alignment: 'left' }], outputs: [{ id: '8-2', alignment: 'right' }]},
      { id: '9',coordinates: [930, 60], render: DiagramNodeIcon, data:{icon:'fa-solid fa-person-walking-arrow-loop-left', desc:'Reiterado \n Garantia'},disableDrag: true,inputs: [{ id: '9-1', alignment: 'left' }], outputs: [{ id: '9-2', alignment: 'right' }]},
      { id: '10',coordinates: [1040, 100], render: DiagramNodeIconNPS, data:{icon:'fa-solid fa-face-meh', desc:'NPS'},disableDrag: true,inputs: [{ id: '10-1', alignment: 'left' }], outputs: [{ id: '10-2', alignment: 'right' }] },
      // KPIs Macro
      { id: 'k1', coordinates: [45, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Prom. Horas de Agenda", value:"46.2 hs"}},
      { id: 'k2', coordinates: [155, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Cancelacion proactiva", value:"7.2 %"}},
      { id: 'k3', coordinates: [265, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Visitas confirmadas", value:"65.3 %"}},
      { id: 'k4', coordinates: [375, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Cumplimiento", value:"72.0 %"}},
      { id: 'k5', coordinates: [485, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Srv Incumplido", value:"15.9 %"}},
      { id: 'k6', coordinates: [595, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Derivaciones", value:"12.3 %"}},
      { id: 'k7', coordinates: [705, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Mala calidad post Visita", value:"9.6 %"}},
      { id: 'k8', coordinates: [815, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Srv Evitables", value:"11.1 %"}},
      { id: 'k9', coordinates: [925, 270],disableDrag: true, render:DiagramNodeKPI, data:{desc:"Srv con revisita en 30d", value:"20.8 %"}},
      // KPIs Opr - linea 1
      { id: 'k11', coordinates: [45, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["% Cli en agenda","Bolsa de pendientes"] }},
      { id: 'k12', coordinates: [155, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["% Anuladas", "% Sol. Online"] }},
      { id: 'k13', coordinates: [265, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["% Llamados", "% Llamadas con resp","% Confirmacion"] }},
      { id: 'k14', coordinates: [375, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Cumpl. de una", "Cump en BH"] }},
      { id: 'k15', coordinates: [485, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Cli con reagenda", "Cli con agenda >7d", "Cli Referidos","Motivos Inc"] }},
      { id: 'k16', coordinates: [595, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Pase a Red","Pase a Edif","Pase a Inst"] }},
      { id: 'k17', coordinates: [705, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Llamadas", "Llamadas con Resp"] }},
      { id: 'k18', coordinates: [815, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Truck roll","Ots en Garantia"] }},
      { id: 'k19', coordinates: [925, 400],disableDrag: true, render:DiagramNodeList, data:{kpis:["Srv Reiterado", "Garantia inst"] }},
 
    ],
    links: [   
        { input: '1-2',  output: '2-1', readonly: false},
        { input: '2-2',  output: '3-1', readonly: false },
        { input: '3-2',  output: '4-1', readonly: false },
        { input: '4-2',  output: '5-1', readonly: false },
        { input: '5-2',  output: '6-1', readonly: false },
        { input: '6-2',  output: '7-1', readonly: false },
        { input: '7-2',  output: '8-1', readonly: false },
        { input: '8-2',  output: '9-1', readonly: false },
        { input: '9-2',  output: '10-1', readonly: false },
        
    ]
  });


function JourneyGraph() {
    

    const [schema, { onChange }] = useSchema(initialSchema);
   
    return (
    <>
        <WrapperContainer>
            <ContairnerHeader title={"Journey del Cliente"} />
            <WrapperRow>
    
                <CardEmpy>
                    <div style={{ height: '550px' }}>
                        <Diagram schema={schema} onChange={onChange} />
                    </div>
                </CardEmpy>
            
            </WrapperRow>
        </WrapperContainer>
    </>
        );
  }
  
  export default JourneyGraph;